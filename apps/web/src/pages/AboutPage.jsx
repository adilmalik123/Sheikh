import React from 'react';
import { Helmet } from 'react-helmet';
import { Award, FlaskConical, Gem, Globe2 } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import SectionIntro from '@/components/SectionIntro';
import { seoMeta } from '@/content/siteContent';
import { useLanguage } from '@/context/LanguageContext';

const AboutPage = () => {
  const { copy } = useLanguage();
  const cards = [
    { icon: Award, title: copy.home.benefitsTitle, text: copy.home.benefitsText },
    { icon: FlaskConical, title: copy.home.sections.expertise, text: copy.lists.expertise.join(' • ') },
    { icon: Gem, title: copy.home.sections.ingredients, text: copy.lists.ingredients.join(' • ') },
    { icon: Globe2, title: copy.home.distributorTitle, text: copy.home.distributorText },
  ];

  return (
    <>
      <Helmet>
        <title>{`About - ${seoMeta.title}`}</title>
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <PageHero eyebrow="Sheikh Cosmetics / Sheikh Brothers" title={copy.about.title} subtitle={copy.about.subtitle} image="/about-shiekh-cosmetics.avif" />

          <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto grid gap-8 xl:grid-cols-[1fr_0.95fr]">
              <div className="luxury-card p-8 md:p-10">
                <SectionIntro eyebrow={copy.home.aboutTitle} title={copy.home.aboutTitle} text={copy.home.aboutText} />
                <div className="mt-8 space-y-5 text-base leading-8 text-[#654a68]">
                  <p>Sheikh Cosmetics, backed by Sheikh Brothers, develops whitening cream and whitening soap collections with premium presentation, retail appeal, and export readiness.</p>
                  <p>We combine luxury design language, manufacturing precision, and distributor-focused planning so each brand feels international, trustworthy, and commercially strong.</p>
                  <p>Our mission is to help partners grow beauty businesses through vibrant product identities, premium ingredients, and dependable global supply capability.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img src="/about/sheikh-cosmetics-about-sheikh-brothers.avif" alt="Sheikh Brothers cosmetics overview" className="h-full min-h-[420px] w-full object-cover" />
              </div>
            </div>
          </section>

          <section className="bg-[#fff7fb] px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <SectionIntro eyebrow={copy.home.sections.expertise} title={copy.home.sections.expertise} text={copy.home.benefitsText} align="center" />
              <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {cards.map((card) => (
                  <div key={card.title} className="luxury-card p-8">
                    <div className="inline-flex rounded-full bg-[#fff0f7] p-4 text-[#9e2b86]">
                      <card.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-serif text-3xl text-[#2f1538]">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#654a68]">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-24 sm:px-6 lg:px-8">
            <div className="container mx-auto grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[2rem] bg-[#31143d] p-8 text-white md:p-12">
                <SectionIntro eyebrow={copy.home.sections.skincare} title={copy.home.sections.skincare} text="Luxury beauty care built around radiant finish, smooth texture, and distributor-ready market appeal." light />
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {copy.lists.ingredients.map((item) => (
                    <div key={item} className="rounded-[1.3rem] border border-white/10 bg-[rgba(255,255,255,0.08)] p-4 text-sm text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="luxury-card p-8 md:p-12">
                <h3 className="font-serif text-4xl text-[#2f1538]">Sheikh Brothers Promise</h3>
                <div className="mt-6 space-y-5 text-base leading-8 text-[#654a68]">
                  <p>We build beauty collections that look premium, sell confidently, and scale reliably across markets.</p>
                  <p>From visual identity to packaging direction and bulk manufacturing, our approach is designed for lasting brand value.</p>
                  <p>That is why Sheikh Cosmetics is positioned as both a beauty manufacturer and a strategic growth partner.</p>
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

export default AboutPage;
