import { ResumeData } from '../data/resume';

export const generateMetadata = (resumeData: ResumeData) => {
  return {
    title: `${resumeData.name} - ${resumeData.title}`,
    description: resumeData.tagline,
    keywords: [
      resumeData.name,
      ...resumeData.title.split(' '),
      ...resumeData.skills.core,
      'portfolio',
      'developer',
      'AI',
      'machine learning'
    ].join(', '),
  };
};

export const generateJsonLd = (resumeData: ResumeData) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": resumeData.name,
    "jobTitle": resumeData.title,
    "description": resumeData.about.summary,
    "email": resumeData.email,
    "url": resumeData.links.website,
    "sameAs": [
      resumeData.links.github,
      resumeData.links.linkedin,
      resumeData.links.website
    ],
    "knowsAbout": resumeData.skills.core,
    "alumniOf": resumeData.experience.map(exp => exp.company)
  };
};

export const updateDocumentMeta = (resumeData: ResumeData) => {
  const metadata = generateMetadata(resumeData);
  
  // Update title
  document.title = metadata.title;
  
  // Update meta tags
  const updateMetaTag = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  };
  
  updateMetaTag('description', metadata.description);
  updateMetaTag('keywords', metadata.keywords);
  
  // Update Open Graph tags
  const updateOgTag = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  };
  
  updateOgTag('og:title', metadata.title);
  updateOgTag('og:description', metadata.description);
  updateOgTag('og:type', 'profile');
  updateOgTag('og:url', resumeData.links.website);
  
  // Add JSON-LD
  let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    document.head.appendChild(jsonLdScript);
  }
  jsonLdScript.textContent = JSON.stringify(generateJsonLd(resumeData));
};