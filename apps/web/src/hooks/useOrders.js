
import { useState } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async (orderData) => {
    setLoading(true);
    setError(null);
    
    try {
      const record = await pb.collection('orders').create({
        customerName: orderData.customerName,
        customerEmail: orderData.customerEmail,
        customerPhone: orderData.customerPhone,
        deliveryAddress: orderData.deliveryAddress,
        productType: orderData.productType,
        customizationDetails: orderData.customizationDetails || '',
        quantity: orderData.quantity,
        totalPrice: orderData.totalPrice,
        orderStatus: 'pending',
        paymentMethod: orderData.paymentMethod || '',
        notes: orderData.notes || ''
      }, { $autoCancel: false });
      
      setLoading(false);
      return { success: true, record };
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Failed to create order');
      return { success: false, error: err.message };
    }
  };

  const createConsultation = async (consultationData) => {
    setLoading(true);
    setError(null);
    
    try {
      const record = await pb.collection('consultations').create({
        name: consultationData.name,
        email: consultationData.email,
        phone: consultationData.phone,
        projectDescription: consultationData.projectDescription,
        preferredContactMethod: consultationData.preferredContactMethod || 'email',
        status: 'new'
      }, { $autoCancel: false });
      
      setLoading(false);
      return { success: true, record };
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Failed to submit consultation request');
      return { success: false, error: err.message };
    }
  };

  const createInquiry = async (inquiryData) => {
    setLoading(true);
    setError(null);
    
    try {
      const record = await pb.collection('inquiries').create({
        companyName: inquiryData.companyName,
        contactName: inquiryData.contactName,
        email: inquiryData.email,
        phone: inquiryData.phone,
        orderDetails: inquiryData.orderDetails,
        estimatedQuantity: inquiryData.estimatedQuantity || null,
        budget: inquiryData.budget || '',
        status: 'new'
      }, { $autoCancel: false });
      
      setLoading(false);
      return { success: true, record };
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Failed to submit inquiry');
      return { success: false, error: err.message };
    }
  };

  return {
    createOrder,
    createConsultation,
    createInquiry,
    loading,
    error
  };
};
