import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import BrandMark from '@/components/BrandMark.jsx';
import { catalogBrands, getBrandProducts, getCatalogText } from '@/content/brandCatalog';
import { useLanguage } from '@/context/LanguageContext';

const BrandsPage = () => {
  const { copy, language } = useLanguage();
  const catalogText = getCatalogText(language);

  return (
    <>
      <Helmet>
        <title>{`${copy.nav.brands} - Sheikh Cosmetics`}</title>
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <PageHero
            eyebrow={copy.common.brandsLabel}
            title={catalogText.selectedBrandsTitle}
            subtitle={catalogText.selectedBrandsSubtitle}
            image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
          />

          <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="mx-auto mb-10 max-w-4xl rounded-[1.8rem] border border-[#f0dde6] bg-[rgba(255,255,255,0.82)] px-6 py-5 text-center text-sm leading-7 text-[#654a68] backdrop-blur">
                {catalogText.brandsPageNote}
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                {catalogBrands.map((brand) => {
                  const brandPanelProducts = getBrandProducts(brand, language)
                    .slice(0, 5)
                    .map((product) => product.type);

                  return (
                    <Link key={brand.slug} to={`/brands/${brand.slug}`} className="block">
                      <article className="luxury-card overflow-hidden transition duration-500 hover:-translate-y-2">
                        <div className={`h-2 bg-gradient-to-r ${brand.palette}`} />
                        <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                          <img
                            src={brand.heroImage}
                            alt={brand.name}
                            className="h-full min-h-[320px] w-full object-cover"
                          />
                          <div className="flex min-h-[320px] flex-col p-7">
                            <BrandMark brand={brand} />
                            <div className="mt-5 grid flex-1 gap-2">
                              {brandPanelProducts.map((product) => (
                                <div
                                  key={product}
                                  className="rounded-[1.1rem] bg-[#fff7fb] px-4 py-2.5 text-sm leading-5 text-[#654a68]"
                                >
                                  {product}
                                </div>
                              ))}
                            </div>
                            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#9e2b86]">
                              {catalogText.discoverBrand}
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BrandsPage;
