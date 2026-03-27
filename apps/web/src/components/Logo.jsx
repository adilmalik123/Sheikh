import React from 'react';

const Logo = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 120 120" className="h-full w-auto drop-shadow-[0_14px_30px_rgba(62,18,74,0.28)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="54" fill="url(#luxuryCore)" />
        <circle cx="60" cy="60" r="48" stroke="url(#luxuryRing)" strokeWidth="1.8" />
        <path d="M39 73C39 60 49 53 61 53C70 53 77 49 77 40C77 30 68 23 56 23C46 23 39 27 34 34" stroke="url(#goldStroke)" strokeWidth="5" strokeLinecap="round" />
        <path d="M42 83C50 92 61 97 72 97C87 97 98 87 98 73C98 57 85 50 70 50H53" stroke="url(#goldStroke)" strokeWidth="5" strokeLinecap="round" />
        <path d="M30 28C37 18 49 12 61 12C75 12 87 18 95 28" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M82 25L84 31L90 33L84 35L82 41L80 35L74 33L80 31L82 25Z" fill="#f5d37d" />
        <defs>
          <radialGradient id="luxuryCore" cx="0" cy="0" r="1" gradientTransform="translate(40 28) rotate(54) scale(96)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a33c8d" />
            <stop offset="0.46" stopColor="#6a287f" />
            <stop offset="1" stopColor="#2f1538" />
          </radialGradient>
          <linearGradient id="luxuryRing" x1="18" y1="18" x2="101" y2="101" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f6dda0" />
            <stop offset="0.5" stopColor="#fff6d7" />
            <stop offset="1" stopColor="#cfa03c" />
          </linearGradient>
          <linearGradient id="goldStroke" x1="34" y1="23" x2="98" y2="97" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f7d06a" />
            <stop offset="0.5" stopColor="#fff2c6" />
            <stop offset="1" stopColor="#e3a83d" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col justify-center">
        <span className="font-serif text-xl font-semibold leading-none tracking-[0.26em] text-white sm:text-2xl">SHEIKH</span>
        <span className="mt-1 text-[0.65rem] font-semibold uppercase leading-none tracking-[0.38em] text-[#f2c76d]">Cosmetics</span>
      </div>
    </div>
  );
};

export default Logo;
