// index.js

export const heroData = {
  name: "Syed Waseem I",
  tagline: "I build scalable, high-performance full-stack and data-driven backend applications at Amazon.",
  intro: "Full-Stack Software Engineer with strong backend focus. Currently working at Amazon on data-driven solutions. I've delivered production-grade solutions resulting in over ₹1Cr in revenue for my clients, with an emphasis on performance, reliability, and clean architecture.",
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
  content: "I specialize in building backend-heavy systems and full-stack applications that scale. From designing APIs to deploying AI-powered platforms, I focus on performance, reliability, and clean system design.\n\nI’m currently working at Amazon on data-driven backend solutions, while also delivering production-grade applications that have generated over ₹1Cr in revenue for my clients.",
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

// ========== DATA ENGINEER PATH ==========

export const heroDataDE = {
  name: "Syed Waseem I",
  tagline: "Data Engineer focused on scalable ETL, real-time streaming, and production-grade data platforms.",
  intro: "Data Engineer focused on scalable ETL, real-time streaming, and production-grade data platforms.",
  coreAreas: [
    "ETL Pipelines",
    "Stream Processing",
    "Data Modeling",
    "Workflow Orchestration",
    "Cloud Data Platforms",
    "Data Infrastructure",
  ],
  quote: "Data flows, insights grow.",
};

export const servicesSectionDE = {
  title: "I build scalable data pipelines, real-time streaming systems, and production-grade data infrastructure.",
};

export const servicesDataDE = [
  {
    title: "ETL & Data Pipelines",
    description: "Designing and building robust batch and real-time ETL pipelines for reliable data ingestion, transformation, and loading into data warehouses and lakes.",
    items: [
      {
        title: "Batch Processing",
        description: "(Apache Spark, Python, Airflow)",
      },
      {
        title: "Stream Processing",
        description: "(Kafka, PySpark, Real-time systems)",
      },
      {
        title: "Data Validation & Quality",
        description: "(Testing, Deduplication, Cleansing)",
      },
    ],
  },
  {
    title: "Data Modeling & Warehousing",
    description: "Designing and optimizing data models, dimensional schemas, and analytical databases for scalable reporting and business intelligence.",
    items: [
      {
        title: "Star Schema Design",
        description: "(Fact & Dimension Tables)",
      },
      {
        title: "Data Warehouse Architecture",
        description: "(PostgreSQL, Parquet, Partitioning)",
      },
      {
        title: "Analytics & BI Integration",
        description: "(Dashboard-ready data models)",
      },
    ],
  },
  {
    title: "Workflow Orchestration & DevOps",
    description: "Building production-grade data infrastructure with automated workflow execution, containerization, and CI/CD for reliable data operations.",
    items: [
      {
        title: "Workflow Orchestration",
        description: "(Apache Airflow, DAG scheduling)",
      },
      {
        title: "Containerization & Deployment",
        description: "(Docker, Docker Compose, CI/CD)",
      },
      {
        title: "Cloud & Infrastructure",
        description: "(AWS, Scalable services)",
      },
    ],
  },
];

export const experienceDE = [
  {
    company: "Amazon",
    title: "Transportation Specialist (ROC)",
    period: "May 2026 – Present",
    location: "Bengaluru, India",
    points: [
      "Manages and tracks high-volume shipment data across North America and Europe regions, ensuring accurate data flow across Amazon's 2nd leg delivery network from Fulfillment Centers to last-mile carriers.",
      "Operates across multiple enterprise logistics platforms including BNSF, CSX, NSR, WIMS, and FMC to monitor, track, and resolve shipment data discrepancies across multi-region supply chain operations.",
      "Performs data annotation and data cleaning on large-scale operational datasets, ensuring data accuracy and integrity across Amazon's NA and EU transportation networks.",
      "Writes SQL queries to extract and analyze shipment and logistics data, supporting operational decision-making and performance tracking across delivery workflows.",
      "Coordinates with carriers and drivers to resolve shipment exceptions, validates and processes Bill of Lading (BOL) documentation required for container clearance and freight movement.",
      "Works with large-scale, multi-region operational data across Amazon's global fulfillment and transportation infrastructure supporting millions of shipments across NA and EU corridors.",
    ],
  },
];

export const experienceSDE = [
  {
    company: "Vulcan Collective LLP",
    title: "Software Engineer (Full Stack & Data)",
    period: "Jun 2025 – Mar 2026",
    location: "Bengaluru, India",
    points: [
      "Built Node.js backends and MongoDB schemas for a scalable interview platform serving 300+ users, improving session completion by 45%.",
      "Designed and implemented RESTful APIs for real-time question generation, reducing response latency by ~30%.",
      "Automated evaluation workflows and scoring pipelines, cutting manual review effort by ~70% and saving hours weekly.",
      "Delivered a responsive full-stack UI with backend pipelines and analytics for automated scoring and reliable user experience.",
      "Implemented CI/CD with GitHub Actions and optimized MongoDB queries/indexes, reducing data access latency by 30% and improving deployment reliability.",
    ],
  },
];

export const projectsDE = [
  {
    id: 1,
    name: "YouTube Trending Analytics ETL Pipeline",
    description: "Built a modular batch ETL pipeline processing 239K+ records across 6 global regions with validation, deduplication, and transformation workflows.",
    impact: [
      "Processed 239K+ records across 6 global regions",
      "Designed region-partitioned Parquet storage layer",
      "Orchestrated workflows via Airflow DAGs with retry handling",
      "Delivered SQL analytics across 32 video categories",
    ],
    techStack: ["Python", "PostgreSQL", "Parquet", "Apache Airflow", "Docker"],
    github: "https://github.com/syed",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [{ id: 1, name: "Python" }, { id: 2, name: "PostgreSQL" }, { id: 3, name: "Airflow" }, { id: 4, name: "Docker" }],
  },
  {
    id: 2,
    name: "Real-Time E-Commerce Analytics Platform",
    description: "Built a real-time streaming pipeline using Apache Kafka and PySpark for e-commerce clickstream events with automated transformations via dbt.",
    impact: [
      "Real-time streaming pipeline with Kafka & PySpark",
      "Star schema design with fact and dimension tables",
      "dbt transformation models for clean, analysis-ready data",
      "End-to-end orchestration via Airflow & Docker Compose",
    ],
    techStack: ["Python", "Kafka", "PySpark", "Apache Airflow", "PostgreSQL", "Docker"],
    github: "https://github.com/syed",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [{ id: 1, name: "Python" }, { id: 2, name: "Kafka" }, { id: 3, name: "PySpark" }, { id: 4, name: "Airflow" }],
  },
];

export const skillsDataDE = {
  coreProgamming: ["Python", "SQL (DDL, DML, Joins, Window Functions)", "PySpark", "Spark SQL"],
  dataEngineering: ["ETL Pipelines", "EDA (Exploratory Data Analysis)", "Data Modeling (Star Schema)", "Batch Processing", "Stream Processing", "Data Validation", "Data Cleaning", "Workflow Orchestration"],
  bigDataStreaming: ["Apache Spark", "Apache Kafka", "Apache Airflow", "dbt Core", "NumPy"],
  databasesStorage: ["PostgreSQL", "MongoDB", "MinIO (S3-Compatible)", "Parquet"],
  cloudPlatforms: ["AWS (S3, Redshift, Glue, Athena) — Basics", "Azure Basics", "BigQuery — Basics"],
  devOpsTools: ["Docker", "Docker Compose", "Git", "GitHub Actions"],
  analyticsConepts: ["Business Insights", "Data Warehouse Design", "REST APIs", "DBMS", "Pipeline Orchestration"],
  cloudPlatforms: ["AWS (S3, Glue, Redshift, EMR, Athena) — Intermediate", "Azure Basics", "BigQuery — Basics"],

  certifications: [
    "AWS Certified Data Engineer - Associate",
    "Exam Prep Plan — Completed",
    "Official Practice Question Set — Completed",
    "Official Pretest — Completed",
    "Completed while training at Amazon | AWS Official Curriculum",
  ],
  // Added DE-only certification prep details
  // Note: Displayed only when activePathway === 'de'
  certifications: [
    "Oracle Cloud Infrastructure",
    "Deloitte Data Analytics",
    "Microsoft Azure AZ-900",
    "AWS Data Engineer Course",
    "AWS Certified Data Engineer - Associate Prep (Exam Prep Plan — Completed; Official Practice Question Set — Completed; Official Pretest — Completed) — Completed while training at Amazon | AWS Official Curriculum",
  ],
};

export const aboutDataDE = {
  title: "Passionate about building scalable data infrastructure",
  content: "I specialize in designing and building production-grade data pipelines and infrastructure that scale. From ETL automation to real-time streaming systems, I focus on data reliability, performance optimization, and clean system design.\n\nI've built end-to-end data solutions processing 239K+ records, reduced data access latency by 30%, and delivered automated workflows reducing operational overhead by 70%.",
  notBuilding: [
    "Exploring distributed data systems",
    "Optimizing data pipeline performance",
    "Building side projects with real-time analytics",
  ],
};
