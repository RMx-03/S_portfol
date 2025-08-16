"use client"

import type React from "react"
import { motion } from "framer-motion"

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* This div is the solid black background that will be masked */}
      <div
        className="absolute inset-0 bg-black z-0"
        style={{
          // This mask now correctly defines the lines as the transparent part
          WebkitMaskImage: `
            repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 20px),
            repeating-linear-gradient(to bottom, transparent 0, transparent 1px, black 1px, black 20px)
          `,
          maskImage: `
            repeating-linear-gradient(to right, transparent 0, transparent 1px, black 1px, black 20px),
            repeating-linear-gradient(to bottom, transparent 0, transparent 1px, black 1px, black 20px)
          `,
          // The size of the repeating grid pattern
          WebkitMaskSize: "20px 20px",
          maskSize: "20px 20px",
        }}
      />

      {/* All of your content is placed in a separate container with a higher z-index */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="plaster text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">About Me</h2>
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-white/90 leading-relaxed text-lg">
                I am a B.Tech student specializing in Artificial Intelligence at Sage University Indore, with a passion
                for AI/ML, web development, and data analysis. My academic journey has equipped me with expertise in
                technologies like React.js, Node.js, OpenCV, and Scikit-learn, alongside a solid understanding of
                machine learning algorithms and exploratory data analysis techniques.
              </p>

              <p className="text-white/90 leading-relaxed text-lg">
                Currently, I serve as an AI/ML Engineer at SETV Global and a Prompt Engineer at Outlier, where I apply
                my skills in NLP, Computer Vision, and AI-driven solutions. Previously, I interned at CodSoft and
                COSMIC365.AI, gaining hands-on experience in artificial intelligence and web development.
              </p>

              <p className="text-white/90 leading-relaxed text-lg">
                My goal is to bridge the gap between technology and impactful real-world applications. With a strong
                technical foundation and a drive for innovation, I aim to contribute meaningfully to the advancement of
                AI and related fields.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/ai-developer.jpg"
                alt="AI and Machine Learning Development"
                className="rounded-2xl shadow-2xl border border-white/10 cursor-target pointer-events-auto"
                data-label="Me"
                style={{ pointerEvents: "auto" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
