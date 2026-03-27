import React from 'react';
import beautyloopLogo from '@/assets/beautyloop-logo.svg';
import armanLogo from '@/assets/arman-logo.svg';
import almasLogo from '@/assets/almas-logo.svg';
import husnETurkLogo from '@/assets/husn-e-turk-logo.svg';
import shaheenLogo from '@/assets/shaheen-logo.svg';
import hijabLogo from '@/assets/hijab-logo.svg';
import taryakLogo from '@/assets/taryak-logo.svg';
import libnaniLogo from '@/assets/libnani-logo.svg';

const getLogoClass = (compact) => (compact ? 'h-12 w-auto max-w-[170px] object-contain' : 'h-20 w-auto max-w-[300px] object-contain');

const BeautyloopLogo = ({ compact = false }) => {
  const wrapperClass = getLogoClass(compact);

  return (
    <img src={beautyloopLogo} alt="Beautyloop logo" className={wrapperClass} />
  );
};

const ArmanLogo = ({ compact = false }) => {
  const wrapperClass = getLogoClass(compact);

  return (
    <img src={armanLogo} alt="Arman logo" className={wrapperClass} />
  );
};

const AlmasLogo = ({ compact = false }) => {
  return (
    <img src={almasLogo} alt="Almas logo" className={getLogoClass(compact)} />
  );
};

const ShaheenLogo = ({ compact = false }) => {
  const wrapperClass = getLogoClass(compact);

  return (
    <img src={shaheenLogo} alt="Shaheen logo" className={wrapperClass} />
  );
};

const HusnETurkLogo = ({ compact = false }) => {
  const wrapperClass = compact ? 'h-14 w-auto max-w-[190px] object-contain' : 'h-24 w-auto max-w-[340px] object-contain';

  return (
    <img src={husnETurkLogo} alt="Husn-e-Turk logo" className={wrapperClass} />
  );
};

const HijabLogo = ({ compact = false }) => {
  const wrapperClass = getLogoClass(compact);

  return (
    <img src={hijabLogo} alt="Hijab logo" className={wrapperClass} />
  );
};

const TaryakLogo = ({ compact = false }) => {
  const wrapperClass = getLogoClass(compact);

  return (
    <img src={taryakLogo} alt="Taryak logo" className={wrapperClass} />
  );
};

const LibnaniLogo = ({ compact = false }) => {
  const wrapperClass = compact ? 'h-10 w-auto max-w-[150px] object-contain' : 'h-16 w-auto max-w-[240px] object-contain';

  return (
    <img src={libnaniLogo} alt="Libnani logo" className={wrapperClass} />
  );
};

const BrandMark = ({ brand, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-14 w-14 text-sm',
    md: 'h-16 w-16 text-base',
    lg: 'h-20 w-20 text-lg',
  };

  if (brand.name === 'Beautyloop') {
    return (
      <div className="flex w-full justify-center">
        <BeautyloopLogo />
      </div>
    );
  }

  if (brand.name === 'Arman') {
    return (
      <div className="flex w-full justify-center">
        <ArmanLogo />
      </div>
    );
  }

  if (brand.name === 'Almas') {
    return (
      <div className="flex w-full justify-center">
        <AlmasLogo />
      </div>
    );
  }

  if (brand.name === 'Husn-e-Turk') {
    return (
      <div className="flex w-full justify-center">
        <HusnETurkLogo />
      </div>
    );
  }

  if (brand.name === 'Hijab') {
    return (
      <div className="flex w-full justify-center">
        <HijabLogo />
      </div>
    );
  }

  if (brand.name === 'Taryak') {
    return (
      <div className="flex w-full justify-center">
        <TaryakLogo />
      </div>
    );
  }

  if (brand.name === 'Shaheen') {
    return (
      <div className="flex w-full justify-center">
        <ShaheenLogo />
      </div>
    );
  }

  if (brand.name === 'Libnani') {
    return (
      <div className="flex w-full justify-center">
        <LibnaniLogo />
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center gap-4 text-center">
      <div className={`flex items-center justify-center rounded-[1.4rem] bg-gradient-to-br ${brand.palette} ${sizeClasses[size]} border border-white/70 shadow-[0_20px_45px_-28px_rgba(107,44,145,0.85)]`}>
        <span className="font-serif font-semibold uppercase tracking-[0.22em] text-[#351343]">
          {brand.logoLetters}
        </span>
      </div>
      <div>
        <div className="font-serif text-3xl leading-none text-[#2f1538] md:text-4xl">{brand.name}</div>
      </div>
    </div>
  );
};

export { AlmasLogo, ArmanLogo, BeautyloopLogo, HijabLogo, HusnETurkLogo, LibnaniLogo, ShaheenLogo, TaryakLogo };
export default BrandMark;
