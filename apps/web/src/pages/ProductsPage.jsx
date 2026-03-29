import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard.jsx';
import { Input } from '@/components/ui/input.jsx';
import { catalogBrands, getCatalogProducts, getCatalogText } from '@/content/brandCatalog';
import { useLanguage } from '@/context/LanguageContext';

const ProductsPage = () => {
  const { copy, language } = useLanguage();
  const catalogText = getCatalogText(language);
  const products = useMemo(() => getCatalogProducts(language), [language]);
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(copy.products.allBrands);
  const [selectedType, setSelectedType] = useState(copy.products.allTypes);

  useEffect(() => {
    setSelectedBrand(copy.products.allBrands);
    setSelectedType(copy.products.allTypes);
  }, [copy.products.allBrands, copy.products.allTypes]);

  const productTypes = [copy.products.allTypes, ...new Set(products.map((product) => product.type))];
  const productBrands = [copy.products.allBrands, ...catalogBrands.map((brand) => brand.name)];

  const filteredProducts = products.filter((product) => {
    const matchBrand = selectedBrand === copy.products.allBrands || product.brand === selectedBrand;
    const matchType = selectedType === copy.products.allTypes || product.type === selectedType;
    const query = search.toLowerCase();
    const matchSearch = product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    return matchBrand && matchType && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>{`${copy.nav.products} - Sheikh Cosmetics`}</title>
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <PageHero eyebrow={copy.common.brandsLabel} title={copy.products.title} subtitle={copy.products.subtitle} image="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80" />

          <section className="sticky top-[108px] z-30 border-b border-[#f0dde6] bg-white/75 py-6 shadow-sm backdrop-blur">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap gap-3">
                  {productTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition ${selectedType === type ? 'bg-[#351343] text-white shadow-lg' : 'border border-[#ead6df] bg-white text-[#7b5d7f] hover:border-[#d4a454] hover:text-[#7a2c8e]'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:w-auto">
                  <div className="flex flex-wrap gap-2">
                    {productBrands.map((brand) => (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => setSelectedBrand(brand)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${selectedBrand === brand ? 'bg-[#f4d486] text-[#3b184b]' : 'border border-[#ead6df] bg-white text-[#7b5d7f] hover:border-[#d4a454]'}`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                  <div className="relative w-full sm:min-w-[280px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder={copy.products.search} value={search} onChange={(event) => setSearch(event.target.value)} className="rounded-full border-[#ead6df] bg-white pl-9 focus-visible:ring-[#d4a454]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 rounded-[1.8rem] border border-[#f0dde6] bg-[rgba(255,255,255,0.82)] px-6 py-5 text-center text-sm leading-7 text-[#654a68] backdrop-blur">
                {catalogText.productsPageNote}
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="luxury-card py-20 text-center">
                  <h3 className="font-serif text-3xl text-[#2f1538]">{copy.products.empty}</h3>
                  <p className="mt-3 text-[#654a68]">Try a different brand or product type.</p>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
