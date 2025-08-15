"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useResume } from "../../context/ResumeContext"

export const Hero: React.FC = () => {
  const { name, title, tagline } = useResume()

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-end relative overflow-hidden pr-8 md:pr-16 lg:pr-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="relative z-10 max-w-2xl backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gradient leading-tight text-right"
        >
          {name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-muted mb-8 font-medium text-right"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg text-white/80 leading-relaxed text-right"
        >
          {tagline}
        </motion.p>
      </motion.div>
    </section>
  )
}
