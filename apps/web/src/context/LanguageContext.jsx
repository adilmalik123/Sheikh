import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { languages, siteCopy } from '@/content/siteContent';

const STORAGE_KEY = 'sheikh-cosmetics-language';
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem(STORAGE_KEY) || 'en';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = siteCopy[language]?.direction || 'ltr';
    document.documentElement.dataset.language = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages,
      copy: siteCopy[language] ?? siteCopy.en,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
