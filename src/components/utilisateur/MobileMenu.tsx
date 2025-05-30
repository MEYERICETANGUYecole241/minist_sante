<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  links: NavLink[];
  onClose: () => void;
};

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
=======
"use client";
=======
'use client';
>>>>>>> 480ac9e (Navebaré)

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  href: string;
  label: string;
};

<<<<<<< HEAD
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/ministère", label: "Ministère" },
    { href: "/services aux usagers", label: "Services aux usagers" },
    { href: "/presse", label: "Presse" },
    { href: "/actualités", label: "Actualités" },
    { href: "/contact", label: "Contact" },
  ];
>>>>>>> 8623f0b (menu burger)

  return (
<<<<<<< HEAD
>>>>>>> b3d990c (footer)
=======
<<<<<<< HEAD
>>>>>>> 8623f0b (menu burger)
=======
type MobileMenuProps = {
  links: NavLink[];
  onClose: () => void;
};

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 480ac9e (Navebaré)
    <div>
      <h1>
        gft
      </h1>
      
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8623f0b (menu burger)
=======
    <header className="bg-[#28a745] text-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-xl font-bold">
          <Link href="/">Ministère de la Santé</Link>
        </h1>

        {/* Menu burger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => {
              setOpen(!open);
              console.log("Burger cliqué, état : ", !open);
            }}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu links (Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`py-2 hover:underline transition ${
                    pathname === link.href ? "underline text-yellow-400" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu déroulant (Mobile) */}
      {open && (
        <nav className="md:hidden absolute left-4 right-4 top-20 bg-[#28a745] rounded-lg shadow-lg">
          <ul className="flex flex-col divide-y divide-white/20">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 hover:underline transition ${
                    pathname === link.href ? "underline text-yellow-200" : ""
                  }`}
                  onClick={() => setOpen(false)} // fermer le menu après clic
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 480ac9e (Navebaré)
=======
    <nav className="bg-[#28a745] rounded-lg shadow-lg divide-y divide-white/10">
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onClose}
              className={`block px-4 py-3 hover:underline transition ${
                pathname === href ? 'underline text-yellow-200' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
>>>>>>> fcbb749 (Navebaré)
  );
>>>>>>> eb0499e (menu burger)
=======
>>>>>>> b3d990c (footer)
=======
  );
>>>>>>> eb0499e (menu burger)
>>>>>>> 8623f0b (menu burger)
}
