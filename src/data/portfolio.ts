export const portfolioData = {
  personal: {
    name: "Sidharth P",
    title: "AI & Full Stack Developer",
    tagline: "Building intelligent applications at the intersection of AI and modern web technologies",
    email: "sidharth2272004@gmail.com",
    location: "Palakkad, Kerala, India",
    bio: "A highly motivated B.Tech student with a strong command of MERN stack development, dedicated to building responsive and scalable full-stack applications. My passion for problem-solving drives me to continuously refine my skills in Data Structures and Algorithms. While my core expertise is in web development, I am actively learning the fundamentals of Machine Learning to explore new ways of creating intelligent, data-driven solutions. My goal is to develop impactful software that delivers both technical excellence and a seamless user experience.",
    philosophy: {
      title: "My Engineering Philosophy",
      points: [
        "User-Centric Design: My goal is to build applications that are not only functional but also intuitive and delightful for the end-user.",
        "Clean Architecture: I prioritize writing modular, maintainable, and scalable code that stands the test of time.",
        "Continuous Learning: I believe in staying ahead of the curve, constantly exploring new technologies to find better and more efficient solutions.",
        "Impact-Driven Development: I am motivated by creating solutions that solve real-world problems and make a tangible difference."
      ]
    }
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
          "Multi-Format Input: Implemented robust content extraction from various formats, including PDF, DOCX, and images, using Azure OCR for reliable text retrieval.",
          "High-Performance Plagiarism Engine: Engineered a specialized engine that significantly reduced pairwise comparison overhead by 95% using a combination of MinHash and Locality-Sensitive Hashing (LSH). This enabled efficient detection across a large corpus of documents.",
          "Accurate Similarity Measurement: Applied Jaccard-overlap token scoring to precisely measure and score the similarity between text snippets, providing detailed and accurate results.",
          "Real-Time Web Content Matching: Integrated the SERP API to perform real-time web searches, matching user-submitted content against a vast online repository.",
          "Detailed Reporting & Virtual Classroom: The platform auto-generates grouped plagiarism reports with highlighted matches and a clear scoring breakdown. Additionally, it features a virtual classroom system with role-based access where teachers create assignments and students upload submissions, all linked to unique IDs."
        ],
        tech: ["MERN", "Tailwind CSS", "MongoDB", "Azure OCR", "SERP API", "MinHash", "LSH", "Jaccard-Overlap"],
        links: {
          github: "https://github.com/Sid-Codex/VeriWrite",
          demo: "https://veriwrite.vercel.app/",
        }
      },
      image: "/images/projects/veriwrite/landing.png",
      images: [
        "/images/projects/veriwrite/landing.png",
        "/images/projects/veriwrite/dashboard.jpeg",
        "/images/projects/veriwrite/assignment.jpeg"
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Azure OCR"],
      category: "AI",
      github: "https://github.com/Sid-Codex/VeriWrite",
      demo: "https://veriwrite.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "ChefMate - AI-Powered Cooking Assistant (Ongoing)",
      description: "A smart assistant that uses NLP to generate personalized recipes based on dietary filters, regional cuisines, and ingredient context.",
      longDescription: {
        intro: "ChefMate is an AI-powered cooking assistant currently in development, designed to make cooking a personalized and interactive experience. It leverages advanced NLP models to understand user needs and generate custom recipes, while also providing a seamless user interface for a smooth cooking journey.",
        features: [
          "Personalized Recipe Generation: Built a smart assistant that generates recipes by analyzing NLP inputs, applying dietary filters, and considering regional cuisines and available ingredients.",
          "AI-Powered Tools: Features an AI recipe rewriter, a step-by-step cooking mode, and integrated chatbot support for real-time assistance.",
          "Optimized Performance: Implemented key performance optimizations, including lazy loading and code splitting for faster load times. Leveraged Redis for caching to reduce database queries and improve responsiveness.",
          "Modern Development Practices: Followed Agile and Behavior-Driven Development (BDD) methodologies using GitHub Projects. CI/CD pipelines and automated testing were also integrated to ensure code quality and a smooth deployment process.",
          "Robust Tech Stack: The application is built with a powerful backend using FastAPI and PostgreSQL for data management, Redis for caching, and Docker for containerization. The frontend is developed using React with Tailwind CSS."
        ],
        tech: ["React", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Tailwind", "OpenAI API", "Hugging Face", "Docker"],
        links: {
          github: "https://github.com/Sid-Codex/ChefMate",
          demo: null,
        }
      },
      image: "/images/projects/chefmate/chefmate1.png",
      images: [
        "/images/projects/chefmate/chefmate2.png",
        "/images/projects/chefmate/chefmate3.png",
        "/images/projects/chefmate/chefmate4.png"
      ],
      tech: ["React", "Node.js", "Express.js", "FastAPI", "PostgreSQL"],
      category: "AI",
      github: "https://github.com/Sid-Codex/ChefMate",
      demo: null,
      featured: true
    },
  ],

  skills: {
    languages: [
      { name: "C++", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "Python", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "JavaScript/TypeScript", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
    ],
    frameworks: [
      { name: "React.js", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "FastAPI", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" }
    ],
    aiml: [
      { name: "Python", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Deep Learning", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Model Deployment", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "LLMs (Groq API)", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" }
    ],
    tools: [
      { name: "Git", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Docker", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "MongoDB", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "Azure OCR", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" }
    ]
  },

  certifications: [
    {
      name: "Machine Learning Specialization",
      issuer: "Andrew Ng, Coursera",
      date: null,
      credentialUrl: null,
      image: "/images/certifications/ML_andrewng.jpg"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Andrew Ng, Coursera",
      date: null,
      credentialUrl: null,
      image: "/images/certifications/DL_andrewng.png"
    },
    {
      name: "The Joy of Computing using Python",
      issuer: "NPTEL, IIT Madras",
      date: null,
      credentialUrl: null,
      image: "/images/certifications/Joy_of_Computing_using_Python.jpg"
    },
    {
      name: "Data Science for Engineers",
      issuer: "NPTEL, IIT Madras",
      date: null,
      credentialUrl: null,
      image: "/images/certifications/Data_Science_for_Engineers.jpg"
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
      username: "Sid_CodeX",
      url: "https://leetcode.com/u/Sid_CodeX",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg",
      api: {
        endpoint: "https://leetcode-stats-api.herokuapp.com/Sid_CodeX"
      }
    },
    {
      platform: "HackerRank",
      username: "Sid_CodeX",
      stats: "Solved many Data Structures and Algorithms problems to sharpen my skills",
      url: "https://www.hackerrank.com/Sid_CodeX",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/960px-HackerRank_Icon-1000px.png",
      api: {
        endpoint: null
      }
    },
    {
      platform: "GitHub",
      username: "Sid-Codex",
      stats: null,
      url: "https://github.com/Sid-Codex",
      icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      api: {
        endpoint: "https://api.github.com/users/Sid-Codex",
        contributionEndpoint: "https://github-contributions-api.jogruber.de/v4/Sid-Codex",
      }
    }
  ]
};