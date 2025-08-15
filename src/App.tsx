"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Projects } from "./components/sections/Projects"
import { Experience } from "./components/sections/Experience"
import { Contact } from "./components/sections/Contact"
import { FloatingDock } from "./components/navigation/FloatingDock"
import { LoadingScreen } from "./components/ui/LoadingScreen"
import { ResumeProvider, useResume } from "./context/ResumeContext"
import { useScrollSpy } from "./hooks/useScrollSpy"
import { updateDocumentMeta } from "./lib/seo"

const sectionIds = ["hero", "about", "skills", "projects", "experience", "contact"]

const AppContent: React.FC = () => {
  const resumeData = useResume()
  const activeSection = useScrollSpy(sectionIds)
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    updateDocumentMeta(resumeData)
  }, [resumeData])

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowContent(true)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-primary-900 text-white">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <div
        className={`transition-all duration-1000 ${
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
      {!isLoading && activeSection !== "hero" && <FloatingDock activeSection={activeSection} />}
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