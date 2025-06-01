// components/CampaignsSection.js (ou .tsx si vous utilisez TypeScript)
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Syringe, Bug, ShieldCheck, HeartPulse } from "lucide-react";
import Image from 'next/image'; // <-- NEW: Import Image from next/image

// Définition du type pour une campagne (utile pour TypeScript)
type Campaign = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
};

// Tableau des données de campagne
const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Campagne de vaccination",
    description: "Une initiative pour renforcer la couverture vaccinale.",
    imageUrl: "/image_2.jpg",
    icon: <Syringe className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Lutte contre le paludisme",
    description: "Distribution gratuite de moustiquaires imprégnées.",
    imageUrl: "/image_1.jpg",
    icon: <Bug className="w-6 h-6 text-green-600" />,
  },
  {
    id: 3,
    title: "Sensibilisation à l&apos;hygiène",
    description: "Ateliers éducatifs dans les écoles et villages.",
    imageUrl: "/image_3.jpeg",
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
  },
  {
    id: 4,
    title: "Campagne de consultation",
    description: "Consultation gratuite pour toutes les populations.",
    imageUrl: "/image_4.jpg",
    icon: <HeartPulse className="w-6 h-6 text-red-500" />,
  },
];

// Déclaration et export par défaut du composant directement
export default function CampaignsSection() {
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      if (!scrollRef.current) return;

      const scrollWidth = scrollRef.current.scrollWidth;
      const distance = scrollWidth / 2;

      await controls.start({
        x: [0, -distance],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        },
      });
    };

    const currentScrollRef = scrollRef.current; // <-- NEW: Capture the current ref value

    const resizeObserver = new ResizeObserver(() => {
        animate();
    });

    if (currentScrollRef) { // Use the captured value here
        resizeObserver.observe(currentScrollRef);
    }

    return () => {
        if (currentScrollRef) { // Use the captured value here
            resizeObserver.unobserve(currentScrollRef);
        }
    };
  }, [controls]); // No need to add campaigns.length here as it's static and not affecting the animation logic directly

  return (
    <section className="py-12 bg-gray-50 min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos campagnes</h2>

        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollRef}
            animate={controls}
            className="flex gap-6 w-max"
          >
            {[...campaigns, ...campaigns].map((campaign, index) => (
              <div
                key={`${campaign.id}-${index}`}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-xs bg-white rounded-2xl shadow p-4 flex-shrink-0"
              >
                <div className="flex items-center gap-2 mb-2">
                  {campaign.icon}
                  <h3 className="text-xl font-semibold">{campaign.title}</h3>
                </div>
                {/* OLD: <img src={campaign.imageUrl} alt={campaign.title} className="rounded-xl mb-4 h-48 w-full object-cover" /> */}
                {/* NEW: Using Next.js Image component */}
                <Image
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  width={320} // Provide a width that matches your min-w or max-w for optimal loading
                  height={192} // height for h-48 (48 * 4 = 192px)
                  className="rounded-xl mb-4 h-48 w-full object-cover"
                  unoptimized={false} // Allow Next.js to optimize, set to true if you don't want optimization for some reason
                />
                <p className="text-gray-600">{campaign.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};

export default CampaignsSection;
=======
}



>>>>>>> 2e2c1cf (	modified:   src/app/layout.tsx)
=======
}
>>>>>>> 58318f2 (	modified:   pnpm-lock.yaml)
