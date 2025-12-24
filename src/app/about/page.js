"use client"

import { MainLayout } from "@/components/main-layout"
import { HeroSection } from "./hero-section"
import { MissionSection } from "./mission-section"
import { ValuesSection } from "./values-section"
import { TeamSection } from "./team-section"

export default function About() {
  return (
    <MainLayout>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </MainLayout>
  )
}