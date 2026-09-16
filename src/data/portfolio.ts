// Portfolio Data - Centralized data for all sections

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  shortDescription: string;
  fullDescription: string[];
  type: "professional" | "academic" | "freelance";
  github?: string;
  demo?: string;
  period?: string;
  hasDemoAvailable: boolean;
  hasSourceCode: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  iconName?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  description: string;
  credentialUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  iconName: string;
}

// Projects Data
export const projects: Project[] = [
  {
    id: "kavach",
    title: "Kavach – Railway Safety & Monitoring Platform",
    techStack: ["Django", "Python", "PostgreSQL", "Redis", "Celery", "Angular", "Keycloak"],
    shortDescription: "Railway safety platform for track, signalling, RFID, and infrastructure data management.",
    fullDescription: [
      "Contributed to Kavach, a railway safety and monitoring platform developed at Vassar Digital AI.",
      "Worked on backend services for railway layout, RFID/TIN plotting, signalling, and station data processing.",
      "Implemented and maintained Django REST APIs, Redis-backed processing, Celery workers, and PostgreSQL integrations.",
      "Worked across backend and frontend workflows to support railway design, validation, data visualization, and reporting.",
      "Integrated authentication and role-based access using Keycloak and contributed to deployment and production troubleshooting."
    ],
    type: "professional",
    period: "Present",
    hasDemoAvailable: false,
    hasSourceCode: false,
  },

  {
    id: "mobilewise",
    title: "MobileWise – Mobile Application Platform",
    techStack: ["Angular js", "Node.js", "TypeScript", "Django", "Python", "PostgreSQL",],
    shortDescription: "Mobile-focused platform for delivering application experiences and services.",
    fullDescription: [
      "Worked on MobileWise, a mobile-focused application platform developed at Vassar Digital AI.",
      "Contributed to application functionality, user-facing workflows, and backend integrations.",
      "Worked across frontend and backend components to implement and maintain application features.",
    ],
    type: "professional",
    period: "Present",
    hasDemoAvailable: true,
    hasSourceCode: false,
    demo: "https://mobilewise.vassardigital.ai/splash",
  },

  {
    id: "phone-ai",
    title: "Phone AI",
    techStack: ["GEN AI", "Prompting", "Node.js", "TypeScript", "Django", "Python", "PostgreSQL"],
    shortDescription: "AI-powered phone application focused on intelligent communication experiences.",
    fullDescription: [
      "Worked on Phone AI, an AI-powered application developed at Vassar Digital AI.",
      "Contributed to application workflows and integrations supporting AI-powered communication experiences.",
      "Worked on frontend and backend functionality to improve application reliability and user experience.",
    ],
    type: "professional",
    period: "Present",
    hasDemoAvailable: false,
    hasSourceCode: false,
  },

  {
    id: "ai-cricket-prediction",
    title: "AI Cricket Prediction App",
    techStack: ["React Native", "Expo", "AI/ML"],
    shortDescription: "AI-powered mobile app for cricket match predictions and insights.",
    fullDescription: [
      "Built a mobile application that uses AI-based analysis to provide cricket match predictions and insights.",
      "Developed the application using React Native and Expo for a cross-platform mobile experience.",
      "Designed user flows for viewing match information, predictions, and AI-generated insights."
    ],
    type: "freelance",
    hasDemoAvailable: false,
    hasSourceCode: false,
  },

  {
    id: "hyperlocal",
    title: "HyperLocal",
    techStack: ["React Native", "Expo", "TypeScript"],
    shortDescription: "Hyperlocal mobile app connecting users with nearby businesses and services.",
    fullDescription: [
      "Built a hyperlocal mobile application using React Native and Expo.",
      "Developed mobile workflows for discovering and interacting with nearby businesses and services.",
      "Implemented application screens, navigation, user interactions, and supporting API integrations."
    ],
    type: "freelance",
    hasDemoAvailable: false,
    hasSourceCode: false,
  },

  {
    id: "zippy-routes",
    title: "Zippy Routes",
    techStack: ["React Native", "Expo", "TypeScript"],
    shortDescription: "Mobile application for route and transportation-related services.",
    fullDescription: [
      "Built a cross-platform mobile application using React Native and Expo.",
      "Developed user flows for route-related information and transportation services.",
      "Implemented responsive mobile screens, navigation, and API integrations."
    ],
    type: "freelance",
    hasDemoAvailable: false,
    hasSourceCode: false,
  },

  {
    id: "bus-connect",
    title: "Bus Connect",
    techStack: ["React Native", "Expo", "TypeScript"],
    shortDescription: "Mobile application focused on bus and public transportation connectivity.",
    fullDescription: [
      "Built a cross-platform bus transportation mobile application using React Native and Expo.",
      "Developed mobile workflows for accessing bus and route-related information.",
      "Implemented application screens, navigation, and API integrations for the mobile experience."
    ],
    type: "freelance",
    hasDemoAvailable: false,
    hasSourceCode: false,
  },
  {
    id: "fingrow",
    title: "FinGrow – Personal Finance Tracker",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Jest", "TDD"],
    shortDescription: "Full-stack finance management application.",
    fullDescription: [
      "Developed a full-stack web application to help users manage personal finances effectively.",
      "Developed income and expense tracking, budgeting, and savings goal management features.",
      "Implemented CSV imports and alert notifications for budget limits and savings milestones.",
      "Generated financial reports with filters and followed TDD using Jest for reliable components.",
      "Built React-based frontend with forms for transactions, budgets, savings goals, and dynamic report generation.",
    ],
    type: "professional",
    period: "Sep 2024 – Nov 2024",
    hasDemoAvailable: false,
    github: "https://github.com/USHASRI1112/fingrow",
    hasSourceCode: true,
  },
  {
    id: "grocery-store",
    title: "Grocery Store Web App",
    techStack: ["Vue", "Bootstrap", "Flask", "SQLAlchemy", "Celery", "Redis"],
    shortDescription: "Full-stack app with role-based access control.",
    fullDescription: [
      "A Full-stack app with role-based access control. Admins manage categories, store managers handle products (pending admin approval for deletions and signup).",
      "User-friendly product filtering/search. CRUD operations on categories, products, cart, and orders.",
      "Generate monthly Activity Report and scheduled emails and daily reminders using SMTP, Celery beat scheduler, and Redis caching.",
    ],
    type: "academic",
    github: "https://github.com/USHASRI1112/GROCERY_STORE_CRON_JOBS",
    hasDemoAvailable: false,
    hasSourceCode: true,
  },
];

