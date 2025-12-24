"use client"

import { MainLayout } from "@/components/main-layout"
import { StructuredData } from "@/components/structured-data"
import { HeroSection } from "./hero-section"
import { FeaturesSection } from "./features-section"
import { CTASection } from "./cta-section"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechStart",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/logo.png",
  "description": "Innovative technology solutions that drive growth and transform businesses.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "hello@techstart.com"
  },
  "sameAs": [
    "https://twitter.com/techstart",
    "https://linkedin.com/company/techstart"
  ]
}

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      <MainLayout>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </MainLayout>
    </>
  )
}
