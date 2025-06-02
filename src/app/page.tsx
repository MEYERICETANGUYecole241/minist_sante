import React from 'react'
import HeroSection from '@/components/sections/HeroSection'
import CompaingsSection from '@/components/sections/CompaingsSection'
import  DownloadSection from '@/components/sections/DownloadSection'

 


export default function page() {
  return (
    <main>
      <HeroSection />
      <DownloadSection  />
      <CompaingsSection  />
    </main>
  )
}
