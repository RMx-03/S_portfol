import React from 'react';
import { motion } from 'framer-motion';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    default: 'bg-primary-700 text-muted border-primary-600',
    accent: 'bg-accent/10 text-accent border-accent/30'
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
};