// index.js

export const heroData = {
  name: "Syed Waseem I",
  tagline: "I build scalable, high-performance full-stack and AI-powered applications that deliver real-world impact.",
  intro: "Full-Stack Software Engineer with strong backend focus. I've delivered production-grade solutions resulting in over ₹1Cr in revenue for my clients, with an emphasis on performance, reliability, and clean architecture.",
  coreAreas: [
    "Architecture",
    "Backend Development",
    "APIs",
    "Scalability",
    "Databases",
    "AI Systems",
  ],
  quote: "Behind the system, beyond the interface.",
};

export const servicesSection = {
  title: "I build scalable, secure, and high-performance applications that solve real problems.",
};

export const servicesData = [
  {
    title: "Full-Stack Development",
    description: "Designing and building end-to-end applications with clean architecture, optimized performance, and seamless integrations.",
    items: [
      {
        title: "Backend Engineering",
        description: "(Node.js, FastAPI, Spring Boot)",
      },
      {
        title: "Frontend Development",
        description: "(React, TailwindCSS)",
      },
      {
        title: "Database Design",
        description: "(PostgreSQL, MongoDB)",
      },
    ],
  },
  {
    title: "AI & Data Systems",
    description: "Building intelligent systems using AI/ML to automate workflows, improve decision-making, and enhance user experience.",
    items: [
      {
        title: "AI-powered platforms",
        description: "(Automated content generation, analysis)",
      },
      {
        title: "Data pipelines",
        description: "(Real-time & batch processing)",
      },
      {
        title: "ML model integration",
        description: "(Seamless AI deployment)",
      },
    ],
  },
  {
    title: "DevOps & Scalability",
    description: "Ensuring applications are scalable, reliable, and production-ready with optimized infrastructure and monitoring.",
    items: [
      {
        title: "AWS & Cloud deployment",
        description: "(EC2, S3, RDS, Lambda)",
      },
      {
        title: "Docker & CI/CD",
        description: "(Containerization & automation)",
      },
      {
        title: "Performance optimization",
        description: "(Caching, Load balancing, DB tuning)",
      },
    ],
  },
];

export const aboutData = {
  title: "Passionate about building scalable systems",
  content: "I specialize in building backend-heavy systems and full-stack applications that scale. From designing APIs to deploying AI-powered platforms, I focus on performance, reliability, and clean system design.\n\nI’ve built systems serving 300+ users, improved performance by up to 45%, and delivered solutions that have generated over ₹1Cr in revenue for my clients.",
  notBuilding: [
    "Exploring AI and system design",
    "Improving backend performance",
    "Working on scalable side projects",
  ],
};

export const projects = [
  {
    id: 1,
    name: "AI-Powered Interview Platform",
    description: "Built a scalable AI-powered platform for automated interview question generation and evaluation.",
    impact: [
      "Supported 300+ users",
      "Improved session completion by 45%",
      "Reduced manual evaluation effort by 70%",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Python"],
    image: "/assets/projects/saas_dashboard_preview.jpg", // I'll use the generated image or placeholders
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [{ id: 1, name: "React" }, { id: 2, name: "Node.js" }, { id: 3, name: "MongoDB" }, { id: 4, name: "Python" }],
  },
  {
    id: 2,
    name: "Scalable URL Shortening Service",
    description: "Developed a high-performance URL shortening system with caching and optimized database queries.",
    impact: [
      "Improved response time by 40%",
      "Increased query performance by 35%",
      "Handled high concurrent traffic with rate limiting",
    ],
    techStack: ["React", "Node.js", "Redis", "PostgreSQL"],
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [{ id: 1, name: "React" }, { id: 2, name: "Node.js" }, { id: 3, name: "Redis" }, { id: 4, name: "PostgreSQL" }],
  },
  {
    id: 3,
    name: "Stock Pattern Analyser",
    description: "Built a production-grade AI-driven data processing system from scratch.",
    impact: [
      "Generated over ₹1Cr in revenue for the client",
      "Improved pattern recognition accuracy by 28%",
      "Reduced manual effort by 80%",
      "Built scalable real-time + batch pipelines",
    ],
    techStack: ["Python", "SQL"],
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [{ id: 1, name: "Python" }, { id: 2, name: "SQL" }],
  },
];

export const skillsData = {
  languages: ["JavaScript", "Python", "Java"],
  frontend: ["React", "TailwindCSS", "HTML", "CSS", "Vite"],
  backend: ["Node.js", "FastAPI", "Spring Boot", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "SQL"],
  cloudTools: ["AWS", "Docker", "Git"],
  core: ["Data Structures & Algorithms", "System Design", "DBMS", "Operating Systems"],
};

export const contactData = {
  email: "syedwaseemi850@gmail.com",
  phone: "+91 9480467250",
  linkedin: "https://linkedin.com/in/syed-waseem-i-b61132216",
  github: "https://github.com/Syedwaseem106",
  closingLine: "Let’s build something scalable, impactful, and production-ready.",
};

export const socials = [
  { name: "LinkedIn", href: "https://linkedin.com/in/syed-waseem-i-b61132216", icon: "mdi:linkedin" },
  { name: "GitHub", href: "https://github.com/Syedwaseem106", icon: "mdi:github" },
  { name: "Instagram", href: "https://www.instagram.com/syedwaseem.i?igsh=MXB1OG1ibmFsNG4xbw==", icon: "mdi:instagram" },
];
