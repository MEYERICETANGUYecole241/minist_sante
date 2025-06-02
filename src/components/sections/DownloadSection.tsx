"use client";

import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

const documents = [
  {
    title: "Brochure de vaccination 2025",
    description: "Informations sur la campagne nationale de vaccination.",
    url: "/downloads/brochure-vaccination-2025.pdf",
    size: "2.1 Mo",
  },
  {
    title: "Formulaire de signalement des cas",
    description: "À remplir par les professionnels de santé.",
    url: "/downloads/formulaire-signalement.pdf",
    size: "650 Ko",
  },
  {
    title: "Rapport annuel 2024",
    description: "Statistiques et performances du système de santé.",
    url: "/downloads/rapport-annuel-2024.pdf",
    size: "5.4 Mo",
  },
];

export default function DownloadSection() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          📄 Ressources à Télécharger
        </h2>

        <div className="grid gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-red-100 text-red-600">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                  <span className="text-xs text-gray-400">{doc.size}</span>
                </div>
              </div>
              <a
                href={doc.url}
                download
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:underline transition"
              >
                <Download className="w-4 h-4" />
                Télécharger
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
