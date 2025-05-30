'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '@/components/utilisateur/Navbar'; // Assurez-vous d'avoir un composant MobileMenu

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Recherche:', searchTerm);
    // Exemple : router.push(`/recherche?q=${searchTerm}`);
  };

  return (
    <nav className="backdrop-blur bg-[#28a745] text-white px-6 py-4 flex items-center justify-between shadow-lg w-full border-b border-white/10 font-['Roboto',sans-serif]">
      {/* Logo + Nom */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="Logo Ministère"
          width={48}
          height={48}
          className=""
        />
        <span className="text-lg font-semibold tracking-wide text-white uppercase !font-sans">
          Ministère de la Santé
        </span>
      </div>

      {/* Barre de recherche stylisée */}
      <div className="flex flex-1 max-w-md mx-6">
        <div className="flex items-center w-full bg-white rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Rechercher..."
            className="flex-1 px-4 py-1.5 text-sm text-black bg-transparent focus:outline-none placeholder:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-3 py-2 text-[#28a745] hover:text-white hover:bg-[#28a745] transition-all duration-200 rounded-full"
            title="Rechercher"
          >
            🔍
          </button>
        </div>
      </div>

      {/* Liens + Menu Mobile */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        {[
          { href: '/', label: 'Accueil' },
          { href: '/services', label: 'Services' },
          { href: '/actualites', label: 'Actualités' },
          { href: '/contact', label: 'Contact' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative px-2 py-1 group overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-[#d9f99d] transition-colors duration-300">
              {label}
            </span>
            <span
              className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 group-hover:scale-x-100 bg-white transition-transform duration-300 origin-left"
            />
            <span
              className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300 z-0 rounded"
            />
          </Link>
        ))}

        {/* 👉 Emplacement pour le composant mobile */}
        <div className="ml-4 block lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
