"use client"

import { MainLayout } from "@/components/main-layout"
import { ContactHeroSection } from "./hero-section"
import { ContactFormSection } from "./contact-form-section"
import { FAQSection } from "./faq-section"

export default function Contact() {
  return (
    <MainLayout>
      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
    </MainLayout>
  )
}