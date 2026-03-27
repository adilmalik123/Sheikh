
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { useOrders } from '@/hooks/useOrders';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, calculateTotal, clearCart } = useCart();
  const { createOrder, loading } = useOrders();
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    deliveryAddress: '',
    paymentMethod: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const productDetails = cartItems.map(item => 
      `${item.name} (${item.quantity} units @ $${item.price})`
    ).join(', ');

    const customizationDetails = cartItems
      .filter(item => item.customization)
      .map(item => item.customization)
      .join('; ');

    const result = await createOrder({
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
      deliveryAddress: formData.deliveryAddress,
      productType: productDetails,
      customizationDetails: customizationDetails,
      quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: calculateTotal(),
      paymentMethod: formData.paymentMethod,
      notes: formData.notes
    });

    if (result.success) {
      clearCart();
      navigate(`/order-confirmation/${result.record.id}`, { 
        state: { order: result.record } 
      });
    } else {
      toast.error(result.error || 'Failed to place order');
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Checkout - Zain Packages</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <Button onClick={() => navigate('/order')}>Start Shopping</Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout - Zain Packages</title>
        <meta name="description" content="Complete your order for custom tissue boxes. Enter your delivery information and payment details." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{letterSpacing: '-0.02em'}}>
                Checkout
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete your order details
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="customerName">Full Name</Label>
                        <Input
                          id="customerName"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleChange}
                          required
                          className="text-foreground"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="customerEmail">Email</Label>
                          <Input
                            id="customerEmail"
                            name="customerEmail"
                            type="email"
                            value={formData.customerEmail}
                            onChange={handleChange}
                            required
                            className="text-foreground"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="customerPhone">Phone</Label>
                          <Input
                            id="customerPhone"
                            name="customerPhone"
                            type="tel"
                            value={formData.customerPhone}
                            onChange={handleChange}
                            required
                            className="text-foreground"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="deliveryAddress">Delivery Address</Label>
                        <Textarea
                          id="deliveryAddress"
                          name="deliveryAddress"
                          value={formData.deliveryAddress}
                          onChange={handleChange}
                          rows={3}
                          required
                          className="text-foreground"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="paymentMethod">Payment Method</Label>
                        <Select value={formData.paymentMethod} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                            <SelectItem value="cash_on_delivery">Cash on Delivery</SelectItem>
                            <SelectItem value="credit_card">Credit Card</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Any special instructions or requirements"
                          className="text-foreground"
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={loading}>
                        {loading ? 'Processing...' : 'Place Order'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-muted-foreground">{item.quantity} units</p>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span>${calculateTotal().toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
                      <p className="font-medium mb-2">Estimated Delivery:</p>
                      <p>7-14 business days after order confirmation</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;
