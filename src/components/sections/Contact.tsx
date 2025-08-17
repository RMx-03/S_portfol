import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react'; // added Phone
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useResume } from '../../context/ResumeContext';
import { useForm, ValidationError } from '@formspree/react';

export const Contact: React.FC = () => {
  const { email, phone, links } = useResume(); // ✅ added phone
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID as string);

  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', href: links.github },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: links.linkedin },
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
          <h2 className="prata text-4xl md:text-5xl font-display font-bold mb-6 accent-gradient">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="delius text-xl text-white/80 max-w-2xl mx-auto">
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
              <h3 className="sofiasans text-xl font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="delius space-y-4 mb-8">
                {/* Email */}
                <motion.a
                  href={`mailto:${email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary-700 hover:bg-primary-600 transition-colors"
                >
                  <Mail size={20} className="text-accent" />
                  <span className="text-white">{email}</span>
                </motion.a>

                {/* Phone (NEW) */}
                <motion.a
                  href={`tel:${phone}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary-700 hover:bg-primary-600 transition-colors"
                >
                  <Phone size={20} className="text-accent" />
                  <span className="text-white">{phone}</span>
                </motion.a>
              </div>
              
              <div className="space-y-3">
                <h4 className="sofiasans text-sm font-medium text-muted uppercase tracking-wider">
                  Connect With Me
                </h4>
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="delius flex items-center gap-3 p-3 rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    <span className="text-accent">{link.icon}</span>
                    <span className="text-white">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right side (form) remains unchanged */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <h3 className="sofiasans text-xl font-semibold text-white mb-6">Quick Message</h3>
              
              {state.succeeded ? (
                <p className="delius text-lime-400 text-center">Thanks for your message! I'll get back to you soon.</p>
              ) : (
                <form className="delius space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full p-3 bg-primary-700 border border-gray-600 rounded-xl text-white placeholder-muted focus:border-accent focus:outline-none transition-colors"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full p-3 bg-primary-700 border border-gray-600 rounded-xl text-white placeholder-muted focus:border-accent focus:outline-none transition-colors"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="w-full p-3 bg-primary-700 border border-gray-600 rounded-xl text-white placeholder-muted focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  
                  <Button type="submit" className="sofiasans w-full cursor-target cursor-none" disabled={state.submitting}>
                    <Send size={16} className="mr-2" />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
