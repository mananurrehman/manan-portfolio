// ============================================================
// PORTFOLIO DATA - Edit this file to update your portfolio!
// ============================================================

export const personalInfo = {
  name: "Manan ur Rehman",
  title: "DevOps Engineer",
  email: "mananurrehman@gmail.com",
  phone: "+92 303 0083727",
  location: "Islamabad, Pakistan",
  linkedin: "https://www.linkedin.com/in/mananurrehman/",
  github: "https://github.com/mananurrehman",
  resumeLink: "#", // Add your resume PDF link here
};

export const profile = `DevOps Engineer with hands-on experience in CI/CD pipeline automation, containerization with Docker, and cloud deployment on AWS EC2. Built and deployed multiple production-ready projects using Jenkins, Docker Compose, Flask, and PostgreSQL with integrated security scanning. Passionate about cloud infrastructure, automation, and building reliable, scalable systems.`;

export const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: "cloud",
    items: ["AWS EC2", "IAM", "VPC", "Security Groups", "Route Tables", "Internet Gateway", "NAT Gateway"],
  },
  {
    category: "DevOps & CI/CD",
    icon: "pipeline",
    items: ["Docker", "Docker Compose", "Kubernetes (Basics)", "Jenkins", "GitHub Actions", "CI/CD Pipelines"],
  },
  {
    category: "Scripting & Config",
    icon: "terminal",
    items: ["Python", "Bash/Shell", "YAML", "Cron Jobs", "Git", "GitHub"],
  },
  {
    category: "Security & Quality",
    icon: "shield",
    items: ["SonarQube", "Trivy", "OWASP Dependency Check", "SSL/TLS", "SSH", "HTTPS"],
  },
  {
    category: "Networking",
    icon: "network",
    items: ["VPC Architecture", "Public/Private Subnets", "DNS", "DHCP", "Security Groups", "Firewalls"],
  },
  {
    category: "Development",
    icon: "code",
    items: ["Flask", "Jinja2", "PostgreSQL", "HTML", "CSS", "Tailwind CSS"],
  },
];

export const experience = [
  {
    title: "Linux & Server Administration",
    icon: "server",
    highlights: [
      "Managed Linux user accounts, permissions, and secure server access using SSH and best practices.",
      "Installed and configured Docker, Docker Compose, Jenkins on AWS EC2 cloud infrastructure.",
      "Built Docker Images and deployed multi-container applications with Docker Compose.",
      "Designed and configured AWS VPC architecture with public and private subnets, route tables, and security groups.",
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: "pipeline",
    highlights: [
      "Implemented end-to-end CI/CD pipelines using Jenkins for multi-tier Flask applications.",
      "Configured GitHub webhooks for Continuous Integration triggered on every code push.",
      "Pipeline stages: Checkout SCM → Clone → SonarQube → Trivy → OWASP → Deploy → Verify → Post Actions.",
      "Integrated security scanning tools (SonarQube, Trivy, OWASP) into Jenkins pipelines.",
      "Automated Continuous Deployment using Docker Compose for containerized multi-service applications.",
    ],
  },
  {
    title: "Containerization & Orchestration",
    icon: "container",
    highlights: [
      "Built optimized Docker images and deployed multi-container applications with health checks.",
      "Containerized Flask + PostgreSQL applications for consistent dev and prod environments.",
      "Practiced Kubernetes deployments, services, and workload management fundamentals.",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "cloud",
    highlights: [
      "Deployed and managed production applications on AWS EC2 with proper IAM role configuration.",
      "Configured SSH-based secure server access and managed Linux (Ubuntu) server environments.",
      "Configured inbound/outbound security group rules to control access and expose only necessary ports.",
    ],
  },
];

export const projects = [
  {
    title: "Finvestigate – Personal Finance Tracker",
    tech: ["Python", "Flask", "SQLAlchemy", "Jinja2", "Docker"],
    github: "https://github.com/mananurrehman/finvestigate",
    description:
      "A containerized personal finance management web application built with a monolithic architecture, featuring server-side rendering, email integration, and secure user authentication.",
    highlights: [
      "Developed a structured Flask backend utilizing the Application Factory pattern and SQLAlchemy ORM for database modeling and data seeding",
      "Implemented secure user authentication and role-based access control (RBAC) with dedicated admin and user roles",
      "Integrated automated email configuration and custom HTTP error routing (403, 404, 500) for a seamless user experience",
      "Containerized the application using Docker and published the image to Docker Hub, supporting an automated build process",
      "Maintained strict code quality and formatting standards across the codebase using Flake8 and Black",
    ],
  },
  {
    title: "Bitly Clone – URL Shortener",
    tech: ["Python", "Flask", "PostgreSQL", "Docker Compose", "Jenkins", "AWS EC2"],
    github: "https://github.com/mananurrehman/bitly_clone/",
    description:
      "A fully functional URL shortener with user authentication, 3-character short code generation, click analytics dashboard, and role-based access control (RBAC).",
    highlights: [
      "User authentication with Sign Up / Login and role-based access (Admin & User)",
      "PostgreSQL database with full CRUD operations for users, links, and analytics",
      "Containerized using Docker Compose (Flask + PostgreSQL) with health checks",
      "Automated build and deployment via Jenkins CI/CD pipeline",
    ],
  },
  {
    title: "QuickStay – Hotel Booking Platform",
    tech: ["Python", "Flask", "PostgreSQL", "Docker Compose", "Jenkins", "AWS EC2", "SonarQube", "Trivy", "OWASP"],
    github: "https://github.com/mananurrehman/quickstay/",
    description:
      "A full-featured hotel booking platform with property listings, booking management, and a dedicated admin panel for managing properties, reservations, and users.",
    highlights: [
      "User authentication with RBAC — admin panel for full management",
      "PostgreSQL database with full CRUD for users, properties, and bookings",
      "End-to-end Jenkins CI/CD pipeline with SonarQube, Trivy, OWASP scanning",
      "Multi-service containerization with Docker Compose deployed to AWS EC2",
    ],
  },
];

export const education = {
  degree: "BS Information Technology",
  years: "2021 – 2025",
  cgpa: "3.45 / 4.00",
  university: "Bahauddin Zakariya University (BZU), Multan",
};

export const certifications = [
  { name: "Advanced Jenkins", provider: "KodeKloud" },
  { name: "Jenkins Pipelines", provider: "KodeKloud" },
  { name: "Docker Training Course for Absolute Beginners", provider: "KodeKloud" },
  { name: "Kubernetes for Absolute Beginners – Hands-On Tutorial", provider: "KodeKloud" },
  { name: "Crash Course: AWS Basics", provider: "KodeKloud" },
  { name: "Git for Beginners", provider: "KodeKloud" },
];

export const achievements = [
  "Built and deployed 2 production-ready applications end-to-end using Python, Flask, PostgreSQL, Docker Compose, and Jenkins on AWS EC2.",
  "Integrated a multi-stage security pipeline (SonarQube, Trivy, OWASP) into Jenkins CI/CD workflow, enforcing code quality gates before every deployment.",
  "Independently self-learned core DevOps tools and practices — Docker, Jenkins, AWS EC2, and security scanning — outside formal education.",
];
