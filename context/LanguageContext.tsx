'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, languages } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = language;
  }, [language, currentLang]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir: currentLang.dir }}>
      <div dir={currentLang.dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
