'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const languages = [
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Español' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState('fr');

  useEffect(() => {
    // Ne s'exécute qu'au client, donc localStorage est disponible
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('locale');
      if (stored) setLocale(stored);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    localStorage.setItem('locale', newLocale);
    setLocale(newLocale);
    // Recharge la page pour que ta logique i18n (provider) prenne en compte la nouvelle locale
    router.refresh();
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="border rounded px-1 py-1 text-sm bg-white text-black"
      aria-label="Sélection de la langue"
    >
      {languages.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}
