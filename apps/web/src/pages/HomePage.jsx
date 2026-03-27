import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Award, Factory, Globe2, PackageCheck, PlayCircle, Sparkles, Star, WandSparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer.jsx';
import BrandMark, { AlmasLogo, ArmanLogo, BeautyloopLogo, HijabLogo, HusnETurkLogo, LibnaniLogo, ShaheenLogo, TaryakLogo } from '@/components/BrandMark.jsx';
import Header from '@/components/Header.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import SectionIntro from '@/components/SectionIntro.jsx';
import { brandProfiles, getLocalizedValue, homepageSlides, seoMeta, videos } from '@/content/siteContent';
import { catalogBrands, getCatalogProducts, getCatalogText } from '@/content/brandCatalog';
import { useLanguage } from '@/context/LanguageContext';

const HomePage = () => {
  const { copy, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const catalogText = getCatalogText(language);
  const products = useMemo(() => getCatalogProducts(language), [language]);
  const featuredProducts = products.slice(0, 6);
  const videoHighlights = videos.slice(0, 3);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % homepageSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = homepageSlides[activeSlide];
  const expertiseCards = [
    { icon: Factory, title: copy.home.sections.expertise, items: copy.lists.expertise },
    { icon: Star, title: copy.home.sections.ingredients, items: copy.lists.ingredients },
    { icon: PackageCheck, title: copy.home.sections.partner, items: copy.lists.partnerReasons },
  ];

  return (
    <>
      <Helmet>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffdf9_48%,#fff8f6_100%)] text-[#2f1538]">
        <Header />
        <main className="flex-1">
          <section className="relative overflow-hidden px-4 pb-14 pt-36 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,190,213,0.36),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(111,44,145,0.18),transparent_18%),linear-gradient(145deg,#fff8fb_0%,#fff2f8_40%,#fff9f2_100%)]" />
            <div className="container relative mx-auto grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="rounded-[2rem] border border-white/65 bg-white/70 p-8 shadow-[0_30px_100px_-48px_rgba(107,44,145,0.8)] backdrop-blur xl:p-12">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f1d7e6] bg-[#fff7fb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#9e2b86]">
                  <Sparkles className="h-4 w-4" />
                  {copy.home.badge}
                </p>
                <h1 className="font-serif text-5xl font-semibold leading-tight text-[#2f1538] md:text-7xl">
                  {copy.home.title}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#654a68]">{copy.home.subtitle}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button className="rounded-full bg-gradient-to-r from-[#b22e85] via-[#813091] to-[#42205f] px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_22px_44px_-20px_rgba(178,46,133,0.7)] hover:brightness-110">
                      {copy.common.exploreProducts}
                    </Button>
                  </Link>
                  <Link to="/private-label">
                    <Button variant="outline" className="rounded-full border-[#d4a454] px-7 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7a2c8e] hover:bg-[#fff4db]">
                      {copy.common.privateLabel}
                    </Button>
                  </Link>
                </div>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {catalogText.portfolioMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.5rem] border border-[#f2e4ea] bg-[rgba(255,255,255,0.78)] p-5">
                      <div className="font-serif text-3xl text-[#7a2c8e]">{metric.value}</div>
                      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8b708d]">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-6">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#351343] p-6 text-white shadow-[0_30px_100px_-48px_rgba(44,14,55,0.95)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,210,120,0.18),transparent_18%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%)]" />
                  <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#f4d486]">{copy.home.sliderTitle}</p>
                  <div className="relative z-10 mt-4 overflow-hidden rounded-[1.7rem]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.985 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="relative"
                      >
                        {currentSlide.type === 'video' ? (
                          <iframe
                            className="h-[340px] w-full object-cover"
                            src={currentSlide.embedUrl}
                            title={currentSlide.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <img src={currentSlide.image} alt={currentSlide.name} className="h-[340px] w-full object-cover" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f0c28]/75 via-transparent to-transparent pointer-events-none" />
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${currentSlide.id}-content`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="absolute bottom-0 left-0 right-0 p-6"
                      >
                        <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f4d486]">{currentSlide.accent}</div>
                        <h2 className="mt-2 font-serif text-3xl">{currentSlide.name}</h2>
                        <p className="mt-3 max-w-md text-sm leading-7 text-white/80">{getLocalizedValue(currentSlide.caption, language)}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="relative z-10 mt-5 flex gap-3 overflow-x-auto pb-2">
                    {homepageSlides.map((slide, index) => (
                      <button key={slide.id} type="button" onClick={() => setActiveSlide(index)} className={`overflow-hidden rounded-[1.2rem] border transition ${activeSlide === index ? 'border-[#f4d486] ring-2 ring-[#f4d486]/60' : 'border-white/12'}`}>
                        <div className="relative h-20 w-24 shrink-0">
                          <img src={slide.poster ?? slide.image} alt={slide.name} className="h-full w-full object-cover" />
                          {slide.type === 'video' ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#1f0c28]/30 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                              Video
                            </div>
                          ) : null}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="luxury-card p-6">
                    <div className="inline-flex rounded-full bg-[#fff3f8] p-3 text-[#9e2b86]">
                      <WandSparkles className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl text-[#2f1538]">{copy.home.privateLabelTitle}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#654a68]">{copy.home.privateLabelText}</p>
                  </div>
                  <div className="luxury-card p-6">
                    <div className="inline-flex rounded-full bg-[#fff3f8] p-3 text-[#9e2b86]">
                      <Globe2 className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl text-[#2f1538]">{copy.home.distributorTitle}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#654a68]">{copy.home.distributorText}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden border-y border-[#f0dde6] bg-white/55 py-4 backdrop-blur">
              <div className="marquee-track flex gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.34em] text-[#8f3b82]">
                {[...brandProfiles, ...brandProfiles].map((brand, index) => (
                  <div key={`${brand.slug}-${index}`} className="flex items-center gap-3">
                    {brand.name === 'Beautyloop' ? (
                      <BeautyloopLogo compact />
                    ) : brand.name === 'Arman' ? (
                      <ArmanLogo compact />
                    ) : brand.name === 'Husn-e-Turk' ? (
                      <HusnETurkLogo compact />
                    ) : brand.name === 'Hijab' ? (
                      <HijabLogo compact />
                    ) : brand.name === 'Almas' ? (
                      <AlmasLogo compact />
                    ) : brand.name === 'Taryak' ? (
                      <TaryakLogo compact />
                    ) : brand.name === 'Shaheen' ? (
                      <ShaheenLogo compact />
                    ) : brand.name === 'Libnani' ? (
                      <LibnaniLogo compact />
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 text-[#d7a74a]" />
                        <span>{brand.name}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
          </section>

          <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <SectionIntro eyebrow={copy.home.sections.brandShowcase} title={copy.brands.title} text={copy.brands.subtitle} align="center" />
              <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-[#654a68]">
                {catalogText.selectedBrandsSubtitle}
              </p>
              <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {catalogBrands.map((brand) => (
                  <article key={brand.slug} className="luxury-card overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${brand.palette}`} />
                    <img src={brand.heroImage} alt={brand.name} className="h-56 w-full object-cover" />
                    <div className="p-6">
                      <BrandMark brand={brand} size="sm" />
                      <p className="mt-4 text-sm leading-7 text-[#654a68]">{getLocalizedValue(brand.statement, language)}</p>
                      <Link to={`/brands/${brand.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#9e2b86]">
                        {catalogText.discoverBrand}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,247,251,0.85))] px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionIntro eyebrow={copy.common.brandsLabel} title={copy.home.featuredTitle} text={copy.home.featuredText} />
                <Link to="/products">
                  <Button variant="outline" className="rounded-full border-[#d4a454] px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#7a2c8e] hover:bg-[#fff4db]">
                    {copy.common.exploreProducts}
                  </Button>
                </Link>
              </div>
              <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="overflow-hidden rounded-[2rem]">
                  <img src="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1200&q=80" alt="Sheikh Cosmetics premium beauty presentation" className="h-full min-h-[420px] w-full object-cover" />
                </div>
                <div className="rounded-[2rem] bg-[#31143d] p-8 text-white shadow-[0_36px_90px_-46px_rgba(49,20,61,1)] xl:p-12">
                  <SectionIntro eyebrow={copy.home.aboutTitle} title={copy.home.aboutTitle} text={copy.home.aboutText} light />
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {copy.lists.benefits.map((item) => (
                      <div key={item} className="rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.07)] p-5 text-sm leading-7 text-white/78">
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4d486]">
                    {copy.nav.about}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#fff7fb] px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <SectionIntro eyebrow={copy.home.benefitsTitle} title={copy.home.benefitsTitle} text={copy.home.benefitsText} align="center" />
              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {expertiseCards.map((card) => (
                  <div key={card.title} className="luxury-card p-8">
                    <div className="inline-flex rounded-full bg-[#fff0f7] p-4 text-[#9e2b86]">
                      <card.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-serif text-3xl text-[#2f1538]">{card.title}</h3>
                    <div className="mt-5 space-y-3 text-sm leading-7 text-[#654a68]">
                      {card.items.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <Award className="h-4 w-4 text-[#d4a454]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="grid gap-8 overflow-hidden rounded-[2.3rem] bg-gradient-to-r from-[#331440] via-[#4c1c5a] to-[#8d2f83] p-8 text-white shadow-[0_40px_120px_-52px_rgba(51,20,64,1)] xl:grid-cols-[0.95fr_1.05fr] xl:p-12">
                <div className="overflow-hidden rounded-[1.8rem]">
                  <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80" alt="Private label cosmetics" className="h-full min-h-[360px] w-full object-cover" />
                </div>
                <div>
                  <SectionIntro eyebrow={copy.common.privateLabel} title={copy.home.privateLabelTitle} text={copy.home.privateLabelText} light />
                  <div className="mt-8 grid gap-3 md:grid-cols-2">
                    {copy.lists.privateLabelServices.slice(0, 8).map((item) => (
                      <div key={item} className="rounded-[1.3rem] border border-white/10 bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-white/[0.82]">
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link to="/private-label" className="mt-8 inline-flex">
                    <Button className="rounded-full bg-[#f4d486] px-6 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#3b184b] hover:bg-[#ffe7a9]">
                      {copy.common.startProject}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#fff8f3] px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="luxury-card p-8 md:p-10">
                  <SectionIntro eyebrow={copy.common.globalSupply} title={copy.home.distributorTitle} text={copy.home.distributorText} />
                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {['Worldwide shipping', 'Wholesale partnerships', 'Distributor onboarding'].map((item) => (
                      <div key={item} className="rounded-[1.4rem] bg-[#fff7fb] p-5 text-sm font-medium text-[#654a68]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-hidden rounded-[2rem] bg-[#30133e] p-8 text-white shadow-[0_30px_100px_-48px_rgba(49,20,61,1)]">
                  <Globe2 className="h-10 w-10 text-[#f4d486]" />
                  <h3 className="mt-5 font-serif text-3xl">{copy.common.becomeDistributor}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/78">{copy.home.distributorText}</p>
                  <Link to="/distributors" className="mt-8 inline-flex">
                    <Button className="rounded-full bg-white px-6 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#3a184a] hover:bg-[#fff1d2]">
                      {copy.common.becomeDistributor}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionIntro eyebrow={copy.home.videoTitle} title={copy.home.videoTitle} text={copy.home.videoText} />
                <Link to="/videos">
                  <Button variant="outline" className="rounded-full border-[#d4a454] px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#7a2c8e] hover:bg-[#fff4db]">
                    {copy.common.watchVideos}
                  </Button>
                </Link>
              </div>
              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {videoHighlights.map((video) => (
                  <div key={video.id} className="luxury-card overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <iframe className="h-full w-full" src={video.embedUrl} title={getLocalizedValue(video.title, language)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <div className="p-6">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4db] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9e2b86]">
                        <PlayCircle className="h-3.5 w-3.5" />
                        {video.category}
                      </div>
                      <h3 className="mt-4 font-serif text-2xl text-[#2f1538]">{getLocalizedValue(video.title, language)}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-24 sm:px-6 lg:px-8">
            <div className="container mx-auto overflow-hidden rounded-[2.4rem] bg-gradient-to-r from-[#3c164b] via-[#7d2d82] to-[#d97da3] px-8 py-12 text-white shadow-[0_40px_110px_-50px_rgba(60,22,75,1)] md:px-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f4d486]">{copy.common.privateLabel}</p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{copy.home.ctaTitle}</h2>
                  <p className="mt-4 text-lg leading-8 text-white/80">{copy.home.ctaText}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="rounded-full bg-white px-6 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#3a184a] hover:bg-[#fff1d2]">
                      {copy.common.contactUs}
                    </Button>
                  </Link>
                  <Link to="/private-label">
                    <Button variant="outline" className="rounded-full border-white/55 bg-transparent px-6 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10">
                      {copy.common.startProject}
                    </Button>
                  </Link>
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

export default HomePage;
