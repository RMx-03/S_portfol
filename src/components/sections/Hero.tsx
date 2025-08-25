"use client"

import type React from "react"
import { motion } from "framer-motion" // removed useAnimation since not using now
import { useResume } from "../../context/ResumeContext"
import { useState, useEffect, useRef } from "react"

export const Hero: React.FC = () => {
  const { name, titles, tagline } = useResume()

  const [index, setIndex] = useState(0)

  // For typing tagline
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const mounted = useRef(true)

  // Typing effect for tagline
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let currentIndex = 0

    const typeText = () => {
      if (currentIndex < tagline.length) {
        setDisplayedText(tagline.slice(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeText, 50)
      } else {
        setIsTypingComplete(true)
      }
    }

    timeoutId = setTimeout(typeText, 2000)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [tagline])

  // Simple title rotation (no wipe)
  useEffect(() => {
    mounted.current = true
    const interval = setInterval(() => {
      if (mounted.current) {
        setIndex((prev) => (prev + 1) % titles.length)
      }
    }, 1000) // change every 3s

    return () => {
      mounted.current = false
      clearInterval(interval)
    }
  }, [titles.length])

  // -------------------------------  
  // Keeping for future use but commented out
  /*
  const wipeControls = useAnimation()
  const WIPE_DURATION = 1.2
  const LOOP_DELAY = 0.2

  useEffect(() => {
    mounted.current = true

    const run = async () => {
      while (mounted.current) {
        await wipeControls.start({
          scaleX: 1,
          transition: { duration: WIPE_DURATION, ease: [0.65, 0, 0.35, 1] },
        })

        setIndex((prev) => (prev + 1) % titles.length)

        if (LOOP_DELAY > 0) {
          await new Promise((r) => setTimeout(r, LOOP_DELAY * 1000))
        }

        await wipeControls.start({
          scaleX: 0,
          transition: { duration: WIPE_DURATION, ease: [0.65, 0, 0.35, 1] },
        })

        if (LOOP_DELAY > 0) {
          await new Promise((r) => setTimeout(r, LOOP_DELAY * 1000))
        }
      }
    }

    wipeControls.set({ scaleX: 0 })
    run()

    return () => {
      mounted.current = false
    }
  }, [titles.length])
  */
  // -------------------------------

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="relative z-10 max-w-2xl backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col items-center text-center"
      >
        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="sofiasans text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-gradient text-muted leading-tight"
        >
          Hey there, I'm <span className="prata text-4xl md:text-6xl lg:text-7xl text-white">{name}</span>
        </motion.h1>

        {/* DESIGNATION (simple change, wipe commented) */}
        <div className="h-10 md:h-12 lg:h-14 flex items-center justify-center cursor-target cursor-none" data-label="Designation">
          <div className="relative inline-flex items-center justify-center overflow-hidden">
            <span className="sofiasans text-lg md:text-xl lg:text-2xl text-muted font-medium relative z-0 select-none min-w-[280px] text-center">
              {titles[index]}
            </span>

            {/* White rectangle wipe (disabled) */}
            {/*
            <motion.span
              aria-hidden
              className="absolute left-0 top-0 h-full bg-white z-10 pointer-events-none origin-left"
              style={{ width: "280px", scaleX: 0 }}
              animate={wipeControls}
            />
            */}
          </div>
        </div>
      </motion.div>

      {/* Typing Box (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
        className="absolute bottom-4 right-2 md:right-4 z-40 max-w-xs md:max-w-sm cursor-target cursor-none"
        data-label="Tagline"
      >
        <div className="bg-white p-4 shadow-lg">
          <p className="prata text-sm text-gray-800 leading-relaxed">
            {displayedText}
            {!isTypingComplete && <span className="animate-pulse text-black text-lg font-bold">|</span>}
          </p>
        </div>
      </motion.div>

      {/* Scroll Indicator (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute top-4 right-2 md:right-4 z-40 flex flex-row items-center justify-center bg-white px-2 py-3 shadow-lg select-none cursor-target cursor-none"
        aria-hidden
        data-label="more"
      >
        {/* Vertical label */}
        <span className="sofiasans text-xm tracking-widest rotate-180 [writing-mode:vertical-rl] text-gray-800">
          SCROLL
        </span>
        
        {/* Line animation */}
        <div className="w-2 h-16 text-gray-800 ml-0.5">
          <svg 
            viewBox="0 0 10 64" 
            width="100%" 
            height="100%" 
            fill="none" 
            stroke="currentColor"
          >
            <motion.path
              d="M5 2 L5 54"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ 
                duration: 2.5, 
                times: [0, 0.6, 1], 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
