
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import pb from '@/lib/pocketbaseClient';

const OrderConfirmationPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [order, setOrder] = useState(location.state?.order || null);

  useEffect(() => {
    if (!order && id) {
      pb.collection('orders').getOne(id, { $autoCancel: false })
        .then(setOrder)
        .catch(err => console.error('Failed to fetch order:', err));
    }
  }, [id, order]);

  if (!order) {
    return (
      <>
        <Helmet>
          <title>Order Confirmation - Zain Packages</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Loading order details...</h2>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const estimatedDelivery = new Date(order.created);
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 14);

  return (
    <>
      <Helmet>
        <title>{`Order Confirmation - ${order.id}`}</title>
        <meta name="description" content="Your order has been successfully placed. Check your email for order confirmation and tracking details." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-balance">Order confirmed</h1>
                <p className="text-xl text-muted-foreground">
                  Thank you for your order! We've received your request and will process it shortly.
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Order details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Order Number</p>
                      <p className="font-semibold">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Order Date</p>
                      <p className="font-semibold">{new Date(order.created).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Status</p>
                      <p className="font-semibold capitalize">{order.orderStatus}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Estimated Delivery</p>
                      <p className="font-semibold">{estimatedDelivery.toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-muted-foreground mb-2">Product</p>
                    <p className="font-medium">{order.productType}</p>
                    {order.customizationDetails && (
                      <p className="text-sm text-muted-foreground mt-1">{order.customizationDetails}</p>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-muted-foreground mb-2">Quantity</p>
                    <p className="font-medium">{order.quantity} units</p>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-muted-foreground mb-2">Total Amount</p>
                    <p className="text-2xl font-bold">${order.totalPrice.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Delivery information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-muted-foreground mb-1">Customer Name</p>
                    <p className="font-medium">{order.customerName}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Delivery Address</p>
                    <p className="font-medium">{order.deliveryAddress}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground mb-1">Email</p>
                      <p className="font-medium text-sm">{order.customerEmail}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Phone</p>
                      <p className="font-medium">{order.customerPhone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-primary" />
                  What happens next?
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Mail className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>You'll receive an order confirmation email at {order.customerEmail}</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Our team will contact you within 24 hours to confirm details</span>
                  </li>
                  <li className="flex items-start">
                    <Package className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Production will begin after design approval and payment confirmation</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Back to Home
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrderConfirmationPage;
