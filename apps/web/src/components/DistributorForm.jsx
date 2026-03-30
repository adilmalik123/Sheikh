import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import pb from '@/lib/pocketbaseClient';
import { useLanguage } from '@/context/LanguageContext';

const DISTRIBUTOR_CONTACT_EMAIL = 'info@sheikhcosmetics.com';

const DistributorForm = () => {
  const { copy } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const openFallbackEmail = () => {
    const subject = `Distributor Inquiry - ${formData.companyName || formData.fullName || 'New Request'}`;
    const body = [
      `Full Name: ${formData.fullName || '-'}`,
      `Company Name: ${formData.companyName || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Phone: ${formData.phone || '-'}`,
      `City / Region: ${formData.city || '-'}`,
      '',
      'Additional Information:',
      formData.message || '-',
    ].join('\n');

    window.location.href = `mailto:${DISTRIBUTOR_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await pb.collection('distributors').create({ ...formData, status: 'new' }, { $autoCancel: false });
      toast.success('Inquiry submitted successfully. We will contact you shortly.');
      setFormData({ fullName: '', companyName: '', phone: '', email: '', city: '', message: '' });
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
    <form onSubmit={handleSubmit} className="luxury-card space-y-6 p-8">
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
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">City / Region *</Label>
        <Input id="city" name="city" value={formData.city} onChange={handleChange} required className="bg-background" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="resize-none bg-background" placeholder="Tell us about your distribution network..." />
      </div>
      <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-[#b22e85] via-[#813091] to-[#42205f] py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:brightness-110" disabled={loading}>
        {loading ? 'Submitting...' : copy.common.becomeDistributor}
      </Button>
    </form>
  );
};

export default DistributorForm;
