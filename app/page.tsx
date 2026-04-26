import { Hero } from '@/components/landing/Hero'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { SolutionSection } from '@/components/landing/SolutionSection'
import { WhoItsFor } from '@/components/landing/WhoItsFor'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { KitExclusivo } from '@/components/landing/KitExclusivo'
import { AboutKaren } from '@/components/landing/AboutKaren'
import { Pricing } from '@/components/landing/Pricing'
import { FAQ } from '@/components/landing/FAQ'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { Footer } from '@/components/landing/Footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhoItsFor />
      <HowItWorks />
      <KitExclusivo />
      <AboutKaren />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
