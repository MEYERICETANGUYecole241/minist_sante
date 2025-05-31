"use client"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
<<<<<<< HEAD
import React from "react"
// Assurez-vous que votre fichier globals.css inclut les directives Tailwind:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

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
            <br /> {/* Added <br /> for a clean line break here */}
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
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Contacter le ministère</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Carrières</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">FAQ du ministère de la santé</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Avis de non-discrimination</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base md:text-lg font-semibold mb-3">Informations</h3>
              <ul className="list-none p-0">
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Salle de presse</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Archives du ministère</a></li>
                {/* CORRECTED LINE for Déclaration d'accessibilité */}
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Déclaration d&apos;accessibilité</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Politique de confidentialité</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base md:text-lg font-semibold mb-3">Ressources</h3>
              <ul className="list-none p-0">
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Budget/Performance</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Inspecteur général</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Avis de non-responsabilité du site Web</a></li>
                {/* CORRECTED LINE for Loi sur l'égalité des chances et la non-peur */}
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Loi sur l&apos;égalité des chances et la non-peur</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-base md:text-lg font-semibold mb-3">Légal</h3>
              <ul className="list-none p-0">
                {/* CORRECTED LINE for Loi sur la liberté d'information (FOIA) */}
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Loi sur la liberté d&apos;information (FOIA)</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">La Présidence</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Ga.gov</a></li>
                <li className="mb-2"><a href="#" className="text-white text-sm hover:underline">Politique de divulgation des vulnérabilités</a></li>
=======
import React from "react";
// import "../app/footer.css"

export default function Footer() {
  return <footer style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 5px' }}>
   
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          {/* Left Block: Logo and Ministry Name */}
          <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
            <div style={{ padding: '5px 10px', display: 'inline-block', color: 'white', fontWeight: 'bold' }}>
              RÉPUBLIQUE GABONAISE
              
            </div> <br />
            <Image className="hover:scale-110 transition-all duration-300 shadow-xl" src="/sante.png"
              alt="Drapeau du Gabon" width={90} height={40} style={{ marginLeft: '55px',
              display: 'inline-block', verticalAlign: 'middle', borderRadius: '5px' }} />
          </div>

          {/* Right Block: Links Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', flex: '1 1 auto' }}>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '10px', color: 'black' }}>Liens utiles</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacter le ministère</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Carrières</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>FAQ du ministère de la santé</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Avis de non-discrimination</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '10px', color: 'black' }}>Informations</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Salle de presse</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Archives du ministère</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Déclaration &#39;accessibilité</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Politique de confidentialité</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '10px', color: 'black' }}>Ressources</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Budget/Performance</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inspecteur général</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Avis de non-responsabilité du site Web</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Loi sur l&#39;égalité des chances et la non-peur</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '10px', color: 'black' }}>Légal</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Loi sur la liberté d&#39;information (FOIA)</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>La Présidence</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Ga.gov</a></li>
                <li className="hover:underline" style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Politique de divulgation des vulnérabilités</a></li>
>>>>>>> 876a674 (footer)
              </ul>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <hr className="border-black mb-6 md:mb-8" />

        {/* Section inférieure: Informations de contact et Réseaux sociaux */}
        {/* Sur mobile, les éléments s'empilent. Sur 'md', ils se mettent en ligne et se justifient. */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          {/* Bloc Info Contact */}
          <div className="mb-4 md:mb-0 text-sm md:text-base"> {/* Ajustement de la taille du texte pour mobile/desktop */}
            <p className="font-bold mb-1">Ministère de la Santé</p>
            <p className="text-xs md:text-sm">Libreville-Gabon</p>
            {/* CORRECTED LINE for Centre d'appels sans frais: 1400 */}
            <p className="mt-2 text-xs md:text-sm">Centre d&apos;appels sans frais: 1400</p>
            {/* Using &copy; for the copyright symbol is also good practice */}
            <p className="mt-2 text-xs md:text-sm">Tous droits réservés &copy; Ministère de la Santé 2025</p>
            {/* CORRECTED LINE for Design et développement réalisés par l'ANINF */}
            <p className="text-xs md:text-sm">Design et développement réalisés par l&apos;ANINF</p>
          </div>

          {/* Bloc Réseaux Sociaux et Bouton Retour en haut */}
          <div className="flex flex-col items-center md:items-end"> {/* Centrer les éléments sur mobile, aligner à droite sur desktop */}
            <p className="font-bold mb-3 text-base md:text-lg">Suivez Nous</p>
            <div className="flex gap-4 mb-4"> {/* Espacement des icônes */}
              <a href="https://www.facebook.com/MinistereSanteGabon" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white">
                <Facebook size={24} /> {/* Taille des icônes pour une meilleure visibilité */}
              </a>
              <a href="https://twitter.com/MinistereSanteGabon" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="https://www.instagram.com/ministere.sante.gabon/" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/ministere-de-la-sante-gabon/" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://www.youtube.com/@MinistereSanteGabon" className="text-gray-200 hover:scale-110 transition-all duration-300 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>

            {/* Bouton Retour en haut */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-800 text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm hover:bg-gray-700 transition-colors duration-300"
            >
              ↑ Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
=======
        <hr style={{ borderColor: 'black', marginBottom: '30px' }} />

        {/* Section inférieure: contact et réseaux sociaux */}
        <div style={{ display: 'flex', flexWrap: 'wrap',position: 'relative', justifyContent: '', alignItems: 'left' }}>
          {/* Contact Info (Placeholder - à adapter) */}
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Ministère de la Santé</p>
            <p style={{ fontSize: '12px', margin: 0 }}>Libreville-Gabon</p>
            <p style={{ fontSize: '12px', margin: '10px 0 0 0' }}>Centre d&#39;appels sans frais: 1400</p>
            <p style={{ fontSize: '12px', margin: '10px 0 0 0' }}>Tous droits réservés © Ministère de la Santé 2025 Design et développement réalisés par l&apos;ANINF</p>
          </div>

          {/* Suivez Nous */}
          <div style={{ flex: '0 1 auto', textAlign: 'center', marginLeft: '10px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Suivez Nous</p>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.facebook.com/MinistereSanteGabon" style={{ color: '#1A3A6D', fontSize: '20px', textDecoration: 'none' }}>
                <Facebook className="hover:scale-110 transition-all duration-300 hover:text-white" />
              </a>
              <a href="https://twitter.com/MinistereSanteGabon" style={{ color: '#1A3A6D', fontSize: '20px', textDecoration: 'none' }}>
                <Twitter className="hover:scale-110 transition-all duration-300 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/ministere.sante.gabon/" style={{ color: '#1A3A6D', fontSize: '20px', textDecoration: 'none' }}>
                <Instagram className="hover:scale-110 transition-all duration-300 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/ministere-de-la-sante-gabon/" style={{ color: '#1A3A6D', fontSize: '20px', textDecoration: 'none' }}>
                <Linkedin className="hover:scale-110 transition-all duration-300 hover:text-white" />
              </a>
              <a href="https://www.youtube.com/@MinistereSanteGabon" style={{ color: '#1A3A6D', fontSize: '20px', textDecoration: 'none' }}>
                <Youtube className="hover:scale-110 transition-all duration-300 hover:text-white" />  
              </a>

            </div>
                          {/* Bouton Retour en haut */}
        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              backgroundColor: '#343A40',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            ↑ Retour en haut
          </button>
        </div>  
          </div>

        </div>



      </div>
    </footer>;
}
>>>>>>> 876a674 (footer)
