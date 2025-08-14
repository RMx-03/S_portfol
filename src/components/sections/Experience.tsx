import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';
import { Chip } from '../ui/Chip';
import { useResume } from '../../context/ResumeContext';

export const Experience: React.FC = () => {
  const { experience } = useResume();

  return (
    <section id="experience" className="py-24 px-6 bg-primary-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">
            Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-700 hidden md:block" />
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-primary-900 hidden md:block" />
                
                <div className="md:ml-16">
                  <Card>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Calendar size={14} />
                          {exp.start} - {exp.end}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-lg font-medium text-accent">
                          {exp.company}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-white/80">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tech.map((tech) => (
                          <Chip key={tech} variant="default">
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};