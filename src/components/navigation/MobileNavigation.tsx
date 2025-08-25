"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Code2, FolderOpen, Briefcase, Mail } from "lucide-react"

interface MobileNavigationProps {
  activeSection: string
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close menu after navigation
    }
  }

  const navigationItems = [
    { id: "hero", label: "Home", icon: <Home size={20} />, action: () => scrollToSection("hero") },
    { id: "about", label: "About", icon: <User size={20} />, action: () => scrollToSection("about") },
    { id: "skills", label: "Skills", icon: <Code2 size={20} />, action: () => scrollToSection("skills") },
    { id: "projects", label: "Projects", icon: <FolderOpen size={20} />, action: () => scrollToSection("projects") },
    { id: "experience", label: "Experience", icon: <Briefcase size={20} />, action: () => scrollToSection("experience") },
    { id: "contact", label: "Contact", icon: <Mail size={20} />, action: () => scrollToSection("contact") },
  ]

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white border border-gray-200 p-3 shadow-2xl cursor-target cursor-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-label="Menu"
      >
        {isOpen ? <X size={20} className="text-black" /> : <Menu size={20} className="text-black" />}
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Navigation Menu */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-xl border-r border-white/10 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="prata text-xl font-bold text-white">Navigation</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X size={20} className="text-white/70" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 py-6">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={item.action}
                      className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-all duration-200 cursor-target cursor-none ${
                        activeSection === item.id
                          ? "bg-accent/20 text-accent border-r-2 border-accent"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                      data-label={item.label}
                    >
                      <div className={`${activeSection === item.id ? "text-accent" : ""}`}>
                        {item.icon}
                      </div>
                      <span className="sofiasans font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </nav>                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
