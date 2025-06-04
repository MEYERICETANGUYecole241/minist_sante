"use client"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from "next/image"
import React from "react"

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

        <hr className="border-black mb-6 md:mb-8" />

        {/* Section inférieure: Informations de contact et Réseaux sociaux */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          {/* Bloc Info Contact */}
          <div className="mb-4 md:mb-0 text-sm md:text-base">
            <p className="font-bold mb-1">Ministère de la Santé</p>
            <p className="text-xs md:text-sm">Libreville-Gabon</p>
            <p className="mt-2 text-xs md:text-sm">Centre d&apos;appels sans frais: 1400</p>
            <p className="mt-2 text-xs md:text-sm">Tous droits réservés © Ministère de la Santé 2025</p>
            <p className="text-xs md:text-sm">Design et développement réalisés par l&apos;ANINF</p>
          </div>

          {/* Bloc Réseaux Sociaux et Bouton Retour en haut */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-bold mb-3 text-base md:text-lg">Suivez Nous</p>
            <div className="flex gap-4 mb-4">
              <Link href="https://www.facebook.com/MinistereSanteGabon" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com/MinistereSanteGabon" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/ministere.sante.gabon/" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/ministere-de-la-sante-gabon/" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </Link>
              <Link href="https://www.youtube.com/@MinistereSanteGabon" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Youtube size={24} />
              </Link>
            </div>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-800 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm hover:bg-gray-700 transition-colors duration-300"
            >
              ↑ Retour en haut
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer