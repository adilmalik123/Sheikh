import React from 'react';
import { Helmet } from 'react-helmet';
import { Factory, FlaskConical, Package, Paintbrush, PenTool, Printer, Rocket, Truck } from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import PageHero from '@/components/PageHero';
import PrivateLabelInquiryForm from '@/components/PrivateLabelInquiryForm.jsx';
import SectionIntro from '@/components/SectionIntro';
import { seoMeta } from '@/content/siteContent';
import { useLanguage } from '@/context/LanguageContext';

const PrivateLabelPage = () => {
  const { copy } = useLanguage();
  const services = [
    { icon: PenTool, title: 'Brand Name Creation', desc: 'We shape a memorable beauty identity aligned with your market and target customers.' },
    { icon: Paintbrush, title: 'Logo and Product Design', desc: 'Luxury logo direction, premium pack styling, and visual brand language.' },
    { icon: FlaskConical, title: 'Cream Formulation', desc: 'Whitening cream development and formulation planning tailored to your positioning.' },
    { icon: Package, title: 'Packaging Design', desc: 'Boxes, jars, bottles, label systems, and shelf-ready premium presentation.' },
    { icon: Printer, title: 'Printing and Finishing', desc: 'Professional print execution, label finishing, and polished brand presentation.' },
    { icon: Factory, title: 'Filling and Manufacturing', desc: 'Production-scale filling, quality-focused manufacturing, and consistent batch delivery.' },
    { icon: Truck, title: 'Worldwide Delivery', desc: 'Global dispatch support for private label launches, bulk orders, and distributor shipments.' },
    { icon: Rocket, title: 'Launch Support', desc: 'We help clients launch their own whitening cream brand under their own name.' },
  ];
  const steps = ['Discovery and brand planning', 'Name, logo, and product design', 'Cream and soap formulation selection', 'Packaging, printing, and approval', 'Filling and bulk manufacturing', 'Final quality control', 'Worldwide delivery'];

  return (
    <>
      <Helmet>
        <title>{`Private Label - ${seoMeta.title}`}</title>
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <PageHero eyebrow={copy.common.privateLabel} title={copy.privateLabelPage.title} subtitle={copy.privateLabelPage.subtitle} image="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1200&q=80" />

          <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionIntro eyebrow="End-to-End Services" title={copy.home.privateLabelTitle} text={copy.privateLabelPage.promise} align="center" />
              <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                  <div key={service.title} className="luxury-card p-8">
                    <div className="inline-flex rounded-full bg-[#fff0f7] p-4 text-[#9e2b86]">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-serif text-3xl text-[#2f1538]">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#654a68]">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#fff7fb] px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionIntro eyebrow="Process" title="How Sheikh Brothers builds your beauty brand" text="A complete private label path from concept and packaging through production and delivery." align="center" />
              <div className="mx-auto mt-14 max-w-4xl">
                {steps.map((step, index) => (
                  <div key={step} className="relative mb-8 flex items-start">
                    {index !== steps.length - 1 ? <div className="absolute bottom-[-2rem] left-7 top-14 w-px bg-[#d9b5c9]"></div> : null}
                    <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#351343] text-lg font-bold text-white shadow-md">
                      {index + 1}
                    </div>
                    <div className="ml-6 pt-2">
                      <h3 className="font-serif text-2xl text-[#2f1538]">{step}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-16 lg:grid-cols-2">
                <div>
                  <SectionIntro eyebrow="Partner With Us" title="Everything needed to launch a whitening cream brand" text={copy.privateLabelPage.promise} />
                  <div className="mt-8 grid gap-4">
                    {copy.lists.privateLabelServices.map((item) => (
                      <div key={item} className="luxury-card px-5 py-4 text-sm font-medium text-[#654a68]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <PrivateLabelInquiryForm />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivateLabelPage;
