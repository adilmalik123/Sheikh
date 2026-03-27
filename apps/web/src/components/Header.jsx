import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo.jsx';
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { copy } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: copy.nav.home, path: '/' },
    { name: copy.nav.about, path: '/about' },
    { name: copy.nav.brands, path: '/brands' },
    { name: copy.nav.products, path: '/products' },
    { name: copy.nav.videos, path: '/videos' },
    { name: copy.nav.privateLabel, path: '/private-label' },
    { name: copy.nav.distributors, path: '/distributors' },
    { name: copy.nav.contact, path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="border-b border-white/10 bg-[#2e1138] px-4 py-2 text-center text-xs text-white/75 sm:px-6 lg:px-8">
        {copy.header.topbar}
      </div>
      <div className={`transition-all duration-300 ${scrolled ? 'border-b border-white/35 bg-[#351343]/86 py-3 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.6)] backdrop-blur-xl' : 'bg-[#351343]/65 py-5 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="z-50 flex-shrink-0">
              <Logo className={scrolled ? 'h-10' : 'h-12'} />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-[#f6d37c] ${isActive(link.path) ? 'text-[#f6d37c]' : 'text-white/82'}`}
                >
                  {link.name}
                  <span className={`absolute inset-x-0 -bottom-2 mx-auto h-px bg-gradient-to-r from-transparent via-[#f6d37c] to-transparent transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0'}`}></span>
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <LanguageSwitcher />
              <Link to="/private-label">
                <Button className="rounded-full border border-[#f5d37d]/40 bg-gradient-to-r from-[#b22e85] via-[#7e2f93] to-[#432061] px-6 text-white shadow-[0_18px_45px_-20px_rgba(178,46,133,0.85)] hover:brightness-110">
                  {copy.header.cta}
                </Button>
              </Link>
            </div>

            <button
              className="rounded-full border border-white/15 bg-white/10 p-2 text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className={`lg:hidden ${isOpen ? 'mt-4 block' : 'hidden'}`}>
            <div className="rounded-[1.5rem] border border-white/15 bg-[#3a184a]/95 p-5 shadow-2xl backdrop-blur-xl">
              <div className="mb-5">
                <LanguageSwitcher mobile />
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${isActive(link.path) ? 'bg-white text-[#4b185b]' : 'bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.82)] hover:bg-white/12'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Link to="/private-label" onClick={() => setIsOpen(false)} className="mt-5 block">
                <Button className="w-full rounded-full bg-gradient-to-r from-[#b22e85] via-[#7e2f93] to-[#432061] text-white hover:brightness-110">
                  {copy.header.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
