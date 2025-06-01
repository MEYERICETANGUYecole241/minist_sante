"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Syringe, Bug, ShieldCheck } from "lucide-react";

type Campaign = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
};

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Campagne de vaccination",
    description: "Une initiative pour renforcer la couverture vaccinale.",
    imageUrl: "image_2.jpg",
    icon: <Syringe className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Lutte contre le paludisme",
    description: "Distribution gratuite de moustiquaires imprégnées.",
    imageUrl: "image_1.jpg",
    icon: <Bug className="w-6 h-6 text-green-600" />,
  },
  {
    id: 3,
    title: "Sensibilisation à l’hygiène",
    description: "Ateliers éducatifs dans les écoles et villages.",
    imageUrl: "image_3.jpeg",
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
  },
  {
    id: 4,
    title: "campagne consultation",
    description: "consultation gratuite pour toutes les populations.",
    imageUrl: "image_4.jpg",
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
  },
];

export const CampaignsSection = () => {
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const containerWidth = scrollRef.current?.offsetWidth || 0;
      const distance = scrollWidth / 2; // car on double les cartes

      await controls.start({
        x: [-0, -distance],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        },
      });
    };

    animate();
  }, [controls]);

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
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
                className="min-w-[300px] max-w-xs bg-white rounded-2xl shadow p-4 flex-shrink-0"
              >
                <div className="flex items-center gap-2 mb-2">
                  {campaign.icon}
                  <h3 className="text-xl font-semibold">{campaign.title}</h3>
                </div>
                <img
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  className="rounded-xl mb-4 h-48 w-full object-cover"
                />
                <p className="text-gray-600">{campaign.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
