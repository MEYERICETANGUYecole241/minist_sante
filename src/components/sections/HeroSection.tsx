'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link'

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
    return () => clearInterval(interval);
  }, [bgImages.length]);

  // Animation lettre par lettre du titre
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="relative h-screen overflow-hidden font-roboto">
=======
    <div className="relative h-screen overflow-hidden">
>>>>>>> c4bb75e (modification de la navbar et ajout du hero)
=======
    <div className="relative h-screen overflow-hidden font-roboto">
>>>>>>> 99a00a4 (	modified:   src/components/sections/AlertBanner.tsx)
=======
    <div className="relative h-screen overflow-hidden font-roboto">
=======
    <div className="relative h-screen overflow-hidden">
>>>>>>> 8b34b52 (modification de la navbar et ajout du hero)
>>>>>>> 485f289 (modification de la navbar et ajout du hero)
=======
    <div className="relative h-screen overflow-hidden font-roboto">
>>>>>>> 47c2f8e (	modified:   src/app/layout.tsx)
      {/* --------------------------
          ARRIÈRE-PLAN ANIMÉ (CARROUSEL)
      -------------------------- */}
      <div className="absolute inset-0">
        {bgImages.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`Fond ${index}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
        {/* Superposition sombre pour le contraste */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --------------------------
          CONTENU PRINCIPAL
      -------------------------- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Titre animé lettre par lettre */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="group text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg"
        >
          {'Bienvenue au Ministère de la Santé du Gabon'.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          {/* Effet « shimmer » au survol du titre */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 group-hover:animate-shimmer pointer-events-none" />
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white text-base sm:text-lg lg:text-xl max-w-2xl mb-8 drop-shadow-sm"
        >
          Agir pour la santé de tous les Gabonais, promouvoir le bien-être, et assurer
          l’accès aux soins pour chaque citoyen.
        </motion.p>

        {/* Boutons d’appel à l’action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-200">
            <Link href='#'>Nos Services</Link>
          </Button>
          <Button className="bg-transparent border border-white hover:bg-white hover:text-[#28a745] text-white px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-200">
            <Link href='#'>Contactez-nous</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
