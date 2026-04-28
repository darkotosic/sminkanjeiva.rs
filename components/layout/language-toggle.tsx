'use client';

import { useEffect, useMemo, useState } from 'react';

type Language = 'sr' | 'en';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string,
        ) => unknown;
      };
    };
  }
}

const GOOGLE_COOKIE = 'googtrans';

function getCurrentLanguage(): Language {
  if (typeof document === 'undefined') {
    return 'sr';
  }

  const cookie = document.cookie
    .split('; ')
    .find((value) => value.startsWith(`${GOOGLE_COOKIE}=`));

  if (!cookie) {
    return 'sr';
  }

  return cookie.includes('/en') ? 'en' : 'sr';
}

function setTranslateCookie(target: Language) {
  const value = target === 'en' ? '/sr/en' : '/sr/sr';
  document.cookie = `${GOOGLE_COOKIE}=${value};path=/;max-age=31536000`;
}

function loadGoogleTranslateScript() {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.google?.translate?.TranslateElement) {
    return;
  }

  const existingScript = document.querySelector<HTMLScriptElement>('script[data-google-translate="true"]');
  if (existingScript) {
    return;
  }

  window.googleTranslateElementInit = () => {
    if (window.google?.translate?.TranslateElement) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'sr',
          includedLanguages: 'sr,en',
          autoDisplay: false,
        },
        'google_translate_element',
      );
    }
  };

  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  script.dataset.googleTranslate = 'true';
  document.body.appendChild(script);
}

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>('sr');

  useEffect(() => {
    setLanguage(getCurrentLanguage());
    loadGoogleTranslateScript();
  }, []);

  const nextLanguage = useMemo<Language>(() => (language === 'sr' ? 'en' : 'sr'), [language]);

  const handleToggle = () => {
    setTranslateCookie(nextLanguage);
    setLanguage(nextLanguage);
    window.location.reload();
  };

  return (
    <>
      <button type="button" className="language-toggle" onClick={handleToggle} aria-label="Promeni jezik sajta">
        {language === 'sr' ? 'EN' : 'SR'}
      </button>
      <div id="google_translate_element" aria-hidden="true" />
    </>
  );
}
