import React from 'react'
import HeroSection from '@/components/sections/HeroSection'
import CompaingsSection from '@/components/sections/CompaingsSection'
import  DownloadSection from '@/components/sections/DownloadSection'
import ServicesSection from '@/components/sections/ServicesSections'
import StatsSection from '@/components/sections/StatsSection'
 


export default function page() {
  return (
    <main>
      <HeroSection />
      < ServicesSection />
      <DownloadSection  />
      <CompaingsSection  />
      <StatsSection />
    </main>
  )
}
