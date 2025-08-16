"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import { useResume } from "../../context/ResumeContext"

export const Experience: React.FC = () => {
  const { experience } = useResume()
  const N = experience.length
  const sectionRef = useRef<HTMLDivElement>(null)

  // Scroll progress across the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // Translate the horizontal row by viewport widths
  const x = useTransform(scrollYProgress, [0, 1], [0, -(N - 1) * 100])

  // Progress line width (0% → 100%)
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Active dot / card index
  const [activeIndex, setActiveIndex] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(Math.max(Math.round(v * (N - 1)), 0), N - 1)
    if (i !== activeIndex) setActiveIndex(i)
  })

  // Click dots to jump to a specific card
  const jumpToIndex = (i: number) => {
    if (!sectionRef.current) return
    const sectionTop = sectionRef.current.offsetTop
    const sectionHeight = sectionRef.current.offsetHeight
    const viewportHeight = window.innerHeight
    const scrollableHeight = sectionHeight - viewportHeight
    const targetScroll = sectionTop + (i / (N - 1)) * scrollableHeight
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ height: `${N * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport that stays while we scroll through the cards */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-black z-0"
          style={{
            WebkitMaskImage: `
              repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 20px),
              repeating-linear-gradient(to bottom, transparent 0, transparent 1px, black 1px, black 20px)
            `,
            maskImage: `
              repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 20px),
              repeating-linear-gradient(to bottom, transparent 0, transparent 1px, black 1px, black 20px)
            `,
            WebkitMaskSize: "20px 20px",
            maskSize: "20px 20px",
          }}
        />

        {/* Fixed header section */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left mb-8"
          >
            <h2 className="text-4xl md:text-5xl pt-8 font-display font-bold mb-6 accent-gradient">Experience</h2>
            <motion.svg
              width="120"
              height="20"
              viewBox="0 0 120 20"
              className="text-accent"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.path
                d="M5 15 Q 30 5, 60 12 T 115 8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.svg>
          </motion.div>

          <div className="relative mb-2 pt-8">
            {/* Track line */}
            <div className="h-1 bg-white/15 rounded-full" />
            {/* Fill line */}
            <motion.div
              className="absolute left-0 top-8 h-1 bg-lime-400 rounded-full origin-left"
              style={{ width: fillWidth }}
            />
            {/* Dots */}
            <div className="relative -mt-2 flex items-center justify-between">
              {experience.map((_, i) => {
                const isActive = i === activeIndex
                const passed = i < activeIndex
                return (
                  <button
                    key={i}
                    onClick={() => jumpToIndex(i)}
                    className="relative -translate-y-1 outline-none cursor-target"
                    data-label={`Experience ${i + 1}`}
                    aria-label={`Go to experience ${i + 1}`}
                  >
                    <span
                      className={[
                        "block w-5 h-5 rounded-full border-2 transition-all duration-300",
                        isActive
                          ? "bg-lime-400 border-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.6)] scale-110"
                          : passed
                            ? "bg-lime-400 border-lime-400/50"
                            : "bg-transparent border-white/30 hover:border-lime-400/50",
                      ].join(" ")}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Cards container with proper positioning */}
        <div className="relative z-10 flex-1 min-h-0">
          <div className="flex items-start h-full pt-10 pb-16">
            <motion.div 
              className="flex"
              style={{ 
                x: useTransform(x, (value) => `${value}vw`),
                width: `${N * 100}vw` 
              }}
            >
              {experience.map((exp, i) => {
                const isActive = i === activeIndex
                return (
                  <div key={`${exp.company}-${i}`} className="w-screen flex items-center justify-center px-6 flex-shrink-0">
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.95,
                        opacity: isActive ? 1 : 0.6,
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 120, 
                        damping: 18,
                        duration: 0.6
                      }}
                      className="w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-2xl"
                    >
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                            <h4 className="text-xl text-lime-400 font-semibold">{exp.company}</h4>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/70">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              {exp.start} - {exp.end}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {exp.achievements.map((a, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 16 }}
                              animate={{ 
                                opacity: isActive ? 1 : 0.6, 
                                x: isActive ? 0 : 16 
                              }}
                              transition={{ 
                                delay: isActive ? 0.05 * idx : 0,
                                duration: 0.5 
                              }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-white/85 leading-relaxed">{a}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {exp.tech.map((t, idx) => (
                            <motion.span
                              key={t}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ 
                                opacity: isActive ? 1 : 0.6, 
                                scale: isActive ? 1 : 0.9 
                              }}
                              transition={{ 
                                delay: isActive ? 0.03 * idx : 0,
                                duration: 0.4 
                              }}
                              className="px-3 py-1 bg-lime-400/10 border border-lime-400/20 rounded-full text-sm text-lime-400"
                            >
                              {t}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>        
      </div>
    </section>
  )
}
