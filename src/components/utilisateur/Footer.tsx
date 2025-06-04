"use client"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#28a745] text-white p-2 md:p-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Logo Block */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="text-white font-bold text-center md:text-left">
              RÉPUBLIQUE GABONAISE
            </div>
            <Image 
              src="/sante.png"
              alt="Drapeau du Gabon" 
              width={90} 
              height={40}
              className="hover:scale-110 transition-all duration-300 shadow-xl rounded mx-auto md:mx-0 my-2"
            />
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div>
              <h3 className="text-black text-sm md:text-base font-semibold mb-2">Liens utiles</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:underline">Contacter le ministère</a></li>
                <li><a href="#" className="text-white hover:underline">Carrières</a></li>
                <li><a href="#" className="text-white hover:underline">FAQ du ministère de la santé</a></li>
                <li><a href="#" className="text-white hover:underline">Avis de non-discrimination</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-black text-sm md:text-base font-semibold mb-2">Informations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:underline">Salle de presse</a></li>
                <li><a href="#" className="text-white hover:underline">Archives du ministère</a></li>
                <li><a href="#" className="text-white hover:underline">Déclaration d&apos;accessibilité</a></li>
                <li><a href="#" className="text-white hover:underline">Politique de confidentialité</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-black text-sm md:text-base font-semibold mb-2">Ressources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:underline">Budget/Performance</a></li>
                <li><a href="#" className="text-white hover:underline">Inspecteur général</a></li>
                <li><a href="#" className="text-white hover:underline">Avis de non-responsabilité</a></li>
                <li><a href="#" className="text-white hover:underline">Loi sur l&apos;égalité des chances</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-black text-sm md:text-base font-semibold mb-2">Gouvernement</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:underline">Loi sur la liberté d&apos;information</a></li>
                <li><a href="#" className="text-white hover:underline">La Présidence</a></li>
                <li><a href="#" className="text-white hover:underline">Ga.gov</a></li>
                <li><a href="#" className="text-white hover:underline">Politique de divulgation</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-black my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Contact Info */}
          <div className="flex-1">
            <p className="text-sm font-bold">Ministère de la Santé</p>
            <p className="text-xs">Libreville-Gabon</p>
            <p className="text-xs mt-2">Centre d&apos;appels sans frais: 1400</p>
            <p className="text-xs mt-2">Tous droits réservés &copy; Ministère de la Santé 2025</p>
            <p className="text-xs">Design et développement réalisés par l&apos;ANINF</p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-sm font-bold">Suivez Nous</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/MinistereSanteGabon" className="text-[#1A3A6D] hover:text-white">
                <Facebook className="w-5 h-5 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://twitter.com/MinistereSanteGabon" className="text-[#1A3A6D] hover:text-white">
                <Twitter className="w-5 h-5 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/ministere.sante.gabon/" className="text-[#1A3A6D] hover:text-white">
                <Instagram className="w-5 h-5 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/ministere-de-la-sante-gabon/" className="text-[#1A3A6D] hover:text-white">
                <Linkedin className="w-5 h-5 hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://www.youtube.com/@MinistereSanteGabon" className="text-[#1A3A6D] hover:text-white">
                <Youtube className="w-5 h-5 hover:scale-110 transition-all duration-300" />
              </a>
            </div>

            {/* Back to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#343A40] text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition-colors"
            >
              ↑ Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
