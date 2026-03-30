import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import { getProductById } from '@/content/brandCatalog';
import { useLanguage } from '@/context/LanguageContext';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { copy, language } = useLanguage();
  const [previewOpen, setPreviewOpen] = useState(false);
  const preventImageActions = (event) => event.preventDefault();

  const product = useMemo(() => getProductById(productId, language), [productId, language]);

  useEffect(() => {
    if (!previewOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [previewOpen]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${product.name} - Sheikh Cosmetics`}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8fa_0%,#fffefb_100%)]">
        <Header />
        <main className="flex-1">
          <section className="px-4 pb-20 pt-40 sm:px-6 sm:pt-44 lg:px-8">
            <div className="container mx-auto">
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#7a2c8e] transition hover:text-[#351343]">
                  <ArrowLeft className="h-4 w-4" />
                  {copy.nav.products}
                </Link>
                <Link to={`/brands/${product.brandSlug}`} className="inline-flex rounded-full bg-[#351343] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg transition hover:bg-[#4d205f]">
                  {product.brand}
                </Link>
              </div>

              <div className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_28px_85px_-46px_rgba(107,44,145,0.78)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
                <button
                  type="button"
                  onClick={() => setPreviewOpen(true)}
                  onContextMenu={preventImageActions}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#f0dde6] bg-white select-none"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    draggable={false}
                    onContextMenu={preventImageActions}
                    onDragStart={preventImageActions}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2f1538]/55 to-transparent px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    Click to enlarge
                  </div>
                </button>

                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9e2b86]">{product.type}</p>
                  <h1 className="mt-4 font-serif text-4xl leading-tight text-[#2f1538] sm:text-5xl">{product.name}</h1>
                  <p className="mt-6 text-base leading-8 text-[#654a68]">{product.description}</p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {product.benefits.map((benefit) => (
                      <span key={benefit} className="rounded-full border border-[#f0d1df] bg-[#fff6fa] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9e2b86]">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      {previewOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4" onClick={() => setPreviewOpen(false)} onContextMenu={preventImageActions}>
          <button
            type="button"
            onClick={() => setPreviewOpen(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white transition hover:bg-black/70"
            aria-label="Close image preview"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[92vh] max-w-[96vw]" onClick={(event) => event.stopPropagation()}>
            <img
              src={product.image}
              alt={product.name}
              draggable={false}
              onContextMenu={preventImageActions}
              onDragStart={preventImageActions}
              className="max-h-[92vh] max-w-[96vw] object-contain select-none"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;

