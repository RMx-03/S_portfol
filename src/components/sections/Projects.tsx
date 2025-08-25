"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useResume } from "../../context/ResumeContext"

export const Projects: React.FC = () => {
  const { projects } = useResume()

  const TOTAL = 5
  const ANGLE = 360 / TOTAL
  const RADIUS = 360

  const [rotation, setRotation] = useState(0)

  const stepLeft = () => setRotation((prev) => prev + ANGLE)
  const stepRight = () => setRotation((prev) => prev - ANGLE)

  const images = [
    "/AI Recommendation system.png",
    "/Data Extraction and Sentiment analysis og.png",
    "/Document chat RAG application.png",
    "/Fetus location and organ detection.png",
    "/AI Research agent using Langgraph.png",
  ]

  const frontIndex = useMemo(() => {
    const idx = Math.round(-rotation / ANGLE) % TOTAL
    return (idx + TOTAL) % TOTAL
  }, [rotation])

  return (
    <section id="projects" className="relative py-24 px-6">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h2 className="prata text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
      </motion.div>

      {/* Desktop 3D Carousel */}
      <div className="hidden md:flex relative h-[620px] items-center justify-center w-full max-w-6xl mx-auto overflow-hidden">
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            perspective: "1400px",
            perspectiveOrigin: "50% 50%"
          }}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {Array.from({ length: TOTAL }).map((_, i) => {
              const proj = projects?.[i] ?? {
                name: `Project ${i + 1}`,
                summary: "An innovative project showcasing cutting-edge technology and modern development practices.",
                highlights: ["Modern UI/UX", "Responsive Design", "Performance Optimized"],
                tech: ["React", "TypeScript", "Node.js", "MongoDB"],
                repo: "#",
                live: "#",
              }

              const angleDeg = i * ANGLE + rotation
              const angleRad = (angleDeg * Math.PI) / 180
              const x = Math.sin(angleRad) * RADIUS
              const z = Math.cos(angleRad) * RADIUS

              const faceAngle = -angleDeg
              const depth = (z + RADIUS) / (2 * RADIUS)
              const scale = 0.85 + depth * 0.15
              const opacity = 0.5 + depth * 0.5
              const isFront = i === frontIndex

              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `translate(-50%, -50%) translate3d(${x}px, 0px, ${z}px) rotateY(${faceAngle}deg) scale(${scale})`,
                    opacity,
                    transition: `transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease`,
                    pointerEvents: isFront ? "auto" : "none",
                    zIndex: isFront ? 10 : 0
                  }}
                >
                  {/* Neon glow effect for front card */}
                  {isFront && (
                    <>
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent/60 to-green-400/60 rounded-2xl blur-md opacity-75 animate-pulse" />
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-green-400/40 rounded-2xl blur-sm opacity-90" />
                    </>
                  )}
                  
                  {/* Flat inner layer for clickable content */}
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-black shadow-lg ${
                      isFront ? "ring-2 ring-accent/60 shadow-accent/50" : ""
                    }`}
                    style={{
                      width: "min(70vw, 280px)",
                      height: "min(90vw, 400px)",
                      position: "relative",
                      zIndex: 50,
                      pointerEvents: "auto"
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-32 md:h-36">
                      <img
                        src={images[i] || "/placeholder.svg"}
                        alt={proj.name}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex h-[calc(100%-8rem)] md:h-[calc(100%-9rem)] flex-col gap-2 p-4 md:p-4">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="delius text-sm font-bold text-white md:text-sm leading-tight flex-1 pr-1">
                          {proj.name}
                        </h3>
                        <div className="flex gap-1.5 relative z-50 pointer-events-auto">
                          {proj.repo && proj.repo !== "#" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(proj.repo, "_blank")
                              }}
                              className="cursor-target cursor-none rounded-lg bg-white/10 p-1.5 hover:bg-white/20 hover:scale-105"
                              data-label="View Repository"
                            >
                              <Github size={14} />
                            </button>
                          )}
                          {proj.live && proj.live !== "#" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(proj.live, "_blank")
                              }}
                              className="rounded-lg bg-lime-500/20 p-1.5 hover:bg-lime-500/30 hover:scale-105"
                              title="View Live Demo"
                            >
                              <ExternalLink size={14} className="text-lime-400" />
                            </button>
                          )}
                        </div>
                      </div>

                      <p className="sofiasans text-xs leading-snug text-white/80">
                        {proj.summary}
                      </p>

                      <div className="sofiasans space-y-1">
                        {proj.highlights.slice(0, 2).map((h, k) => (
                          <div key={k} className="flex items-start gap-1.5 text-xs text-white/70">
                            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-green-600" />
                            <span className="">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="sofiasans mt-auto flex flex-wrap gap-1">
                        {proj.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/20 bg-white/10 px-1.5 py-0.5 text-xs text-white/80"
                          >
                            {t.length > 6 ? t.substring(0, 6) + "..." : t}
                          </span>
                        ))}
                        {proj.tech.length > 3 && (
                          <span className="rounded-md border border-white/20 bg-white/10 px-1.5 py-0.5 text-xs text-white/80">
                            +{proj.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Controls */}
        <button
          aria-label="Previous project"
          onClick={stepLeft}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 sm:p-3 backdrop-blur-sm hover:scale-110 hover:bg-black/70 cursor-target cursor-none"
          data-label="Left"
        >
          <ChevronLeft size={20} className="text-white sm:w-6 sm:h-6" />
        </button>
        <button
          aria-label="Next project"
          onClick={stepRight}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 sm:p-3 backdrop-blur-sm hover:scale-110 hover:bg-black/70 cursor-target cursor-none"
          data-label="Right"
        >
          <ChevronRight size={20} className="text-white sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: TOTAL }).map((_, i) => {
          const isActive = i === frontIndex
          return (
            <button
              key={i}
              onClick={() => setRotation(-i * ANGLE)}
              className={`cursor-target cursor-none h-3 w-3 rounded-full transition-all duration-300 ${
                isActive ? "scale-125 bg-accent" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          )
        })}
      </div>

      {/* Mobile Cards with Neon Glow and Swipe */}
      <div className="md:hidden relative w-full px-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {projects?.map((proj, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-80 snap-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="relative group">
                {/* Always visible neon glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 to-green-400/40 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/60 to-green-400/60 rounded-2xl blur-sm opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Card content */}
                <div className="relative bg-black/90 backdrop-blur-sm border border-accent/30 rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-40 mb-4 overflow-hidden">
                    <img
                      src={images[i] || "/placeholder.svg"}
                      alt={proj.name}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project name and actions */}
                  <div className="flex items-start justify-between gap-2 mb-3 px-6 pt-4">
                    <h3 className="delius text-lg font-bold text-white leading-tight flex-1">
                      {proj.name}
                    </h3>
                    <div className="flex gap-2">
                      {proj.repo && proj.repo !== "#" && (
                        <button
                          onClick={() => window.open(proj.repo, "_blank")}
                          className="cursor-target cursor-none rounded-lg bg-white/10 p-2 hover:bg-white/20 hover:scale-105 transition-all"
                          data-label="View Repository"
                        >
                          <Github size={16} />
                        </button>
                      )}
                      {proj.live && proj.live !== "#" && (
                        <button
                          onClick={() => window.open(proj.live, "_blank")}
                          className="rounded-lg bg-accent/20 p-2 hover:bg-accent/30 hover:scale-105 transition-all"
                          title="View Live Demo"
                        >
                          <ExternalLink size={16} className="text-accent" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="sofiasans text-sm leading-relaxed text-white/80 mb-4 px-6">
                    {proj.summary}
                  </p>

                  {/* Highlights */}
                  <div className="sofiasans space-y-2 mb-4 px-6">
                    {proj.highlights.slice(0, 3).map((h, k) => (
                      <div key={k} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="sofiasans flex flex-wrap gap-2 px-6 pb-6">
                    {proj.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent"
                      >
                        {t.length > 10 ? t.substring(0, 10) + "..." : t}
                      </span>
                    ))}
                    {proj.tech.length > 4 && (
                      <span className="rounded-md border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
                        +{proj.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )) || Array.from({ length: TOTAL }).map((_, i) => {
            const proj = {
              name: `Project ${i + 1}`,
              summary: "An innovative project showcasing cutting-edge technology and modern development practices.",
              highlights: ["Modern UI/UX", "Responsive Design", "Performance Optimized"],
              tech: ["React", "TypeScript", "Node.js", "MongoDB"],
              repo: "#",
              live: "#",
            }
            
            return (
              <motion.div
                key={i}
                className="flex-shrink-0 w-80 snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative group">
                  {/* Always visible neon glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 to-green-400/40 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/60 to-green-400/60 rounded-2xl blur-sm opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="relative bg-black/90 backdrop-blur-sm border border-accent/30 rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-300">
                    <div className="relative h-40 mb-4 overflow-hidden">
                      <img
                        src={images[i] || "/placeholder.svg"}
                        alt={proj.name}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="flex items-start justify-between gap-2 mb-3 px-6 pt-4">
                      <h3 className="delius text-lg font-bold text-white leading-tight flex-1">
                        {proj.name}
                      </h3>
                      <div className="flex gap-2">
                        <button className="cursor-target cursor-none rounded-lg bg-white/10 p-2 hover:bg-white/20 hover:scale-105 transition-all">
                          <Github size={16} />
                        </button>
                        <button className="rounded-lg bg-accent/20 p-2 hover:bg-accent/30 hover:scale-105 transition-all">
                          <ExternalLink size={16} className="text-accent" />
                        </button>
                      </div>
                    </div>

                    <p className="sofiasans text-sm leading-relaxed text-white/80 mb-4 px-6">
                      {proj.summary}
                    </p>

                    <div className="sofiasans space-y-2 mb-4 px-6">
                      {proj.highlights.slice(0, 3).map((h, k) => (
                        <div key={k} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="sofiasans flex flex-wrap gap-2 px-6 pb-6">
                      {proj.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent"
                        >
                          {t.length > 10 ? t.substring(0, 10) + "..." : t}
                        </span>
                      ))}
                      {proj.tech.length > 4 && (
                        <span className="rounded-md border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
                          +{proj.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Scroll indicator for mobile */}
        <div className="flex flex-col items-center mt-6 space-y-4">
          <p className="sofiasans text-sm text-white">← Swipe to explore projects →</p>
          
          {/* Mobile dots indicator */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: projects?.length || TOTAL }).map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-white/30 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
