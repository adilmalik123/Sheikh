import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/context/LanguageContext';

const ContactPage = () => {
  const { copy } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{`${copy.nav.contact} - Sheikh Cosmetics`}</title>
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <PageHero eyebrow="Contact Sheikh Cosmetics" title={copy.contactPage.title} subtitle={copy.contactPage.subtitle} image="/premium-beauty-partnership.avif" />
          <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="space-y-8 lg:col-span-1">
                <div className="luxury-card flex items-start space-x-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0f7]">
                    <MapPin className="h-6 w-6 text-[#9e2b86]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{copy.lists.contactDetails.addressLabel}</h3>
                    <p className="text-muted-foreground">{copy.lists.contactDetails.address}</p>
                  </div>
                </div>
                <div className="luxury-card flex items-start space-x-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0f7]">
                    <Phone className="h-6 w-6 text-[#9e2b86]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{copy.lists.contactDetails.phoneLabel}</h3>
                    <p className="text-muted-foreground">{copy.lists.contactDetails.phone}</p>
                  </div>
                </div>
                <div className="luxury-card flex items-start space-x-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff0f7]">
                    <Mail className="h-6 w-6 text-[#9e2b86]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{copy.lists.contactDetails.emailLabel}</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@sheikhcosmetics.com" className="underline decoration-[#d4a454] underline-offset-4 hover:opacity-80">
                        info@sheikhcosmetics.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
