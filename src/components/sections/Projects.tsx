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
  const RADIUS = 280

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
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
      </motion.div>

      {/* 3D Carousel */}
      <div className="relative flex h-[560px] items-center justify-center md:h-[620px] w-full max-w-6xl mx-auto">
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
                  {/* Flat inner layer for clickable content */}
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl ${
                      isFront ? "ring-2 ring-accent shadow-lime-400/80" : ""
                    }`}
                    style={{
                      width: "min(80vw, 280px)",
                      height: "min(100vw, 400px)",
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
                    <div className="relative z-10 flex h-[calc(100%-8rem)] md:h-[calc(100%-9rem)] flex-col gap-2 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-bold text-white md:text-base leading-tight flex-1 pr-2">
                          {proj.name}
                        </h3>
                        <div className="flex gap-1.5 relative z-50 pointer-events-auto">
                          {proj.repo && proj.repo !== "#" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(proj.repo, "_blank")
                              }}
                              className="rounded-lg bg-white/10 p-1.5 hover:bg-white/20 hover:scale-105"
                              title="View Repository"
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

                      <p className="text-xs leading-relaxed text-white/80 line-clamp-2">
                        {proj.summary}
                      </p>

                      <div className="space-y-1">
                        {proj.highlights.slice(0, 2).map((h, k) => (
                          <div key={k} className="flex items-start gap-1.5 text-xs text-white/70">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-green-600" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap gap-1">
                        {proj.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-xs text-white/80"
                          >
                            {t.length > 8 ? t.substring(0, 8) + "..." : t}
                          </span>
                        ))}
                        {proj.tech.length > 4 && (
                          <span className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-xs text-white/80">
                            +{proj.tech.length - 4}
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
          className="absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 backdrop-blur-sm hover:scale-110 hover:bg-black/70"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          aria-label="Next project"
          onClick={stepRight}
          className="absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-3 backdrop-blur-sm hover:scale-110 hover:bg-black/70"
        >
          <ChevronRight size={24} className="text-white" />
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
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                isActive ? "scale-125 bg-accent" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          )
        })}
      </div>
    </section>
  )
}
