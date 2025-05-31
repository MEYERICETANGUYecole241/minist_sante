"use client"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
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
              </ul>
            </div>
          </div>
        </div>

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
