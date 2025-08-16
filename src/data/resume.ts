export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  links: {
    github: string;
    linkedin: string;
    twitter?: string;
    website: string;
  };
  about: {
    summary: string;
    interests: string[];
  };
  skills: {
    core: string[];
    tools: string[];
    soft: string[];
  };
  projects: Array<{
    name: string;
    summary: string;
    highlights: string[];
    tech: string[];
    repo?: string;
    live?: string;
    image?: string;
  }>;
  experience: Array<{
    company: string;
    role: string;
    start: string;
    end: string;
    location: string;
    achievements: string[];
    tech: string[];
  }>;
}

export const resumeData: ResumeData = {
  name: "Sauham Vyas",
  title: "AI Engineer & Developer Relations",
  tagline: "A passionate full-stack developer who loves to build things, Currently open for remote work and freelance projects. In my spare time,i enjoy listening to loud music and touching grass.",
  location: "India",
  email: "sauhamv28@gmail.com",
  phone: "+91-XXXXXXXXXX",
  links: {
    github: "https://github.com/Sauham/",
    linkedin: "https://www.linkedin.com/in/sauham-vyas/",
    website: "https://sauham.github.io/Final-Portfolio/"
  },
  about: {
    summary: "AI Engineer specializing in machine learning, natural language processing, and computer vision. Passionate about creating intelligent solutions that solve complex problems and enhance user experiences. Experienced in building scalable AI systems and developer advocacy.",
    interests: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Developer Relations", "Open Source"]
  },
  skills: {
    core: ["Python", "JavaScript", "TypeScript", "TensorFlow", "PyTorch", "React", "Node.js", "FastAPI"],
    tools: ["Docker", "Kubernetes", "AWS", "Git", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
    soft: ["Technical Writing", "Public Speaking", "Team Leadership", "Project Management", "Mentoring"]
  },
  projects: [
    {
      name: "AI Recommendation System",
      summary: "Machine learning-powered recommendation engine with collaborative and content-based filtering for personalized user experiences.",
      highlights: [
        "Achieved 85% accuracy in user preference prediction",
        "Implemented hybrid recommendation algorithms",
        "Built scalable ML pipeline with automated retraining"
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "Flask", "Redis"],
      repo: "https://github.com/Sauham/AI-Recommendation-System"
    },
    {
      name: "Data Extraction and Sentiment Analysis",
      summary: "Automated web scraping and data extraction tool for processing multiple URLs with intelligent content parsing.",
      highlights: [
        "Built robust web scraping framework",
        "Implemented intelligent content extraction algorithms",
        "Created scalable processing pipeline for batch URLs"
      ],
      tech: ["Python", "BeautifulSoup", "Requests", "Selenium", "Pandas"],
      repo: "https://github.com/Sauham/Data-Extraction-from-URLs"
    },
    {
      name: "RAG Document Chat Application",
      summary: "Intelligent document processing system using Retrieval-Augmented Generation for natural language queries over large document collections.",
      highlights: [
        "Implemented advanced RAG pipeline with vector embeddings",
        "Built real-time chat interface with document context awareness",
        "Optimized query performance for large document sets"
      ],
      tech: ["Python", "LangChain", "OpenAI", "ChromaDB", "Streamlit"],
      repo: "https://github.com/Sauham/Document-RAG-Chat-Application"
    },    
    {
      name: "Fetus Location and Organ Detection",
      summary: "Collection of computer vision applications including object detection, image classification, and facial recognition systems.",
      highlights: [
        "Developed real-time object detection with YOLO",
        "Created facial recognition system with 95% accuracy",
        "Implemented image preprocessing and augmentation pipelines"
      ],
      tech: ["Python", "OpenCV", "TensorFlow", "YOLO", "NumPy"],
      repo: "https://github.com/Sauham/CV-Projects"
    },
    {
      name: "AI Research agent using LangGraph",
      summary: "Collection of computer vision applications including object detection, image classification, and facial recognition systems.",
      highlights: [
        "Developed real-time object detection with YOLO",
        "Created facial recognition system with 95% accuracy",
        "Implemented image preprocessing and augmentation pipelines"
      ],
      tech: ["Python", "OpenCV", "TensorFlow", "YOLO", "NumPy"],
      repo: "https://github.com/Sauham/AI-Research-agent-using-LangGraph"
    }     
  ],
  experience: [
    {
      company: "Horeca Store",
      role: "AI Developer",
      start: "Mar 2025",
      end: "Present",
      location: "Remote - Dubai",
      achievements: [
        "Led development of AI-powered recommendation systems serving 10M+ users",
        "Designed and implemented MLOps pipelines reducing model deployment time by 60%",
        "Mentored junior engineers and established AI best practices across the organization"
      ],
      tech: ["Python", "TensorFlow", "AWS", "Kubernetes", "Docker"]
    },
    {
      company: "SETV Global",
      role: "AI-ML Engineer",
      start: "Jul 2024",
      end: "Feb 2025",
      location: "Remote - Indore",
      achievements: [
        "Built computer vision models for autonomous systems with 92% accuracy",
        "Optimized model inference speed by 40% through quantization and pruning",
        "Collaborated with cross-functional teams to deliver AI features on schedule"
      ],
      tech: ["PyTorch", "OpenCV", "FastAPI", "PostgreSQL", "Redis"]
    },
    {
      company: "Codsoft Infotech",
      role: "AI and Data Science Intern",
      start: "May 2024",
      end: "Jul 2024",
      location: "Remote-Indore",
      achievements: [
        "Built computer vision models for autonomous systems with 92% accuracy",
        "Optimized model inference speed by 40% through quantization and pruning",
        "Collaborated with cross-functional teams to deliver AI features on schedule"
      ],
      tech: ["PyTorch", "OpenCV", "FastAPI", "PostgreSQL", "Redis"]
    },
    {
      company: "Devaditya Technocrats LLP",
      role: "Operations and Data Analyst",
      start: "May 2023",
      end: "May 2024",
      location: "Indore",
      achievements: [
        "Built computer vision models for autonomous systems with 92% accuracy",
        "Optimized model inference speed by 40% through quantization and pruning",
        "Collaborated with cross-functional teams to deliver AI features on schedule"
      ],
      tech: ["PyTorch", "OpenCV", "FastAPI", "PostgreSQL", "Redis"]
    }
  ]
};