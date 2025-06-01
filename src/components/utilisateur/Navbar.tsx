'use client';

import { useState } from 'react';
import { Menu, X, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // État pour le menu hamburger (mobile)
  const [showSearch, setShowSearch] = useState(false); // État pour la barre de recherche
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // État pour les dropdowns desktop
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null); // État pour les dropdowns du menu mobile

  const links = [
    {
      label: 'Accueil',
      children: [
        { href: '#accueil', label: 'Section Accueil' },
        { href: '#services', label: 'Section Services' },
        { href: '#ministere', label: 'Section Ministère' },
        { href: '#usagers', label: 'Section Usagers' },
        { href: '#presse', label: 'Section Presse' },
        { href: '#actualites', label: 'Section Actualités' },
        { href: '#contact', label: 'Section Contact' },
      ],
    },
    {
      label: 'Services',
      children: [
        { href: '/services/page1', label: 'Service A' },
        { href: '/services/page2', label: 'Service B' },
        { href: '/services/page3', label: 'Service C' },
        { href: '/services/page4', label: 'Service D' },
        { href: '/services/page5', label: 'Service E' },
      ],
    },
    {
      label: 'Ministère',
      children: [
        { href: '/ministere/page1', label: 'Mission' },
        { href: '/ministere/page2', label: 'Organigramme' },
        { href: '/ministere/page3', label: 'Historique' },
        { href: '/ministere/page4', label: 'Réformes' },
      ],
    },
    {
      label: 'Usagers',
      children: [
        { href: '/usagers/page1', label: 'Droits' },
        { href: '/usagers/page2', label: 'Réclamations' },
        { href: '/usagers/page3', label: 'Support' },
        { href: '/usagers/page4', label: 'Formulaires' },
      ],
    },
    {
      label: 'Presse',
      children: [
        { href: '/presse/page1', label: 'Communiqués' },
        { href: '/presse/page2', label: 'Dossiers' },
        { href: '/presse/page3', label: 'Archives' },
        { href: '/presse/page4', label: 'Interviews' },
      ],
    },
    {
      label: 'Actualités',
      children: [
        { href: '/actualites/page1', label: 'Événements' },
        { href: '/actualites/page2', label: 'Articles' },
        { href: '/actualites/page3', label: 'Communiqués' },
        { href: '/actualites/page4', label: 'Points Presse' },
      ],
    },
    {
      label: 'Contact',
      children: [
        { href: '/contact/page1', label: 'Formulaire' },
        { href: '/contact/page2', label: 'Plan d’accès' },
        { href: '/contact/page3', label: 'Email Direct' },
      ],
    },
  ];

  const handleSearch = () => {
    console.log('Recherche :', searchTerm);
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#28a745] text-white shadow-md z-50 font-roboto">
      {/* Conteneur principal de la navbar, max-w-full pour les petits écrans */}
      <div className="max-w-full md:max-w-7xl mx-auto px-4 py-3 flex items-center justify-between min-h-[70px]">
        {/* Groupe Logo et Titre */}
        <div className="flex items-center space-x-2 flex-shrink-0 min-w-0"> {/* min-w-0 pour permettre au contenu de rétrécir si nécessaire */}
          <Image
            src="/logo.png"
            alt="Logo Ministère"
            width={60}
            height={60}
            className="shadow-md flex-shrink-0"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
            // Ajustement des tailles de texte du titre pour une meilleure responsivité
            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wider uppercase whitespace-nowrap relative group cursor-pointer leading-none"
          >
            {'Ministère de la Santé'.split('').map((char, i) => (
              <motion.span key={i} variants={letterVariants} transition={{ duration: 0.3, ease: 'easeOut' }} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 group-hover:animate-shimmer pointer-events-none" />
          </motion.div>
        </div>

        {/* Navigation Desktop : Affiché à partir de 'lg' (1024px) */}
        <nav className="hidden lg:flex flex-grow justify-end items-center space-x-4 xl:space-x-6">
          {links.map(({ label, children }) => (
            <div
              className="relative group"
              key={label}
              onMouseEnter={() => setActiveDropdown(label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-sm lg:text-base hover:text-yellow-200 transition duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                {label}
                {/* Taille des chevrons ajustée */}
                {activeDropdown === label ? (
                  <ChevronUp size={12} className="ml-0.5 transition-transform duration-200" />
                ) : (
                  <ChevronDown size={12} className="ml-0.5 transition-transform duration-200" />
                )}
              </button>
              <AnimatePresence>
                {activeDropdown === label && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg transform origin-top z-50"
                  >
                    {children.map(({ href, label }) => (
                      <a key={href} href={href} className="block px-4 py-2 text-sm hover:bg-gray-200">
                        {label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Bouton de recherche Desktop */}
          <div className="relative ml-4"> {/* Marge à gauche pour séparer de la nav */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              className="text-white hover:text-yellow-200"
            >
              <Search size={22} />
            </Button>
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full right-0 mt-1 bg-white rounded-full flex items-center overflow-hidden shadow px-2 z-50"
                >
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-2 py-1 text-sm text-black bg-transparent focus:outline-none"
                    autoFocus
                  />
                  <Button variant="ghost" size="sm" onClick={handleSearch} className="text-[#28a745] px-2">
                    <Search size={18} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Navigation Mobile : Visible en dessous de 'lg' (1024px) */}
        <div className="lg:hidden relative flex items-center gap-2 flex-shrink-0">
          {/* Bouton de recherche Mobile */}
          <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)} className="text-white">
            <Search size={22} />
          </Button>
          {/* Bouton Menu Hamburger */}
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>

          {/* Menu Hamburger déroulant (overlay) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 bg-[#28a745] rounded-lg shadow-lg p-4 w-56 max-h-[80vh] overflow-y-auto z-50"
              >
                {links.map(({ label, children }) => (
                  <div key={label} className="mb-3">
                    <button
                      onClick={() => setOpenMobileMenu(openMobileMenu === label ? null : label)}
                      className="flex w-full justify-between items-center text-white font-semibold py-2"
                    >
                      {label}
                      {openMobileMenu === label ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <AnimatePresence>
                      {openMobileMenu === label && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 pl-4 space-y-1 bg-[#1e8a3a] rounded-md" // Couleur de fond légèrement différente pour les sous-menus
                        >
                          {children.map(({ href, label }) => (
                            <li key={href}>
                              <a href={href} className="block text-white hover:text-yellow-200 py-1 px-2">
                                {label}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Barre de recherche Mobile (apparaît sous la navbar sur les petits écrans) */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white px-4 py-2 border-t border-gray-200"
          >
            <div className="flex items-center rounded-full shadow-sm overflow-hidden">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 text-sm text-black bg-transparent focus:outline-none"
                autoFocus
              />
              <Button variant="ghost" size="sm" onClick={handleSearch} className="text-[#28a745] px-2">
                <Search size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}