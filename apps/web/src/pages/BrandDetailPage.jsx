import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Globe2, PackageCheck } from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import PageHero from '@/components/PageHero.jsx';
import { AlmasLogo, ArmanLogo, BeautyloopLogo, HijabLogo, HusnETurkLogo, LibnaniLogo, ShaheenLogo, TaryakLogo } from '@/components/BrandMark.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import SectionIntro from '@/components/SectionIntro.jsx';
import { Button } from '@/components/ui/button.jsx';
import { getBrandBySlug, getBrandProducts, getCatalogText, getLocalizedField } from '@/content/brandCatalog';
import { useLanguage } from '@/context/LanguageContext';

const BrandDetailPage = () => {
  const { slug } = useParams();
  const { copy, language } = useLanguage();
  const brand = getBrandBySlug(slug);
  const catalogText = getCatalogText(language);
  const products = useMemo(() => (brand ? getBrandProducts(brand, language) : []), [brand, language]);

  if (!brand) {
    return <Navigate to="/brands" replace />;
  }

  const renderBrandHeader = () => {
    const frameClass =
      brand.name === 'Beautyloop'
        ? 'border-[#f1dfbf] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,249,239,0.92))] shadow-[0_32px_90px_-52px_rgba(212,164,84,0.85)]'
        : brand.name === 'Arman'
          ? 'border-[#ecd7c5] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,247,239,0.92))] shadow-[0_32px_90px_-52px_rgba(173,102,71,0.65)]'
          : brand.name === 'Husn-e-Turk'
            ? 'border-[#e6cfc9] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(251,243,241,0.94))] shadow-[0_32px_90px_-52px_rgba(142,41,41,0.42)]'
          : brand.name === 'Hijab'
            ? 'border-[#e5d8dd] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(252,246,249,0.94))] shadow-[0_32px_90px_-52px_rgba(137,86,112,0.35)]'
          : brand.name === 'Almas'
            ? 'border-[#dcd6d2] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(248,244,241,0.94))] shadow-[0_32px_90px_-52px_rgba(90,72,62,0.28)]'
          : brand.name === 'Taryak'
            ? 'border-[#ead8d0] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(252,245,241,0.94))] shadow-[0_32px_90px_-52px_rgba(150,92,64,0.36)]'
          : brand.name === 'Shaheen'
            ? 'border-[#dfe3e8] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(245,247,249,0.92))] shadow-[0_32px_90px_-52px_rgba(110,117,126,0.55)]'
          : brand.name === 'Libnani'
            ? 'border-[#eadcc8] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(251,246,239,0.92))] shadow-[0_32px_90px_-52px_rgba(159,116,64,0.34)]'
            : 'border-[#f0dde6] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,247,251,0.92))] shadow-[0_32px_90px_-52px_rgba(122,44,142,0.35)]';

    const logoNode =
      brand.name === 'Beautyloop' ? (
        <BeautyloopLogo />
      ) : brand.name === 'Arman' ? (
        <ArmanLogo />
      ) : brand.name === 'Husn-e-Turk' ? (
        <HusnETurkLogo />
      ) : brand.name === 'Hijab' ? (
        <HijabLogo />
      ) : brand.name === 'Almas' ? (
        <AlmasLogo />
      ) : brand.name === 'Taryak' ? (
        <TaryakLogo />
      ) : brand.name === 'Shaheen' ? (
        <ShaheenLogo />
      ) : brand.name === 'Libnani' ? (
        <LibnaniLogo />
      ) : (
        <div className={`flex h-24 w-24 items-center justify-center rounded-[1.6rem] border border-white/70 bg-gradient-to-br ${brand.palette} shadow-[0_20px_45px_-28px_rgba(107,44,145,0.85)]`}>
          <span className="font-serif text-3xl font-semibold uppercase tracking-[0.2em] text-[#351343]">
            {brand.logoLetters}
          </span>
        </div>
      );

    return (
      <div className={`rounded-[2rem] border p-6 ${frameClass}`}>
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex min-w-0 flex-1 items-center justify-center md:justify-start">
            {logoNode}
          </div>
          <div className="flex min-w-0 flex-1 justify-center md:justify-end">
            <h2 className="font-serif text-4xl leading-none text-[#2f1538] md:text-5xl">
              {brand.name}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>{`${brand.name} - Sheikh Cosmetics`}</title>
        <meta
          name="description"
          content={`${brand.name}. ${getLocalizedField(brand.story, language)}`}
        />
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <PageHero
            eyebrow={`${catalogText.brandPageEyebrow} / Sheikh Brothers`}
            title={brand.name}
            subtitle={getLocalizedField(brand.statement, language)}
            image={brand.heroImage}
          />

          <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="container mx-auto grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
              <div className="luxury-card p-8 md:p-10">
                {renderBrandHeader()}
                <p className="mt-6 text-base leading-8 text-[#654a68]">
                  {getLocalizedField(brand.story, language)}
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {catalogText.portfolioMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-[1.5rem] bg-[#fff7fb] p-5">
                      <div className="font-serif text-3xl text-[#7a2c8e]">{metric.value}</div>
                      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b708d]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#32143f] p-8 text-white shadow-[0_32px_90px_-48px_rgba(50,20,63,1)] md:p-10">
                <SectionIntro
                  eyebrow={catalogText.manufacturingTitle}
                  title={catalogText.productGridTitle}
                  text={catalogText.productGridText}
                  light
                />
                <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.07)] p-6 text-sm leading-7 text-white/80">
                  {catalogText.manufacturingText}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="rounded-full bg-[#f4d486] px-6 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#3b184b] hover:bg-[#ffe7a9]">
                      {catalogText.consultationCta}
                    </Button>
                  </Link>
                  <Link to="/brands" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f4d486]">
                    <ArrowLeft className="h-4 w-4" />
                    {catalogText.backToBrands}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,247,251,0.85))] px-4 py-20 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <SectionIntro
                eyebrow={brand.name}
                title={catalogText.productGridTitle}
                text={catalogText.productGridText}
                align="center"
              />
              <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-5">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="container mx-auto grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="luxury-card p-8 md:p-10">
                <div className="inline-flex rounded-full bg-[#fff0f7] p-4 text-[#9e2b86]">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-serif text-4xl text-[#2f1538]">{catalogText.moreProductsTitle}</h2>
                <p className="mt-4 text-base leading-8 text-[#654a68]">{catalogText.moreProductsText}</p>
              </div>
              <div className="rounded-[2rem] bg-gradient-to-r from-[#331440] via-[#4c1c5a] to-[#8d2f83] p-8 text-white shadow-[0_40px_100px_-50px_rgba(51,20,64,1)] md:p-10">
                <div className="inline-flex rounded-full bg-white/10 p-4 text-[#f4d486]">
                  <PackageCheck className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-serif text-4xl">{copy.home.distributorTitle}</h2>
                <p className="mt-4 text-base leading-8 text-white/80">{copy.home.distributorText}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/distributors">
                    <Button className="rounded-full bg-white px-6 py-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#3a184a] hover:bg-[#fff1d2]">
                      {copy.common.becomeDistributor}
                    </Button>
                  </Link>
                  <Link to="/brands" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {catalogText.backToBrands}
                    <ArrowRight className="h-4 w-4" />
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

export default BrandDetailPage;
