import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import pb from '@/lib/pocketbaseClient';
import { useLanguage } from '@/context/LanguageContext';

const PRIVATE_LABEL_CONTACT_EMAIL = 'info@sheikhcosmetics.com';

const PrivateLabelInquiryForm = () => {
  const { copy } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    brandName: '',
    productType: '',
    quantityRequirements: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const openFallbackEmail = () => {
    const subject = `Private Label Inquiry - ${formData.companyName || formData.fullName || 'New Request'}`;
    const body = [
      `Full Name: ${formData.fullName || '-'}`,
      `Company Name: ${formData.companyName || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Phone: ${formData.phone || '-'}`,
      `Desired Brand Name: ${formData.brandName || '-'}`,
      `Product Type: ${formData.productType || '-'}`,
      `Quantity Requirements: ${formData.quantityRequirements || '-'}`,
      '',
      'Additional Details:',
      formData.message || '-',
    ].join('\n');

    window.location.href = `mailto:${PRIVATE_LABEL_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await pb.collection('private_label_inquiries').create(formData, { $autoCancel: false });
      toast.success('Inquiry submitted successfully.');
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        brandName: '',
        productType: '',
        quantityRequirements: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error?.response?.message || error?.message || 'Please try again.';
      toast.error(`Failed to submit inquiry. ${errorMessage}`);
      openFallbackEmail();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="luxury-card relative space-y-6 p-8 md:p-10">
      <div className="mb-8 text-center">
        <h3 className="mb-2 font-serif text-3xl text-[#2f1538]">{copy.common.startProject}</h3>
        <p className="text-sm text-muted-foreground">Fill out the form below to discuss your private label requirements.</p>
        <p className="mt-2 text-sm text-[#7a2c8e]">
          Email:{' '}
          <a href={`mailto:${PRIVATE_LABEL_CONTACT_EMAIL}`} className="font-semibold underline decoration-[#d4a454] underline-offset-4 hover:opacity-80">
            {PRIVATE_LABEL_CONTACT_EMAIL}
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="brandName">Desired Brand Name *</Label>
          <Input id="brandName" name="brandName" value={formData.brandName} onChange={handleChange} required className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="productType">Product Type Interest</Label>
          <Select value={formData.productType} onValueChange={(value) => handleSelectChange('productType', value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select product type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Whitening Creams">Whitening Creams</SelectItem>
              <SelectItem value="Whitening Soaps">Whitening Soaps</SelectItem>
              <SelectItem value="Both">Both Creams & Soaps</SelectItem>
              <SelectItem value="Other">Other Cosmetics</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="quantityRequirements">Estimated Quantity Requirements</Label>
        <Input id="quantityRequirements" name="quantityRequirements" value={formData.quantityRequirements} onChange={handleChange} placeholder="e.g., 5000 units/month" className="bg-background" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Additional Details</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="resize-none bg-background" placeholder="Tell us about your vision, target market, or specific formulation needs..." />
      </div>
      <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-[#b22e85] via-[#813091] to-[#42205f] py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:brightness-110" disabled={loading}>
        {loading ? 'Submitting...' : copy.common.startProject}
      </Button>
    </form>
  );
};

export default PrivateLabelInquiryForm;
