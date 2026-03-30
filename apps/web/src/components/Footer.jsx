import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo.jsx';
import { brandProfiles } from '@/content/siteContent';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { copy } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-[#1f0c28] pt-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(178,46,133,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(242,199,109,0.12),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="container relative z-10 mx-auto px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div>
            <div className="inline-flex rounded-[1.4rem] border border-white/12 bg-[rgba(255,255,255,0.06)] p-4 backdrop-blur">
              <Logo className="h-12" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/72">{copy.home.aboutText}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em] text-[#f4d486]">
              <span className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.07)] px-4 py-2">Sheikh Brothers</span>
              <span className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.07)] px-4 py-2">{copy.common.globalSupply}</span>
              <span className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.07)] px-4 py-2">{copy.common.privateLabel}</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl text-[#f4d486]">{copy.nav.home}</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/72">
              {[
                { label: copy.nav.home, path: '/' },
                { label: copy.nav.about, path: '/about' },
                { label: copy.nav.products, path: '/products' },
                { label: copy.nav.privateLabel, path: '/private-label' },
                { label: copy.nav.contact, path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-[#f4d486]">{copy.common.brandsLabel}</h4>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/72">
              {brandProfiles.map((brand) => (
                <li key={brand.name}>
                  <Link to={`/brands/${brand.slug}`} className="transition hover:text-white">
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-[#f4d486]">{copy.nav.contact}</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/72">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#f4d486]" />
                <span>{copy.lists.contactDetails.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#f4d486]" />
                <span>{copy.lists.contactDetails.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#f4d486]" />
                <a href="mailto:info@sheikhcosmetics.com" className="transition hover:text-white">
                  info@sheikhcosmetics.com
                </a>
              </li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[rgba(255,255,255,0.07)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              <Globe2 className="h-4 w-4 text-[#f4d486]" />
              Worldwide shipping
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Sheikh Cosmetics (Sheikh Brothers). All rights reserved.</p>
          <p>Luxury whitening cream and whitening soap manufacturing for beauty partners worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
