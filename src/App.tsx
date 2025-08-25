"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Projects } from "./components/sections/Projects"
import { Experience } from "./components/sections/Experience"
import { Contact } from "./components/sections/Contact"
import { FloatingDock } from "./components/navigation/FloatingDock"
import { MobileNavigation } from "./components/navigation/MobileNavigation"
import { LoadingScreen } from "./components/ui/LoadingScreen"
import FloatingLogo from "./components/ui/FloatingLogo"
import TargetCursor from "./components/ui/TargetCursor"
import { ResumeProvider, useResume } from "./context/ResumeContext"
import { useScrollSpy } from "./hooks/useScrollSpy"
import { updateDocumentMeta } from "./lib/seo"

declare global {
  interface Window {
    VANTA: any
  }
}

const sectionIds = ["hero", "about", "skills", "projects", "experience", "contact"]

const AppContent: React.FC = () => {
  const resumeData = useResume()
  const activeSection = useScrollSpy(sectionIds)
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const vantaRef = useRef(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    // Force scroll to top on initial load
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  useEffect(() => {
    updateDocumentMeta(resumeData)
  }, [resumeData])

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  useEffect(() => {
    if (window.VANTA && vantaRef.current && !vantaEffect.current && !isLoading) {
      vantaEffect.current = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x130a05,
        midtoneColor: 0xa72c,
        lowlightColor: 0x5891f,
        baseColor: 0x141424,
        blurFactor: 0.45,
        speed: 1.5,
        zoom: 0.8,
      })
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowContent(true)
    }, 500)
  }

  const scrollToHero = () => {
    const element = document.getElementById("hero")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-primary-900 text-white relative">
      {/* Fixed background that covers entire viewport */}
      <div ref={vantaRef} className="fixed inset-0 w-full h-full z-0" />

      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} />

      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <FloatingLogo isVisible={!isLoading} onLogoClick={scrollToHero} />

      <div
        className={`relative z-10 transition-all duration-1000 ${
          showContent ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
        }`}
      >
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
      {!isLoading && activeSection !== "hero" && (
        <div className="hidden lg:block">
          <FloatingDock activeSection={activeSection} />
        </div>
      )}
      {!isLoading && activeSection !== "hero" && <MobileNavigation activeSection={activeSection} />}
    </div>
  )
}

function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  )
}

export default App
