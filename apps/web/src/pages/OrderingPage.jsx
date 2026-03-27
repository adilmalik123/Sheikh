
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

const OrderingPage = () => {
  const navigate = useNavigate();
  const { addItem, cartItems } = useCart();
  const [formData, setFormData] = useState({
    productType: '',
    printingOption: '',
    size: '',
    color: '',
    quantity: '',
    customizationDetails: ''
  });

  const productTypes = [
    { value: 'standard', label: 'Standard Tissue Box', price: 2.50 },
    { value: 'premium', label: 'Premium Tissue Box', price: 3.75 },
    { value: 'luxury', label: 'Luxury Tissue Box', price: 5.20 }
  ];

  const printingOptions = [
    { value: 'single', label: 'Single Color' },
    { value: 'full', label: 'Full Color CMYK' },
    { value: 'special', label: 'Full Color + Special Finishes' }
  ];

  const sizes = [
    { value: 'small', label: 'Small (20x12x8 cm)' },
    { value: 'medium', label: 'Medium (24x14x10 cm)' },
    { value: 'large', label: 'Large (28x16x12 cm)' },
    { value: 'custom', label: 'Custom Size' }
  ];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddToCart = () => {
    if (!formData.productType || !formData.quantity) {
      toast.error('Please select product type and quantity');
      return;
    }

    const selectedProduct = productTypes.find(p => p.value === formData.productType);
    const quantity = parseInt(formData.quantity);

    if (quantity < 500) {
      toast.error('Minimum order quantity is 500 units');
      return;
    }

    const item = {
      id: `${formData.productType}-${Date.now()}`,
      name: selectedProduct.label,
      description: `${formData.printingOption || 'Standard'} printing, ${formData.size || 'Standard'} size`,
      price: selectedProduct.price,
      quantity: quantity,
      customization: formData.customizationDetails
    };

    addItem(item);
    toast.success('Item added to cart');
    
    setFormData({
      productType: '',
      printingOption: '',
      size: '',
      color: '',
      quantity: '',
      customizationDetails: ''
    });
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    navigate('/checkout');
  };

  return (
    <>
      <Helmet>
        <title>Order Now - Zain Packages</title>
        <meta name="description" content="Order custom tissue boxes online. Select your product type, customize your design, and get instant pricing for bulk orders." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{letterSpacing: '-0.02em'}}>
                Order custom tissue boxes
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Configure your order and get instant pricing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Product selection</CardTitle>
                    <CardDescription>Choose your tissue box type and specifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="productType">Product Type</Label>
                      <Select value={formData.productType} onValueChange={(value) => handleSelectChange('productType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product type" />
                        </SelectTrigger>
                        <SelectContent>
                          {productTypes.map(type => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label} - ${type.price}/unit
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="printingOption">Printing Option</Label>
                      <Select value={formData.printingOption} onValueChange={(value) => handleSelectChange('printingOption', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select printing option" />
                        </SelectTrigger>
                        <SelectContent>
                          {printingOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="size">Size</Label>
                      <Select value={formData.size} onValueChange={(value) => handleSelectChange('size', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {sizes.map(size => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (minimum 500)</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        type="number"
                        min="500"
                        step="100"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Enter quantity"
                        className="text-foreground"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customization options</CardTitle>
                    <CardDescription>Add your design preferences and special requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="color">Primary Color</Label>
                      <Input
                        id="color"
                        name="color"
                        type="text"
                        value={formData.color}
                        onChange={handleChange}
                        placeholder="e.g., Blue, #0066CC"
                        className="text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customizationDetails">Design Details</Label>
                      <Textarea
                        id="customizationDetails"
                        name="customizationDetails"
                        value={formData.customizationDetails}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your design requirements, logo placement, text, etc."
                        className="text-foreground"
                      />
                    </div>

                    <Button onClick={handleAddToCart} className="w-full">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <ShoppingCart />
                
                {cartItems.length > 0 && (
                  <Button onClick={handleProceedToCheckout} className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OrderingPage;
