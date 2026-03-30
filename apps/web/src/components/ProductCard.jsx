import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ProductCard = ({ product }) => {
  const { copy } = useLanguage();
  const productLink = product.id ? `/products/${product.id}` : product.brandSlug ? `/brands/${product.brandSlug}` : '/contact';
  const actionLabel = product.id ? copy.nav.products : product.brandSlug ? copy.nav.brands : copy.common.contactUs;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/80 shadow-[0_24px_70px_-42px_rgba(107,44,145,0.8)] backdrop-blur transition duration-500 hover:-translate-y-2">
      <div className="relative aspect-[4/4.1] overflow-hidden">
        <Link to={productLink} className="block h-full w-full">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
        </Link>
        <div className="absolute left-4 top-4 z-10">
          <Link to={productLink} className="rounded-full bg-[#351343] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg transition hover:bg-[#4d205f]">
            {product.brand}
          </Link>
        </div>
        <div className="absolute right-4 top-4 z-10">
          <span className="rounded-full border border-white/70 bg-[rgba(255,255,255,0.85)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a2c8e]">
            {product.type}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Link to={productLink} className="font-serif text-2xl text-[#2f1538] transition hover:text-[#7a2c8e]">
          <h3>{product.name}</h3>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-7 text-[#654a68]">{product.description}</p>
        <div className="mt-6 flex items-center justify-between border-t border-[#f3e4ec] pt-5">
          <Link to={productLink} className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7a2c8e] transition hover:text-[#351343]">
            {product.brand}
          </Link>
          <Link to={productLink} className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9e2b86] transition hover:text-[#351343]">
            {actionLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
