"use client"

import type React from "react"
import { motion } from "framer-motion"

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">About Me</h2>
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
                className="rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
