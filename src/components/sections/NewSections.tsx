'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import stylesCss from './NewSections.module.css'

export default function NewSections() {
  // Données exemples pour les actualités (normalement cela viendrait d'une API)
  const newsItems = [
    {
      id: 1,
      image: '/photo.jpeg',
      date: '29 mai 2025',
      title: 'Journées nationales de la transfusion sanguine',
      description: "Les Premières Journées Nationales de la Transfusion Sanguine dont l'Assemblée Nationale de la Transition a servi de cadre pendant 48 heures, viennent de définir les priorités du Centre National de la...",
      link: '#',
    },
    {
      id: 2,
      image: '/photo1.jpeg',
      alt: 'Image Actualité 2',
      width: 300,
      height: 200,
      date: '06 mar 2025',
      title: 'Cérémonie de lancement officiel de la mise en oeuvre du financement intégrée pour la lutte contre le VIH, la Tuberculose et le Paludisme',
      description: "Ce Mardi 4 mars marque une avancée significative pour la prévention et la lutte contre le VIH, la Tuberculose et le Paludisme au Gabon avec le lancement officiel des activités de l'Unité de Gestion de Projets...",
      link: '#',
    },
    {
      id: 3,
      image: '/photo2.jpeg',
      alt: 'Image Actualité 3',
      width: 300,
      height: 200,
      date: '02 jan 2025',
      title: 'Bilan des activités de 2024',
      description: "Transition vers des soins et des médicaments pour tous et partout Assurément, 2024 aura été une année pleine de défis pour redéfinir un Système de santé plus...",
      link: '#'
    },
    {
      id: 4,
      image: '/photo5.png',
      alt: 'Image Actualité 4',
      width: 300,
      height: 200,
      date: '02 jan 2025',
      title: 'Appel à candidature recrutement du personnel UGC7 du Fonds Mondial',
      description: "Le Ministère de la Santé, Récipiendaire Principal (RP) de la subvention intégrée VIH, Tuberculose et Paludisme, GC7 octroyée par le Fonds Mondial au Gabon, lance un appel à candidatures pour...",
      link: '#'
    }
  ];

  // Styles CSS (peuvent être externalisés dans un fichier .css)
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      opacity: 0, 
      transform: 'translateY(20px)',
      transition: 'opacity 0.5s ease-out, transform 0.5s ease-out', 
    },
    containerVisible: { 
      opacity: 1,
      transform: 'translateY(0)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#333',
    },
    newsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    newsItem: {
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
    },
    newsItemContent: { 
      flexGrow: 1, // Permet à cette section de grandir et de pousser le bouton vers le bas
    },
    newsDate: {
      fontSize: '0.9em',
      color: '#666',
      marginBottom: '5px',
    },
    newsTitle: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
    },
    newsDescription: {
      fontSize: '1em',
      color: '#555',
      marginBottom: '15px',
      lineHeight: '1.6',
    },
    seeAllNewsLinkContainer: { // Gardé pour le centrage du lien global
      textAlign: 'center',
      marginTop: '30px',
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après un court délai pour s'assurer que le composant est monté
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 900); // Un léger délai peut aider à ce que la transition initiale soit visible
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ ...styles.container, ...(isVisible && styles.containerVisible) }}>
      <h2 className='text-2xl font-bold' style={styles.header}>Actualités</h2>
      <div style={styles.newsList}>
        {newsItems.map(item => (
          <article key={item.id} style={styles.newsItem}>
            <div style={styles.newsItemContent}> {/* Conteneur pour le contenu qui grandit */}
              <div className={stylesCss.newsImageContainer}>
                <Image 
                  src={item.image} 
                  alt={item.title || 'Image d\'actualité'} 
                  className={stylesCss.newsImage} 
                  width={300} 
                  height={200} 
                />
              </div>
              <p style={styles.newsDate}>{item.date}</p>
              <h3 style={styles.newsTitle}>{item.title}</h3>
              <p style={styles.newsDescription}>{item.description} </p>
            </div>
            <Link href={item.link} className={stylesCss.readMoreLink} target="_blank" rel="noopener noreferrer">
              Lire plus
            </Link>
          </article>
        ))}
      </div>
      <div style={styles.seeAllNewsLinkContainer}>
        <Link href="#" className= {stylesCss.seeAllNewsLink}>
          <span className='text-2xl font-bold'>Lire plus d&apos;actualité</span>
        </Link>
      </div>
    </div>
  )
}
