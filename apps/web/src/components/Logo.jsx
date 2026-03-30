import React from 'react';

const Logo = ({ className = 'h-10' }) => {
  return (
    <div className={`flex min-w-0 items-center gap-2 sm:gap-3 ${className}`}>
      <img
        src="/sheikh-cosmetics-logo.avif"
        alt="Sheikh Cosmetics"
        className="h-full w-auto object-contain drop-shadow-[0_14px_30px_rgba(62,18,74,0.28)]"
      />
      <div className="inline-flex min-w-0 flex-col justify-center">
        <span className="block font-serif text-lg font-semibold leading-none tracking-[0.16em] text-white sm:text-2xl sm:tracking-[0.26em]">SHEIKH</span>
        <span className="mt-1 block w-full text-center text-[0.58rem] font-semibold uppercase leading-none tracking-[0.22em] text-[#f2c76d] sm:text-[0.65rem] sm:tracking-[0.38em]">Cosmetics</span>
      </div>
    </div>
  );
};

export default Logo;
