import React from 'react';
import { languages } from '@/content/siteContent';
import { getCatalogText } from '@/content/brandCatalog';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = ({ mobile = false }) => {
  const { language, setLanguage } = useLanguage();
  const catalogText = getCatalogText(language);

  if (language !== 'en') {
    return (
      <div className={`${mobile ? 'w-full' : 'w-[210px]'}`}>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className="w-full rounded-full border border-white/15 bg-[rgba(255,255,255,0.1)] px-4 py-2 text-sm font-semibold text-white outline-none backdrop-blur transition hover:bg-[rgba(255,255,255,0.16)]"
          title={catalogText.englishSwitchHelp}
        >
          {catalogText.englishSwitch}
        </button>
      </div>
    );
  }

  return (
    <div className={`${mobile ? 'w-full' : 'w-[210px]'}`}>
      <label className="sr-only" htmlFor={mobile ? 'language-switcher-mobile' : 'language-switcher'}>
        Select language
      </label>
      <select
        id={mobile ? 'language-switcher-mobile' : 'language-switcher'}
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        className="w-full rounded-full border border-white/15 bg-[rgba(255,255,255,0.1)] px-4 py-2 text-sm font-semibold text-white outline-none backdrop-blur transition hover:bg-[rgba(255,255,255,0.14)]"
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code} className="text-[#351343]">
            {item.nativeLabel} ({item.label})
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
