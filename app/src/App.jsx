import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import {
  AboutSection,
  IndustriesSection,
  ProcessSection,
  ServicesSection,
  VisionMissionSection,
  WhyChooseSection,
} from './components/Sections'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <VisionMissionSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyChooseSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  )
}

export default App
