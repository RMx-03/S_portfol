import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { Chip } from '../ui/Chip';
import { Button } from '../ui/Button';
import { useResume } from '../../context/ResumeContext';

export const Projects: React.FC = () => {
  const { projects } = useResume();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-white/70">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Chip key={tech} variant="default">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6 pt-4 border-t border-primary-700">
                  {project.repo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.repo, '_blank')}
                      className="flex-1"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};