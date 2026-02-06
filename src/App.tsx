import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import ContactSection from './components/sections/ContactSection'
import ExperienceSection from './components/sections/ExperienceSection'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <ThreeBackground />
      </div>

      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24 sm:px-6">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