// Skills Data with icons
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code2",
    skills: [
      { name: "JavaScript", iconName: "js" },
      { name: "TypeScript", iconName: "ts" },
      { name: "Python", iconName: "python" },
      { name: "Java", iconName: "java" },
      { name: "C", iconName: "C" },
      // { name: "Ruby", iconName: "ruby" },
    ],
  },
  {
    title: "Frontend",
    iconName: "Monitor",
    skills: [
      { name: "HTML5", iconName: "html" },
      { name: "CSS3", iconName: "css" },
      { name: "React.js", iconName: "react" },
      { name: "React Native", iconName: "react" },
      // { name: "Vue.js", iconName: "vue" },
      { name: "Figma", iconName: "figma" },
    ],
  },
  {
    title: "Backend",
    iconName: "Server",
    skills: [
      { name: "Node.js", iconName: "nodejs" },
      { name: "Express.js", iconName: "express" },
      { name: "Python Flask", iconName: "flask" },
      { name: "Ruby on Rails", iconName: "rails" },
      { name: "REST APIs", iconName: "api" },
    ],
  },
  {
    title: "Databases",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", iconName: "postgresql" },
      { name: "MongoDB", iconName: "mongodb" },
      { name: "MySQL", iconName: "mysql" },
      // { name: "SQLite", iconName: "sqlite" },
      { name: "Sequelize", iconName: "orm" },
      { name: "Mongoose", iconName: "odm" },
    ],
  },
  {
    title: "DevOps & Cloud",
    iconName: "Cloud",
    skills: [
      { name: "Docker", iconName: "docker" },
      { name: "AWS", iconName: "aws" },
      { name: "CI/CD", iconName: "cicd" },
      { name: "Jenkins", iconName: "jenkins" },
      { name: "GitHub Actions", iconName: "github" },
    ],
  },
  {
    title: "Tools & Practices",
    iconName: "Wrench",
    skills: [
      { name: "Git", iconName: "git" },
      { name: "TDD", iconName: "tdd" },
      { name: "Jest", iconName: "jest" },
      { name: "Socket.io", iconName: "socket" },
      { name: "Stripe", iconName: "stripe" },
      { name: "Agile", iconName: "agile" },
    ],
  },
];

// Certifications Data
export const certifications: Certification[] = [
  {
    id: "aws-ai-practitioner",
    title: "AWS Certified AI Practitioner AIF-C01",
    issuer: "Amazon Web Services",
    issuerLogo: "aws",
    date: "October 2025",
    description: "Basic understanding of AI/ML concepts and AWS AI services.",
  },
  {
    id: "stripe-associate",
    title: "Stripe Certified Associate Developer",
    issuer: "Stripe",
    issuerLogo: "stripe",
    date: "April 2025",
    description: "Covered Stripe APIs, authentication, and payment flows.",
  },
  {
    id: "stripe-professional",
    title: "Stripe Certified Professional Developer",
    issuer: "Stripe",
    issuerLogo: "stripe_pro",
    date: "April 2025",
    description: "Worked on advanced payment logic and integration patterns.",
  },
  {
    id: "stripe-billing",
    title: "Stripe Certified Billing Developer",
    issuer: "Stripe",
    issuerLogo: "stripe_billing",
    date: "April 2025",
    description: "Focused on subscriptions, invoicing, billing lifecycles, and customer flows.",
  },
  {
    id: "azure-dp900",
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    issuerLogo: "azure",
    date: "December 2025",
    description: "Passed with 883 aggregate score. Comprehensive understanding of Azure data services and cloud fundamentals.",
  },
  {
    id: "iit-ml-expertise",
    title: "Machine Learning Techniques Expertise",
    issuer: "IIT Madras",
    issuerLogo: "iit",
    date: "2024",
    description: "Certificate demonstrating expertise in advanced machine learning techniques and methodologies.",
  },
];

