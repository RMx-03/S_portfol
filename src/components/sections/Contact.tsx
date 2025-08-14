import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useResume } from '../../context/ResumeContext';

export const Contact: React.FC = () => {
  const { email, links } = useResume();

  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', href: links.github },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: links.linkedin },
    { icon: <ExternalLink size={20} />, label: 'Portfolio', href: links.website },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Interested in collaborating on AI projects or discussing innovative solutions? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <motion.a
                  href={`mailto:${email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary-700 hover:bg-primary-600 transition-colors"
                >
                  <Mail size={20} className="text-accent" />
                  <span className="text-white">{email}</span>
                </motion.a>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted uppercase tracking-wider">
                  Connect With Me
                </h4>
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    <span className="text-accent">{link.icon}</span>
                    <span className="text-white">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <h3 className="text-xl font-semibold text-white mb-6">Quick Message</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-xl text-white placeholder-muted focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-xl text-white placeholder-muted focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 bg-primary-700 border border-primary-600 rounded-xl text-white placeholder-muted focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
              
              <p className="text-xs text-muted mt-4 text-center">
                This is a demo form. Configure with your preferred service.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};