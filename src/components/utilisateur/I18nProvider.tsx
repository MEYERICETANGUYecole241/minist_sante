"use client";

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState, ReactNode } from 'react';

type Messages = Record<string, string>;

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('fr');
  const [messages, setMessages] = useState<Messages | null>(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale') || 'fr';
    setLocale(storedLocale);

    import(`@/messages/${storedLocale}.json`)
      .then((mod) => setMessages(mod.default as Messages))
      .catch(() => setMessages(null));
  }, []);

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}