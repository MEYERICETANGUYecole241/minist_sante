'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link'; // Make sure Link is imported if used

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Liste des images de fond (placer ces images dans /public)
  const bgImages = [
    '/Hero/bac.jpg',
    '/Hero/fac.jpg',
    '/Hero/vac.jpg',
    '/Hero/fac1.jpg',
    '/Hero/vac1.jpg',
    '/Hero/vac3.jpg',
    '/Hero/vac4.jpg',
    '/Hero/vac5.jpg',
    // Ajoutez autant d’images que vous le souhaitez
  ];

  // Change d’image toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    return () => clearInterval(interval);
  }, [bgImages.length]); // Dépendance: relance l'effet si le nombre d'images change

  // Animation lettre par lettre du titre
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-screen overflow-hidden font-roboto">
      {/* --------------------------
          ARRIÈRE-PLAN ANIMÉ (CARROUSEL)
      -------------------------- */}
      <div className="absolute inset-0">
        {bgImages.map((src, index) => (
          <motion.div
            key={src} // Utilisez l'URL de l'image comme clé unique
            initial={{ opacity: 0 }}
            // Anime l'opacité à 1 si l'image est l'actuelle, sinon à 0
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }} // Transition douce entre les images
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`Fond ${index + 1} du Ministère de la Santé du Gabon`} // Texte alt plus descriptif
              fill 
              className="object-cover" 
              priority={index === currentIndex} 
            />
          </motion.div>
        ))}
        {/* Superposition sombre pour le contraste et la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --------------------------
          CONTENU PRINCIPAL (TEXTE ET BOUTONS)
      -------------------------- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Titre animé lettre par lettre */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {}, // État initial vide
            visible: { transition: { staggerChildren: 0.05 } }, // Anime les enfants avec un décalage
          }}
          className="group text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg relative" // Ajout de 'relative' pour le shimmer
        >
          {'Bienvenue au Ministère de la Santé du Gabon'.split('').map((char, i) => (
            <motion.span
              key={i} // Clé unique pour chaque lettre
              variants={letterVariants} // Applique les variantes d'animation de lettre
              transition={{ duration: 0.3, ease: 'easeOut' }} // Transition douce pour chaque lettre
              className="inline-block" // Garde les lettres en ligne mais permet des transformations individuelles
            >
              {char === ' ' ? '\u00A0' : char} {/* Gère les espaces non-sécables */}
            </motion.span>
          ))}
          {/* Effet « shimmer » au survol du titre (superposé) */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 group-hover:animate-shimmer pointer-events-none" />
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Commence invisible et légèrement en dessous
          animate={{ opacity: 1, y: 0 }} // Anime vers visible et position normale
          transition={{ delay: 0.4, duration: 0.6 }} // Délai après le titre, durée de l'animation
          className="text-white text-base sm:text-lg lg:text-xl max-w-2xl mb-8 drop-shadow-sm"
        >
          Agir pour la santé de tous les Gabonais, promouvoir le bien-être, et assurer
          l&apos;accès aux soins pour chaque citoyen. {/* Apostrophe échappée */}
        </motion.p>

        {/* Boutons d’appel à l’action */}
        <motion.div
          initial={{ opacity: 0 }} // Commence invisible
          animate={{ opacity: 1 }} // Anime vers visible
          transition={{ delay: 0.8, duration: 0.6 }} // Délai après le sous-titre
          className="flex flex-col sm:flex-row gap-4" // Disposition flexible, empilée sur mobile, en ligne sur sm+
        >
          <Button
            asChild // Permet à Button de rendre son enfant Link
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-200"
          >
            <Link href='#'>Nos Services</Link>
          </Button>
          <Button
            asChild // Permet à Button de rendre son enfant Link
            className="bg-transparent border border-white hover:bg-white hover:text-[#28a745] text-white px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-200"
          >
            <Link href='#'>Contactez-nous</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}