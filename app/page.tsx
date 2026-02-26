import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Differentials } from "@/components/differentials"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="bg-[#000000] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Marquee />
      <Differentials />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
