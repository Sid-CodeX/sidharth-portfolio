export const portfolioData = {
  personal: {
    name: "Sidharth P",
    title: "AI & Full Stack Developer",
    tagline: "Building intelligent applications at the intersection of AI and modern web technologies",
    email: "sidharth2272004@gmail.com",
    location: "Palakkad, Kerala, India",
    bio: "A passionate and results-driven B.Tech student specializing in Computer Science, with a strong foundation in both MERN stack development and Machine Learning. I excel at creating innovative, full-stack solutions that leverage AI to solve real-world problems. My experience includes developing high-performance applications, automating workflows, and building intelligent systems with a focus on clean architecture and efficient code."
  },

  experience: [
    {
      id: 1,
      company: "TechSaksham (AICTE, Microsoft & SAP)",
      role: "AI Intern",
      duration: "Dec 2024 - Jan 2025",
      description: "Developed and deployed a real-time pose estimation application with high accuracy.",
      achievements: [
        "Built a real-time pose estimation app using MediaPipe and OpenCV, achieving over 90% accuracy for images, videos, and webcam streams.",
        "Deployed an interactive Streamlit interface to provide fitness and sports analytics."
      ],
      icon: "💼"
    },
    {
      id: 2,
      company: "IBM SkillsBuild",
      role: "AI Intern",
      duration: "Jul 2024 - Aug 2024",
      description: "Automated user query handling by creating and deploying a low-code chatbot.",
      achievements: [
        "Created a low-code chatbot using IBM Watsonx Studio and Watson Assistant to automate user query handling.",
        "Configured AI workflows and deployed the chatbot in an enterprise-ready setup."
      ],
      icon: "🤖"
    }
  ],

  projects: [
    {
      id: 1,
      title: "VeriWrite - Intelligent Plagiarism Detection System",
      description: "A full-stack plagiarism detection platform supporting multi-format input (PDF, DOCX, images) for fast and accurate content extraction and comparison.",
      longDescription: {
        intro: "VeriWrite is a comprehensive full-stack plagiarism detection platform I designed and deployed. It addresses the challenge of verifying content from various sources, including images and documents, with high efficiency and accuracy. The system includes a virtual classroom environment and a robust plagiarism engine.",
        features: [
          "**Multi-Format Input:** Implemented robust content extraction from various formats, including PDF, DOCX, and images, using Azure OCR for reliable text retrieval.",
          "**High-Performance Plagiarism Engine:** Engineered a specialized engine that significantly reduced pairwise comparison overhead by 95% using a combination of MinHash and Locality-Sensitive Hashing (LSH). This enabled efficient detection across a large corpus of documents.",
          "**Accurate Similarity Measurement:** Applied Jaccard-overlap token scoring to precisely measure and score the similarity between text snippets, providing detailed and accurate results.",
          "**Real-Time Web Content Matching:** Integrated the SERP API to perform real-time web searches, matching user-submitted content against a vast online repository.",
          "**Detailed Reporting & Virtual Classroom:** The platform auto-generates grouped plagiarism reports with highlighted matches and a clear scoring breakdown. Additionally, it features a virtual classroom system with role-based access for teachers to create assignments and students to upload submissions, all linked to unique IDs."
        ],
        tech: ["MERN", "Tailwind CSS", "MongoDB", "Azure OCR", "SERP API", "MinHash", "LSH", "Jaccard-Overlap"],
        links: {
          github: "https://github.com/Sid-Codex/VeriWrite",
          demo: null,
        }
      },
      image: "/images/projects/veriwrite/landing.png", // Main image for the project card
      images: [
        "/images/projects/veriwrite/landing.png",
        "/images/projects/veriwrite/dashboard.jpeg",
        "/images/projects/veriwrite/assignment.jpeg"
      ],
      featured: true,
      category: "AI"
    },
    {
      id: 2,
      title: "ChefMate - AI-Powered Cooking Assistant (Ongoing)",
      description: "A smart assistant that uses NLP to generate personalized recipes based on dietary filters, regional cuisines, and ingredient context.",
      longDescription: {
        intro: "ChefMate is an AI-powered cooking assistant currently in development, designed to make cooking a personalized and interactive experience. It leverages advanced NLP models to understand user needs and generate custom recipes, while also providing a seamless user interface for a smooth cooking journey.",
        features: [
          "**Personalized Recipe Generation:** Built a smart assistant that generates recipes by analyzing NLP inputs, applying dietary filters, and considering regional cuisines and available ingredients.",
          "**AI-Powered Tools:** Features an AI recipe rewriter for easy modifications, a step-by-step cooking mode, and integrated chatbot support for real-time assistance.",
          "**Optimized Performance:** Implemented key performance optimizations, including lazy loading and code splitting for faster load times. Leveraged Redis for caching to reduce database queries and improve responsiveness.",
          "**Modern Development Practices:** Followed Agile and Behavior-Driven Development (BDD) methodologies using GitHub Projects. CI/CD pipelines and automated testing were also integrated to ensure code quality and a smooth deployment process.",
          "**Robust Tech Stack:** The application is built with a powerful backend using FastAPI and PostgreSQL for data management, Redis for caching, and Docker for containerization. The frontend is developed using React with Tailwind CSS."
        ],
        tech: ["React", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Tailwind", "OpenAI API", "Hugging Face", "Docker"],
        links: {
          github: "https://github.com/Sid-Codex/ChefMate",
          demo: null,
        }
      },
      // Using a placeholder path for ChefMate for now
      image: "/images/projects/chefmate-screenshot1.png", 
      images: [
        "/images/projects/chefmate-screenshot1.png",
        "/images/projects/chefmate-screenshot2.png",
        "/images/projects/chefmate-screenshot3.png"
      ],
      featured: true,
      category: "AI"
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 }
    ],
    webDevelopment: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "FastAPI", level: 80 }
    ],
    aiml: [
      { name: "Python", level: 95 },
      { name: "Deep Learning", level: 85 },
      { name: "Model Deployment", level: 85 },
      { name: "LLMs (Groq API)", level: 80 }
    ],
    softSkills: [
      { name: "Problem-Solving", level: 90 },
      { name: "Analytical Thinking", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Adaptability", level: 85 }
    ]
  },

  certifications: [
    {
      name: "Machine Learning Specialization",
      issuer: "Andrew Ng, Coursera",
      date: null,
      credentialUrl: null
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Andrew Ng, Coursera",
      date: null,
      credentialUrl: null
    },
    {
      name: "IBM Data Science Professional Certificate",
      issuer: "Coursera",
      date: null,
      credentialUrl: null
    },
    {
      name: "The Joy of Computing using Python",
      issuer: "NPTEL, IIT Madras",
      date: null,
      credentialUrl: null
    },
    {
      name: "Data Science for Engineers",
      issuer: "NPTEL, IIT Madras",
      date: null,
      credentialUrl: null
    }
  ],

  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Muthoot Institute of Technology and Science, Kochi, Kerala",
    duration: "Expected May 2026",
    gpa: "CGPA: 8.59",
    relevantCoursework: ["Data Structures and Algorithms", "Operating Systems", "Computer Networks", "Machine Learning", "DBMS"]
  },

  codingProfiles: [
    {
      platform: "LeetCode",
      username: "Sid-CodeX",
      stats: "Solved 160+ DSA problems",
      url: "https://leetcode.com/Sid-CodeX",
      icon: "💻"
    },
    {
      platform: "HackerRank",
      username: "Sid_CodeX",
      stats: "Solved 150+ DSA problems",
      url: "https://www.hackerrank.com/Sid-CodeX",
      icon: "🏆"
    },
    {
      platform: "GitHub",
      username: "Sid-CodeX",
      stats: null,
      url: "https://github.com/Sid-CodeX",
      icon: "🐙"
    }
  ]
};