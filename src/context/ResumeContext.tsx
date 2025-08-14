import React, { createContext, useContext } from 'react';
import { ResumeData, resumeData } from '../data/resume';

const ResumeContext = createContext<ResumeData>(resumeData);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

interface ResumeProviderProps {
  children: React.ReactNode;
}

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  return (
    <ResumeContext.Provider value={resumeData}>
      {children}
    </ResumeContext.Provider>
  );
};