"use client"

import type React from "react"
import { Github, Linkedin } from "lucide-react"

interface FloatingLogoProps {
  isVisible: boolean
  onLogoClick: () => void
}

const FloatingLogo: React.FC<FloatingLogoProps> = ({ isVisible, onLogoClick }) => {
  if (!isVisible) return null

  return (
    <>
      {/* Main Logo Box */}
      <div className="fixed top-4 left-4 z-50 transition-all duration-1000 opacity-100 translate-y-0 animate-in fade-in slide-in-from-top-4">
        <button
          onClick={onLogoClick}
          className="bg-white p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <img src="/sv-logo.png" alt="SV Logo" className="w-8 h-8 object-contain" />
        </button>
      </div>

      {/* Social Media Box */}
      <div className="fixed bottom-4 left-4 z-50 transition-all duration-1000 delay-500 opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-4">
        <div className="bg-white p-2 shadow-lg flex flex-col gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 transition-colors duration-200 rounded-sm group"
          >
            <Github className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 transition-colors duration-200 rounded-sm group"
          >
            <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>
    </>
  )
}

export default FloatingLogo