// Experience Data

export const experiences: Experience[] = [
  {
    id: "vassar-rd-engineer",
    title: "R&D Engineer-1",
    company: "Vassar Labs / VassarDigital.ai",
    type: "Full-Time",
    period: "May 2024 – Present",
    description: [
      "Work across AI/GenAI, backend engineering, automation, and domain-specific software solutions.",
      "KAVACH: Contribute to railway technology solutions involving engineering data processing, backend workflows, validation pipelines, and system design.",
      "MobilWise: Worked on a drag-and-drop mobile application creation platform that enables users to visually build mobile applications.",
      "Phone AI: Worked on an AI-powered phone proof of concept involving conversational AI, backend integration, and application workflows.",
      "Build and maintain backend services and APIs using Python, Django, and Django REST Framework, with database and data-processing workflows.",
    ],
  },
 {
   id: "purejobs-application-developer",
  title: "Application Developer & Technical Advisor",
    company: "PureJobs Technologies",
    type: "Part-Time",
    period: "January 2026 – Present",
    description: [
      "Working as a part-time Application Developer and Technical Advisor at PureJobs Technologies.",
      "Developed multiple cross-platform mobile applications using React Native and Expo, including an AI-based Cricket Prediction app, HyperLocal, Zippy Routes, and Bus Connect.",
      "Designed and implemented mobile application workflows, reusable components, navigation, and API integrations.",
      "Provided technical guidance on application architecture, development decisions, and technology selection.",
      "Worked across application development and technical consulting to deliver and improve product features."
    ],

  },
  {
    id: "tech-at-core-frontend",
    title: "Frontend Developer",
    company: "Tech at Core",
    type: "Full-Time",
    period: "January 2024 – May 2024",
    description: [
      "Developed responsive and reusable frontend components for internal enterprise applications.",
      "Worked on the T-Beeja HR project, contributing to user interfaces and workflows for internal HR operations.",
      "Contributed to the CRMS Portal by developing frontend features and integrating application interfaces with backend APIs.",
      "Worked with modern JavaScript-based frontend development and component-driven UI architecture.",
    ],
  },
  
  {
    id: "nxtwave",
    title: "Software Development Trainee",
    company: "NxtWave",
    type: "apprenticeship",
    period: "2022 – 2023",
    description: [
      "Developed practical software development skills through hands-on learning and project-based work.",
      "Worked with programming, web development, problem-solving, and software engineering concepts.",
      "Built a strong foundation in frontend and backend development through structured technical learning.",
    ],
  },
  {
    id: "iiith-nlp",
    title: "NLP Research Intern",
    company: "IIIT Hyderabad",
    type: "Internship",
    period: "March 2023 – June 2023",
    description: [
      "Completed a three-month remote internship focused on Natural Language Processing through the Introduction to NLP course.",
      "Curated the Human Annotated Headline Classification Dataset for the Telugu language, gaining practical experience in data annotation and NLP tasks.",
    ],
  },
];

// Education Data
export const education: Education[] = [
  {
    id: "rgukt",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
    period: "2020 – 2024",
    grade: "CGPA: 8.8",
  },
  {
    id: "rgukt-b",
    degree: "PUC in MPC",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Basar",
    period: "2018 – 2020",
    grade: "CGPA: 9.9",
  },
  {
    id: "prs",
    degree: "SSC in MPC",
    institution: "Paramita Group of Instuitions",
    period: "2018",
    grade: "CGPA: 10",
  },
];

// Contact Links
export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "anil.kadurka7@gmail.com",
    href: "mailto:anil.kadurka7@gmail.com",
    iconName: "Mail",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 9346532559",
    href: "tel:+919346532559",
    iconName: "Phone",
  },
  {
    id: "github",
    label: "GitHub",
    value: "ANIL-KADURKA",
    href: "https://github.com/ANIL-KADURKA",
    iconName: "Github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "KADURKA-ANIL",
    href: "https://www.linkedin.com/in/kadurka-anil/",
    iconName: "Linkedin",
  },
];

// Personal Info
export const personalInfo = {
  name: "ANIL KADURKA",
  title: "R&D Engineer-1",
  tagline: "Building scalable, end-to-end solutions that integrate robust backend systems with intuitive, responsive frontends.",
  about: [
    "I'm a Software Engineer at Everest Engineering with a passion for Full Stack Development and AI. I specialize in creating end-to-end solutions that combine robust backend systems with intuitive, responsive frontends.",
    "A natural self-learner, I gain deep expertise through hands-on experience and a trial-and-error approach, ensuring that I truly understand the technologies I work with. I'm highly adaptable, able to quickly grasp and implement new frameworks, languages, and tools.",
    "My goal is to contribute as a full-stack engineer by building scalable solutions while continuously growing into a well-rounded engineer who can bridge the gap between software development and data-driven insights.",
  ],
  interests: [
    "Full Stack Development",
    "Artificial Intelligence",
    "System Design",
    "Clean Architecture",
  ],
};
