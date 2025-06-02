"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Syringe,
  Baby,
  Users,
  Hospital,
  AlertTriangle,
  GraduationCap,
  HeartPulse,
  Pill,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Consultations médicales",
    description: "Accès aux soins de santé de base dans les centres publics.",
    icon: Stethoscope,
  },
  {
    title: "Vaccination",
    description: "Programmes nationaux pour prévenir les maladies infectieuses.",
    icon: Syringe,
  },
  {
    title: "Santé maternelle et infantile",
    description: "Suivi des femmes enceintes, accouchements sécurisés et soins aux nourrissons.",
    icon: Baby,
  },
  {
    title: "Santé communautaire",
    description: "Actions de santé publique de proximité dans les zones rurales.",
    icon: Users,
  },
  {
    title: "Assistance médicale d’urgence",
    description: "Prise en charge rapide en cas d'accidents ou d’épidémies.",
    icon: AlertTriangle,
  },
  {
    title: "Gestion des hôpitaux",
    description: "Encadrement et supervision des structures sanitaires.",
    icon: Hospital,
  },
  {
    title: "Formation du personnel médical",
    description: "Renforcement des capacités des professionnels de santé.",
    icon: GraduationCap,
  },
  {
    title: "Contrôle pharmaceutique",
    description: "Surveillance des médicaments, vaccins et produits de santé.",
    icon: Pill,
  },
  {
    title: "Promotion de la santé",
    description: "Campagnes de prévention sur l’hygiène, la nutrition et le bien-être.",
    icon: HeartPulse,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Nos Services Publics</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition text-left"
              >
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
