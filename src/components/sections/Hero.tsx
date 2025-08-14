import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { useResume } from '../../context/ResumeContext';

export const Hero: React.FC = () => {
  const { name, title, tagline, links } = useResume();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-noise">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-radial animate-pulse" />
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/3 rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-gradient leading-tight"
        >
          {name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted mb-8 font-medium"
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button onClick={scrollToProjects} size="lg">
            View Projects
            <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button variant="secondary" onClick={scrollToContact} size="lg">
            Contact Me
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-card border border-primary-700 text-muted hover:text-accent hover:border-accent transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-card border border-primary-700 text-muted hover:text-accent hover:border-accent transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-card border border-primary-700 text-muted hover:text-accent hover:border-accent transition-colors"
          >
            <ExternalLink size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};