import React from 'react';
import { motion } from 'framer-motion';
import { Chip } from '../ui/Chip';
import { useResume } from '../../context/ResumeContext';

export const Skills: React.FC = () => {
  const { skills } = useResume();

  const skillCategories = [
    { title: 'Core Technologies', skills: skills.core, variant: 'accent' as const },
    { title: 'Tools & Platforms', skills: skills.tools, variant: 'default' as const },
    { title: 'Soft Skills', skills: skills.soft, variant: 'default' as const }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-primary-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="prata text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="sofiasans text-xl font-semibold text-white text-center mb-6">
                {category.title}
              </h3>
              <div className="delius flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.05 
                    }}
                  >
                    <Chip variant={category.variant}>
                      {skill}
                    </Chip>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};