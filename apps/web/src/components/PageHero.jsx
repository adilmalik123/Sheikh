import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ eyebrow, title, subtitle, image, className = '' }) => {
  return (
    <section className={`relative overflow-hidden px-4 pt-32 sm:px-6 lg:px-8 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,191,211,0.35),transparent_32%),radial-gradient(circle_at_top_right,rgba(134,58,138,0.22),transparent_26%),linear-gradient(135deg,#fff9f8_0%,#fff1fa_45%,#fff9f3_100%)]" />
      <div className="container relative mx-auto">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_30px_90px_-40px_rgba(107,44,145,0.65)] backdrop-blur xl:grid-cols-[1.1fr_0.9fr] xl:p-14">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#9e2b86]">{eyebrow}</p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[#2f1538] sm:text-5xl md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#654a68] sm:text-lg sm:leading-8">{subtitle}</p>
          </motion.div>
          <div className="relative min-h-[340px] overflow-hidden rounded-[1.75rem]">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f1538]/45 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
