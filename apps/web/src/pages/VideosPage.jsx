import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import { videos } from '@/content/siteContent';
import { useLanguage } from '@/context/LanguageContext';

const VideosPage = () => {
  const { copy, language } = useLanguage();

  const getThumbnailUrl = (video) => {
    const embedUrl = video.embedUrl ?? '';
    if (video.thumbnail) return video.thumbnail;

    const match = embedUrl.match(/embed\/([^?&/]+)/);
    const videoId = match?.[1];
    if (videoId) return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const watchUrl = video.linkUrl ?? '';
    const fbMatch = watchUrl.match(/[?&]v=([^&]+)/);
    const fbVideoId = fbMatch?.[1];
    return fbVideoId ? `https://graph.facebook.com/${fbVideoId}/picture` : '';
  };

  return (
    <>
      <Helmet>
        <title>{`${copy.nav.videos} - Sheikh Cosmetics`}</title>
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9e2b86]">Video Gallery</p>
              <h1 className="mt-3 font-serif text-3xl text-[#2f1538] sm:text-4xl">Product and Manufacturing Videos</h1>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <a key={video.id} href={video.linkUrl ?? video.embedUrl} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-[1.5rem] bg-white/80 shadow-[0_20px_60px_-35px_rgba(107,44,145,0.6)] transition duration-300 hover:-translate-y-1">
                  {getThumbnailUrl(video) ? (
                    <img src={getThumbnailUrl(video)} alt={video.title?.[language] ?? video.title?.en ?? 'Video thumbnail'} className="aspect-video w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-[#3e184d] via-[#7d2d82] to-[#d99cc4] px-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {video.title?.[language] ?? video.title?.en ?? 'Video highlight'}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default VideosPage;
