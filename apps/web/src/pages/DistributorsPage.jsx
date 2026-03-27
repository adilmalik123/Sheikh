import React from 'react';
import { Helmet } from 'react-helmet';
import DistributorForm from '@/components/DistributorForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import SectionIntro from '@/components/SectionIntro';
import { useLanguage } from '@/context/LanguageContext';

const DistributorsPage = () => {
  const { copy } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{`${copy.nav.distributors} - Sheikh Cosmetics`}</title>
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <PageHero eyebrow={copy.common.globalSupply} title={copy.distributorsPage.title} subtitle={copy.distributorsPage.subtitle} image="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80" />

          <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <SectionIntro eyebrow={copy.common.becomeDistributor} title={copy.home.distributorTitle} text={copy.home.distributorText} />
                <div className="mt-8 grid gap-4">
                  {['Wholesale pricing support', 'Global shipping coordination', 'Distributor-ready beauty presentation', 'Long-term wholesale partnerships'].map((item) => (
                    <div key={item} className="luxury-card px-5 py-4 text-sm font-medium text-[#654a68]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <DistributorForm />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DistributorsPage;
