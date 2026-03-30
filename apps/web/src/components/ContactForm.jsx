import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import pb from '@/lib/pocketbaseClient';
import { useLanguage } from '@/context/LanguageContext';

const CONTACT_EMAIL = 'info@sheikhcosmetics.com';

const ContactForm = () => {
  const { copy } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const openFallbackEmail = () => {
    const subject = formData.subject || 'Contact Inquiry';
    const body = [
      `Name: ${formData.name || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Phone: ${formData.phone || '-'}`,
      '',
      'Message:',
      formData.message || '-',
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await pb.collection('contacts').create(formData, { $autoCancel: false });
      toast.success('Form submitted successfully. We will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error?.response?.message || error?.message || 'Please try again.';
      toast.error(`Failed to submit form. ${errorMessage}`);
      openFallbackEmail();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="luxury-card space-y-6 p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name *</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="bg-background" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="resize-none bg-background" />
      </div>
      <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-[#b22e85] via-[#813091] to-[#42205f] py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:brightness-110" disabled={loading}>
        {loading ? 'Sending...' : copy.common.contactUs}
      </Button>
    </form>
  );
};

export default ContactForm;
