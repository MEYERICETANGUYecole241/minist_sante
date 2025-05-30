"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // pour savoir quel lien est actif

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/ministère", label: "Ministère" },
    { href: "/services aux usagers", label: "Services aux usagers" },
    { href: "/presse", label: "Presse" },
    { href: "/actualités", label: "Actualités" },
    { href: "/contact", label: "Contact" },
  ];

  return (
<<<<<<< HEAD
    <div>
      <h1>
        gft
      </h1>
      
    </div>
  )
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
  );
>>>>>>> eb0499e (menu burger)
}
