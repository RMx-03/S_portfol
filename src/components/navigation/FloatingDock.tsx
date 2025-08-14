import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, FolderOpen, Briefcase, Mail } from 'lucide-react';

interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

interface FloatingDockProps {
  activeSection: string;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ activeSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems: DockItem[] = [
    { id: 'hero', label: 'Home', icon: <Home size={20} />, action: () => scrollToSection('hero') },
    { id: 'about', label: 'About', icon: <User size={20} />, action: () => scrollToSection('about') },
    { id: 'skills', label: 'Skills', icon: <Code2 size={20} />, action: () => scrollToSection('skills') },
    { id: 'projects', label: 'Projects', icon: <FolderOpen size={20} />, action: () => scrollToSection('projects') },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} />, action: () => scrollToSection('experience') },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} />, action: () => scrollToSection('contact') },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="flex items-center gap-1 bg-card/90 backdrop-blur-md border border-primary-700 rounded-full px-2 py-2 shadow-2xl"
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
            className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-200 ${
              activeSection === item.id 
                ? 'bg-accent text-primary-900 shadow-lg' 
                : 'text-muted hover:text-white hover:bg-primary-700'
            }`}
          >
            {item.icon}
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              whileHover={{ opacity: 1, y: -8, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full mb-2 px-2 py-1 bg-primary-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none"
            >
              {item.label}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary-800" />
            </motion.div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};