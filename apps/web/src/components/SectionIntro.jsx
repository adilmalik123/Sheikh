import React from 'react';

const SectionIntro = ({ eyebrow, title, text, align = 'left', light = false }) => {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.35em] ${light ? 'text-[#f7d8ef]' : 'text-[#9e2b86]'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl ${light ? 'text-white' : 'text-[#2f1538]'}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${light ? 'text-white/75' : 'text-[#654a68]'}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
};

export default SectionIntro;
