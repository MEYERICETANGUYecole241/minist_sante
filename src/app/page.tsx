import React from 'react'
import HeroSection from '@/components/sections/HeroSection'
import CompaingsSection from '@/components/sections/CompaingsSection'
import  DownloadSection from '@/components/sections/DownloadSection'
import ServicesSection from '@/components/sections/ServicesSections'
 


export default function page() {
  return (
    <main>
      <HeroSection />
      < ServicesSection />
      <DownloadSection  />
      <CompaingsSection  />
    </main>
  )
}
