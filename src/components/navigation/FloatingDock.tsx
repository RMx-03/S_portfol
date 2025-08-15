"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Code2, FolderOpen, Briefcase, Mail } from "lucide-react"

interface DockItem {
  id: string
  label: string
  icon: React.ReactNode
  action: () => void
}

interface FloatingDockProps {
  activeSection: string
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ activeSection }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const dockItems: DockItem[] = [
    { id: "hero", label: "Home", icon: <Home size={20} />, action: () => scrollToSection("hero") },
    { id: "about", label: "About", icon: <User size={20} />, action: () => scrollToSection("about") },
    { id: "skills", label: "Skills", icon: <Code2 size={20} />, action: () => scrollToSection("skills") },
    { id: "projects", label: "Projects", icon: <FolderOpen size={20} />, action: () => scrollToSection("projects") },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase size={20} />,
      action: () => scrollToSection("experience"),
    },
    { id: "contact", label: "Contact", icon: <Mail size={20} />, action: () => scrollToSection("contact") },
  ]

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="flex flex-col items-center gap-1 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-4 shadow-2xl"
      >
        {dockItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={item.action}
            className="cursor-target cursor-none relative flex items-center justify-center p-3 rounded-xl transition-all duration-200 text-white/70 hover:text-white hover:bg-white/10"
            data-label={item.label}
          >
            {activeSection === item.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-accent/70 to-accent/100 rounded-xl blur-sm"
                style={{
                  boxShadow:
                    "0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6), inset 0 0 20px rgba(34, 197, 94, 0.4)",
                }}
              />
            )}

            {activeSection === item.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-green-400/20 rounded-xl"
                style={{
                  boxShadow: "0 0 10px rgba(34, 197, 94, 0.8), inset 0 0 10px rgba(34, 197, 94, 0.3)",
                }}
              />
            )}

            <div
              className={`relative z-10 transition-colors duration-200 ${
                activeSection === item.id ? "text-white" : ""
              }`}
            >
              {item.icon}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              whileHover={{ opacity: 1, x: -8, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap pointer-events-none border border-white/10"
            >
              {item.label}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-black/80" />
            </motion.div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
