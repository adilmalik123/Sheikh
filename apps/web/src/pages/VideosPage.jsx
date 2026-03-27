import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import PageHero from '@/components/PageHero';
import { getLocalizedValue, videos } from '@/content/siteContent';
import { useLanguage } from '@/context/LanguageContext';

const VideosPage = () => {
  const { copy, language } = useLanguage();
  const categories = ['Product Showcase', 'Manufacturing', 'Brand Promotion', 'Beauty & Skincare'];

  return (
    <>
      <Helmet>
        <title>{`${copy.nav.videos} - Sheikh Cosmetics`}</title>
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <PageHero eyebrow="Video Highlights" title={copy.videosPage.title} subtitle={copy.videosPage.subtitle} image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" />

          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            {categories.map((category) => {
              const categoryVideos = videos.filter((video) => video.category === category);
              if (categoryVideos.length === 0) return null;

              return (
                <div key={category} className="mb-20">
                  <div className="mb-8 flex items-center gap-4">
                    <h2 className="font-serif text-3xl font-semibold text-[#2f1538]">{category}</h2>
                    <div className="h-px flex-1 bg-[#ebd6e1]"></div>
                  </div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {categoryVideos.map((video) => (
                      <div key={video.id} className="luxury-card overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <iframe className="h-full w-full" src={video.embedUrl} title={getLocalizedValue(video.title, language)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                        <div className="p-6">
                          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9e2b86]">{category}</div>
                          <h3 className="mt-3 font-serif text-2xl text-[#2f1538]">{getLocalizedValue(video.title, language)}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default VideosPage;
