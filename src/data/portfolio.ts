
export const portfolioData = {
  personal: {
    name: "Sidharth",
    title: "MERN & ML Engineer",
    tagline: "Building intelligent web applications with modern technologies",
    email: "sidharth@example.com",
    location: "India",
    bio: "Passionate full-stack developer with expertise in MERN stack and Machine Learning. I love creating innovative solutions that bridge the gap between traditional web development and artificial intelligence. Currently pursuing B.Tech in Computer Science, I'm always eager to learn new technologies and contribute to impactful projects."
  },
  
  experience: [
    {
      id: 1,
      company: "Tech Startup Inc.",
      role: "Full Stack Developer Intern",
      duration: "Jun 2023 - Present",
      description: "Developed and maintained web applications using MERN stack",
      achievements: [
        "Built scalable REST APIs serving 10k+ daily users",
        "Optimized database queries reducing response time by 40%",
        "Implemented real-time features using Socket.io"
      ],
      icon: "💼"
    },
    {
      id: 2,
      company: "AI Research Lab",
      role: "ML Research Assistant",
      duration: "Jan 2023 - May 2023",
      description: "Worked on computer vision and NLP projects",
      achievements: [
        "Developed CNN models with 95% accuracy for image classification",
        "Published research on fake news detection algorithms",
        "Mentored 5 junior students in ML fundamentals"
      ],
      icon: "🔬"
    }
  ],

  projects: [
    {
      id: 1,
      title: "ChefMate - AI Cooking Assistant",
      description: "An intelligent cooking assistant that suggests recipes based on available ingredients using machine learning and provides step-by-step cooking guidance.",
      longDescription: "ChefMate is a comprehensive cooking assistant built with the MERN stack and integrated with OpenAI's GPT API. It features ingredient recognition through image processing, personalized recipe recommendations, and real-time cooking guidance. The application includes user authentication, recipe saving, and a community feature for sharing cooking experiences.",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "TensorFlow.js"],
      category: "AI",
      github: "https://github.com/sidharth/chefmate",
      demo: "https://chefmate.example.com",
      featured: true
    },
    {
      id: 2,
      title: "VeriWrite - Handwriting Plagiarism Detector",
      description: "Advanced plagiarism detection system for handwritten documents using Microsoft OCR and Jaccard similarity algorithm.",
      longDescription: "VeriWrite revolutionizes academic integrity by detecting plagiarism in handwritten assignments. Using Microsoft's Computer Vision API for OCR and implementing the Jaccard similarity algorithm, it can identify copied content with high accuracy. The system includes a web interface for document upload, batch processing capabilities, and detailed similarity reports.",
      image: "/api/placeholder/600/400",
      tech: ["Python", "Flask", "Microsoft OCR", "OpenCV", "React", "PostgreSQL"],
      category: "AI",
      github: "https://github.com/sidharth/veriwrite",
      demo: "https://veriwrite.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Multimodal Fake News Detector",
      description: "Deep learning system that detects fake news and deepfake content across text, image, and video modalities.",
      longDescription: "A comprehensive fake news detection system that analyzes multiple types of media. The system uses transformer models for text analysis, CNN architectures for image verification, and temporal analysis for video deepfake detection. It includes a user-friendly interface and browser extension for real-time fact-checking.",
      image: "/api/placeholder/600/400",
      tech: ["Python", "PyTorch", "Transformers", "OpenCV", "FastAPI", "React"],
      category: "AI",
      github: "https://github.com/sidharth/fake-news-detector",
      demo: "https://fakenews-detector.example.com",
      featured: true
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      longDescription: "A complete e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, order management, payment processing with Stripe, inventory tracking, and comprehensive admin dashboard with analytics.",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redis"],
      category: "MERN",
      github: "https://github.com/sidharth/ecommerce-platform",
      demo: "https://ecommerce.example.com",
      featured: false
    }
  ],

  skills: {
    languages: [
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 }
    ],
    frameworks: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Next.js", level: 75 }
    ],
    aiml: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "scikit-learn", level: 85 },
      { name: "Hugging Face", level: 70 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 70 }
    ]
  },

  certifications: [
    {
      name: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "2023",
      credentialUrl: "https://coursera.org/verify/certificate"
    },
    {
      name: "Google Data Analytics Certificate",
      issuer: "Google",
      date: "2023",
      credentialUrl: "https://coursera.org/verify/certificate"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2022",
      credentialUrl: "https://coursera.org/verify/certificate"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialUrl: "https://aws.amazon.com/verification"
    }
  ],

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "MITS (Madanapalle Institute of Technology & Science)",
    duration: "2021 - 2025",
    gpa: "8.5/10",
    achievements: [
      "Dean's List for Academic Excellence",
      "Winner of College Hackathon 2023",
      "Technical Lead of Computer Science Club"
    ]
  },

  codingProfiles: [
    {
      platform: "LeetCode",
      username: "sidharth_dev",
      stats: "500+ problems solved",
      url: "https://leetcode.com/sidharth_dev",
      icon: "💻"
    },
    {
      platform: "CodeChef",
      username: "sidharth_chef",
      stats: "4⭐ (1800+ rating)",
      url: "https://codechef.com/users/sidharth_chef",
      icon: "👨‍🍳"
    },
    {
      platform: "HackerRank",
      username: "sidharth_hr",
      stats: "5⭐ in Python & SQL",
      url: "https://hackerrank.com/sidharth_hr",
      icon: "🏆"
    },
    {
      platform: "GitHub",
      username: "sidharth-dev",
      stats: "50+ repositories",
      url: "https://github.com/sidharth-dev",
      icon: "🐙"
    }
  ]
};
