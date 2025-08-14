import React, { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { FloatingDock } from './components/navigation/FloatingDock';
import { ResumeProvider, useResume } from './context/ResumeContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import { updateDocumentMeta } from './lib/seo';

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

const AppContent: React.FC = () => {
  const resumeData = useResume();
  const activeSection = useScrollSpy(sectionIds);
  
  useEffect(() => {
    updateDocumentMeta(resumeData);
  }, [resumeData]);

  return (
    <div className="min-h-screen bg-primary-900 text-white">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {activeSection !== "hero" && <FloatingDock activeSection={activeSection} />}
    </div>
  );
};

function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  );
}

export default App;