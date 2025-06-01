"use client"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from '@/components/ui/button' // Assurez-vous d'avoir ce chemin correct si vous utilisez Shadcn UI
import Link from 'next/link' // Importation du composant Link de Next.js
import Image from "next/image"
import React from "react"

export default function Footer() {
  return (
    <footer className="bg-[#28a745] text-white py-4 px-2 sm:px-4 md:px-6">
      {/* Conteneur principal du footer, max-w pour centrer le contenu */}
      <div className="max-w-7xl mx-auto">

        {/* Section supérieure: Logo/Drapeau et Liens utiles */}
        {/* Sur mobile (par défaut), les éléments s'empilent (flex-col).
            À partir de 'md' (768px), ils se mettent en ligne (md:flex-row) */}
        <div className="flex flex-col md:flex-row md:justify-between items-start mb-8 md:mb-10">
          {/* Bloc Gauche: Logo et Nom du Ministère */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
            <div className="py-1 px-2 inline-block text-white font-bold text-base md:text-lg">
              RÉPUBLIQUE GABONAISE
            </div>
            <br /> {/* Ajout du br pour un saut de ligne propre */}
            <Image
              className="hover:scale-110 transition-all duration-300 shadow-xl ml-14 md:ml-16 rounded-md"
              src="/sante.png"
              alt="Drapeau du Gabon"
              width={90}
              height={40}
            />
          </div>

          {/* Bloc Droit: Grille de Liens */}
          {/* Sur mobile, 2 colonnes (grid-cols-2). Sur 'md', 3 colonnes (md:grid-cols-3). Sur 'lg', 4 colonnes (lg:grid-cols-4) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 flex-grow">
            <div>
              <h3 className="text-black text-base md:text-lg font-semibold mb-3">Liens utiles</h3>
              <ul className="list-none p-0">
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Contacter le ministère</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Carrières</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">FAQ du ministère de la santé</Link></li> {/* Ligne 50 corrigée */}
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Avis de non-discrimination</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base md:text-lg font-semibold mb-3">Informations</h3>
              <ul className="list-none p-0">
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Salle de presse</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Archives du ministère</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Déclaration d&apos;accessibilité</Link></li> {/* Ligne 60 corrigée */}
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Politique de confidentialité</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base md:text-lg font-semibold mb-3">Ressources</h3>
              <ul className="list-none p-0">
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Budget/Performance</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Inspecteur général</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Avis de non-responsabilité du site Web</Link></li> {/* Ligne 66 corrigée */}
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Loi sur l&apos;égalité des chances et la non-peur</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base md:text-lg font-semibold mb-3">Légal</h3>
              <ul className="list-none p-0">
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Loi sur la liberté d&apos;information (FOIA)</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">La Présidence</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Ga.gov</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-sm hover:underline">Politique de divulgation des vulnérabilités</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-black mb-6 md:mb-8" />

        {/* Section inférieure: Informations de contact et Réseaux sociaux */}
        {/* Sur mobile, les éléments s'empilent. Sur 'md', ils se mettent en ligne et se justifient. */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          {/* Bloc Info Contact */}
          <div className="mb-4 md:mb-0 text-sm md:text-base"> {/* Ajustement de la taille du texte pour mobile/desktop */}
            <p className="font-bold mb-1">Ministère de la Santé</p>
            <p className="text-xs md:text-sm">Libreville-Gabon</p>
            <p className="mt-2 text-xs md:text-sm">Centre d&apos;appels sans frais: 1400</p> {/* Ligne 84 corrigée */}
            <p className="mt-2 text-xs md:text-sm">Tous droits réservés © Ministère de la Santé 2025</p>
            <p className="text-xs md:text-sm">Design et développement réalisés par l&apos;ANINF</p> {/* Ligne 86 corrigée */}
          </div>

          {/* Bloc Réseaux Sociaux et Bouton Retour en haut */}
          <div className="flex flex-col items-center md:items-end"> {/* Centrer les éléments sur mobile, aligner à droite sur desktop */}
            <p className="font-bold mb-3 text-base md:text-lg">Suivez Nous</p>
            <div className="flex gap-4 mb-4"> {/* Espacement des icônes */}
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
              {/* Le lien YouTube semble être un placeholder, je laisse tel quel mais avec target="_blank" */}
              <Link href="https://www.youtube.com/@MinistereSanteGabon" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Youtube size={24} />
              </Link>
            </div>

            {/* Bouton Retour en haut utilisant le composant Button de Shadcn UI */}
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