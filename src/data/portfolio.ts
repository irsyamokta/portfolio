import {
  Database,
  Server,
  Boxes,
  Sparkles,
  Code2,
  Wrench,
} from "lucide-react";

import visitbapen1 from "@/assets/thumbnail/visitbapen/1.png";
import visitbapen2 from "@/assets/thumbnail/visitbapen/2.png";
import visitbapen3 from "@/assets/thumbnail/visitbapen/3.png";

import gabara1 from "@/assets/thumbnail/gabara/1.png";
import gabara2 from "@/assets/thumbnail/gabara/2.png";
import gabara3 from "@/assets/thumbnail/gabara/3.png";

import neuroinsight1 from "@/assets/thumbnail/neuroinsight/1.png";
import neuroinsight2 from "@/assets/thumbnail/neuroinsight/2.png";

import soetala1 from "@/assets/thumbnail/soetala/1.png";

import scala1 from "@/assets/thumbnail/scala/1.png";
import scala2 from "@/assets/thumbnail/scala/2.png";
import scala3 from "@/assets/thumbnail/scala/3.png";

import puspo1 from "@/assets/thumbnail/puspo/1.png";
import puspo2 from "@/assets/thumbnail/puspo/2.png";
import puspo3 from "@/assets/thumbnail/puspo/3.png";

import intera1 from "@/assets/thumbnail/intera/1.png";
import intera2 from "@/assets/thumbnail/intera/2.png";

import sipbangdes1 from "@/assets/thumbnail/sipbangdes/1.png";
import sipbangdes2 from "@/assets/thumbnail/sipbangdes/2.png";
import sipbangdes3 from "@/assets/thumbnail/sipbangdes/3.png";
import sipbangdes4 from "@/assets/thumbnail/sipbangdes/4.png";
import sipbangdes5 from "@/assets/thumbnail/sipbangdes/5.png";
import sipbangdes6 from "@/assets/thumbnail/sipbangdes/6.png";

import softlynest1 from "@/assets/thumbnail/softlynest/1.png";

import logoTsg from "@/assets/companies/logo-tsg.jpg";
import logoBangkit from "@/assets/companies/logo-bangkit.jpg";
import logoMager from "@/assets/companies/logo-mager.jpg";
import logoPuspo from "@/assets/companies/logo-puspo.png";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "workflow", label: "Workflow" },
  { id: "contact", label: "Contact" },
];

export const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Fullstack Development",
    text: "Building end-to-end web applications — from REST APIs and business logic to responsive, interactive UIs.",
  },
  {
    icon: Boxes,
    title: "ERP Solutions",
    text: "Implementing and customizing Odoo modules for real-world business workflows and operations.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    text: "Embedding Gemini and ML models into products to automate decisions, reporting, and user experiences.",
  },
  {
    icon: Database,
    title: "Business Information Systems",
    text: "Turning operational requirements into maintainable, scalable software that solves real problems.",
  },
];

export type Project = {
  n: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  image: string;
  accent: string;
  previews: string[];
  demo?: string;
  github?: string;
  year: string;
  contributors?: string[];
};

export const PROJECTS: Project[] = [
  {
    n: "01",
    contributors: ["Muhammad Agam Nasywaan (UI/UX)"],
    year: "2025",
    title: "VisitBapen",
    tagline: "Digital tourism information platform for Banjarpanepen Tourism Village",
    description: "A digital tourism information platform for Banjarpanepen Tourism Village, designed to promote local destinations, culture, activities, and village potential through an accessible and modern web experience.",
    stack: ["React", "Tailwind CSS", "Vite", "TypeScript", "Laravel", "MySQL"],
    problem: "Banjarpanepen Village has various tourism potentials, cultural activities, and local attractions, but limited digital presence makes it difficult for tourists to discover available destinations, facilities, and tourism programs.",
    solution: "Developed a digital tourism platform that centralizes information about destinations, tourism packages, village activities, and facilities.",
    features: [
      "Village Information Homepage",
      "Tourism Gallery",
      "Articles and Agenda",
      "Contact and Location",
      "Tour Package Management",
      "Tourism Destination Management",
      "Article Management",
      "Village Agenda Management",
      "Facility and Benefit Management",
      "Responsive Design"
    ],
    architecture: "Frontend: React, Tailwind CSS, Vite, TypeScript | Backend: Laravel, MySQL | API: REST API with Laravel Sanctum Authentication",
    image: visitbapen1,
    accent: "from-sky-500/20 to-transparent",
    previews: [visitbapen1, visitbapen2, visitbapen3],
    demo: "https://visitbapen.com",
    github: "https://github.com/irsyamokta/frontend-banjarpanepen"
  },
  {
    n: "02",
    year: "2025",
    title: "Gabara",
    tagline: "Garasi Belajar Banjarnegara Learning Management System",
    description: "A Learning Management System (LMS) platform designed to provide accessible and structured digital learning opportunities for school dropouts from elementary to high school levels.",
    stack: ["Laravel 12", "React 19", "Inertia.js", "MySQL"],
    problem: "Many school dropouts face difficulties in continuing their education due to limited access to learning resources, guidance, and structured educational environments.",
    solution: "Developed an LMS platform that provides an interactive and structured learning environment with dedicated roles for students, mentors, and administrators.",
    features: [
      "Homepage",
      "User Roles (Student, Mentor, Admin)",
      "Authentication System",
      "Role Management",
      "Dashboard",
      "Profile Management",
      "Learning Management"
    ],
    architecture: "Backend: Laravel 12 | Frontend: React 19 | Integration: Inertia.js | Database: MySQL | Authentication: Laravel Breeze | Authorization: Spatie | Storage: Cloudinary",
    image: gabara1,
    accent: "from-indigo-500/20 to-transparent",
    previews: [gabara1, gabara2, gabara3],
    demo: "https://garasibelajar.com/",
    github: "https://github.com/irsyamokta/gabara"
  },
  {
    n: "03",
    contributors: ["Muhamad Agam Nasywaan (UI/UX)", "Diva Dita Nara (Data Analyst)"],
    year: "2025",
    title: "NeuroInsight",
    tagline: "An interactive web-based medical imaging platform for brain tumors",
    description: "An interactive web-based medical imaging platform that assists radiologists in classifying brain tumors from MRI images using a Deep Learning-based Convolutional Neural Network (CNN) model.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "FastAPI", "CNN"],
    problem: "The process of analyzing brain MRI images requires expertise and extensive time from radiologists to identify tumor patterns accurately.",
    solution: "Developed an AI-powered web platform that automatically classifies brain MRI images into four categories: Glioma, Meningioma, Pituitary, and No Tumor.",
    features: [
      "Automatic Brain Tumor Classification",
      "CNN-Based Detection",
      "Interactive Web Demo",
      "Radiologist Support System"
    ],
    architecture: "Frontend: React, TypeScript, Tailwind CSS, Vite | Backend: FastAPI | ML: Convolutional Neural Network (CNN) | Deployment: Railway",
    image: neuroinsight1,
    accent: "from-purple-500/20 to-transparent",
    previews: [neuroinsight1, neuroinsight2],
    demo: "https://neuroinsightapp.vercel.app",
    github: "https://github.com/irsyamokta/frontend-neuroinsight"
  },
  {
    n: "04",
    year: "2025",
    title: "Soetala",
    tagline: "Soedirman Digital Art & Event Ticketing",
    description: "An interactive digital platform that preserves and introduces the historical journey of Panglima Besar Jenderal Soedirman through modern digital experiences.",
    stack: ["React 19", "Tailwind CSS", "TypeScript", "Inertia.js", "Laravel", "MySQL"],
    problem: "Historical education about national heroes is often presented through conventional media, making it less engaging for younger generations.",
    solution: "Developed Soetala as a digital platform that transforms historical storytelling into a more interactive and accessible experience.",
    features: [
      "Landing Page",
      "Event Management",
      "Ticketing System",
      "Merchandise Management",
      "Payment Gateway Integration",
      "Real-Time Ticket Scanning"
    ],
    architecture: "Frontend: React 19, Tailwind CSS, TypeScript, Vite, Inertia.js | Backend: Laravel | Database: MySQL | Storage: Cloudinary | Authorization: Spatie",
    image: soetala1,
    accent: "from-amber-500/20 to-transparent",
    previews: [soetala1],
    demo: "https://soetala.id",
    github: "https://github.com/irsyamokta/soetala"
  },
  {
    n: "05",
    contributors: ["Muhammad Agam Nasywaan (UI/UX)"],
    year: "2025",
    title: "Scala",
    tagline: "Screening Kesehatan Mental Lintas Usia",
    description: "A digital mental health screening platform designed to provide accessible and structured early detection of psychological conditions across different age groups.",
    stack: ["Laravel 12", "React 19", "Inertia.js", "MySQL"],
    problem: "Access to mental health screening services remains limited, causing many individuals to be unaware of their psychological conditions at an early stage.",
    solution: "Developed SCALA as a web-based mental health screening platform that enables users to perform early psychological assessments independently.",
    features: [
      "Landing Page",
      "Multi-Role System (Admin, School, Family, Public, Psychologist)",
      "Validated Mental Health Instruments",
      "Mental Health Screening",
      "Screening History",
      "Recommendation & Follow-Up",
      "Dashboard",
      "Data Management"
    ],
    architecture: "Backend: Laravel 12 | Frontend: React 19 | Integration: Inertia.js | Database: MySQL | Auth: Laravel Breeze, Spatie | Storage: Cloudinary",
    image: scala1,
    accent: "from-emerald-500/20 to-transparent",
    previews: [scala1, scala2, scala3],
    demo: "https://sipendekar.com",
    github: "https://github.com/irsyamokta/scala"
  },
  {
    n: "06",
    contributors: ["Sukmadiningtyas (Project Manager)", "Khairun Nisa Meiah Ngafidin (Finance)", "Sisilia Thya Safitri (Marketing)"],
    year: "2026",
    title: "Puspo Aesthetic Clinic",
    tagline: "An integrated clinic management system built with Odoo ERP",
    description: "An integrated clinic management system built with Odoo ERP to optimize digital services, customer engagement, inventory control, appointment scheduling, and operational management.",
    stack: ["Odoo ERP"],
    problem: "Puspo Aesthetic Clinic requires an integrated system to manage various business processes such as customer inquiries, appointment scheduling, product inventory, and clinic operations.",
    solution: "Implemented an Odoo-based ERP system that integrates multiple clinic operations into a single platform.",
    features: [
      "Website",
      "Live Chat",
      "Manufacturing Management",
      "Inventory Management",
      "Appointment Management",
      "WhatsApp Integration"
    ],
    architecture: "Platform: Odoo ERP | Modules: Website, Live Chat, Manufacture, Inventory, Appointments, WhatsApp | Deployment: Web-based ERP System",
    image: puspo1,
    accent: "from-rose-500/20 to-transparent",
    previews: [puspo1, puspo2, puspo3],
    demo: "https://puspoclinic.com"
  },
  {
    n: "07",
    contributors: ["Jaiz Cahya Prasetya"],
    year: "2026",
    title: "Intera",
    tagline: "International Tourism Exchange Application",
    description: "A cross-border tourism information platform designed to connect and promote tourism destinations between Ohnan Town, Japan and Banjarnegara Regency, Indonesia.",
    stack: ["Laravel 12", "React 19", "Inertia.js", "MySQL"],
    problem: "Tourism information across different regions and countries is often scattered across various platforms, making it difficult for travelers to discover accurate destination information.",
    solution: "Developed INTERA as a centralized tourism information system that integrates destination data from multiple regions into a single platform.",
    features: [
      "Interactive Landing Page",
      "Tourism Search",
      "Sorting & Filtering",
      "AI Chatbot Integration",
      "Tourism Information Management"
    ],
    architecture: "Backend: Laravel 12 | Frontend: React 19 | Integration: Inertia.js | Database: MySQL | Auth: Laravel Breeze, Spatie | Storage: Cloudinary",
    image: intera1,
    accent: "from-cyan-500/20 to-transparent",
    previews: [intera1, intera2],
    demo: "https://interatourism.com",
    github: "https://github.com/irsyamokta/intera"
  },
  {
    n: "08",
    year: "2026",
    title: "Sipbangdes",
    tagline: "Sistem Perencanaan Anggaran Pembangunan Desa",
    description: "A digital budgeting and project planning platform designed to simplify village development planning through integrated RAB management, automated reporting, and collaborative approval workflows.",
    stack: ["Laravel 12", "React 19", "Inertia.js", "MySQL"],
    problem: "The process of preparing village development budgets, especially Rencana Anggaran Biaya (RAB), is still commonly performed manually using spreadsheets.",
    solution: "Developed SIPBANGDES as a web-based budget planning system that digitizes the entire RAB preparation process.",
    features: [
      "Integrated RAB Management",
      "Master Data Management",
      "Automatic PDF Generation",
      "AI-Powered Insights",
      "Project Progress Monitoring",
      "Multi-User Collaboration",
      "Approval Workflow",
      "Budget Tracking",
      "PWA"
    ],
    architecture: "Backend: Laravel 12 | Frontend: React 19 | Integration: Inertia.js | Database: MySQL | Auth: Laravel Breeze, Spatie | Storage: Cloudinary",
    image: sipbangdes1,
    accent: "from-blue-500/20 to-transparent",
    previews: [sipbangdes1, sipbangdes2, sipbangdes3, sipbangdes4, sipbangdes5, sipbangdes6],
    demo: "https://demo.sipbangdes.com",
    github: "https://github.com/irsyamokta/sipbangdes"
  },
  {
    n: "09",
    contributors: ["Alya' Syaninnaqia Fauziyyah (Project Owner)"],
    year: "2026",
    title: "Softlynest",
    tagline: "A mental wellness community platform",
    description: "A mental wellness community platform designed to provide a safe digital space for individuals experiencing anxiety to connect, share experiences, exchange coping strategies, and support each other.",
    stack: ["React 19", "TanStack Query", "Supabase", "PWA"],
    problem: "Individuals experiencing anxiety often face difficulties in finding supportive communities where they can openly share their feelings, experiences, and coping strategies.",
    solution: "Developed Softlynest as a community-based mental wellness platform that enables users to connect, share stories, and support each other through social interactions.",
    features: [
      "Post Feed",
      "Real-Time Messaging",
      "Notification System",
      "Like & Comment",
      "Favorite",
      "Follow & Unfollow",
      "Multimedia Sharing",
      "Progressive Web App (PWA)"
    ],
    architecture: "Frontend: React 19 | Data Fetching: TanStack Query | Backend & Database: Supabase | Storage: Cloudinary | Application Type: PWA",
    image: softlynest1,
    accent: "from-violet-500/20 to-transparent",
    previews: [softlynest1],
    demo: "https://softlynest.pratamaryd.space",
    github: "https://github.com/irsyamokta/softlynest"
  }
];

export const TECH = [
  {
    group: "Backend",
    icon: Server,
    items: ["Node.js", "TypeScript", "Express", "PHP", "Laravel", "Python", "Prisma ORM", "Supabase", "Railway"],
  },
  { group: "Frontend", icon: Code2, items: ["React", "Shadcn UI", "Tailwind CSS", "TypeScript", "Vite"] },
  { group: "Database", icon: Database, items: ["MySQL", "PostgreSQL"] },
  { group: "ERP", icon: Boxes, items: ["Odoo Functional", "Odoo Technical"] },
  {
    group: "Artificial Intelligence",
    icon: Sparkles,
    items: ["Deep Learning", "Sentiment Analysis", "Supervised Learning"],
  },
  { group: "Tools", icon: Wrench, items: ["Docker", "Figma", "Git", "GitHub", "Google Colab", "n8n", "Netlify", "Postman", "Vercel"] },
];

export const EXPERIENCE = [
  {
    period: "Aug 2024 — Dec 2024",
    role: "Backend Developer",
    org: "PT Tristar Surya Gemilang",
    location: "Bekasi, West Java · Remote (PKWT)",
    logo: logoTsg,
    text: "Developed E-Office and Hospital Management Information System (HMIS) applications based on Odoo ERP. Collaborated with technical and functional teams for requirement analysis, feature development, and code management using GitLab.",
  },
  {
    period: "Sep 2024 — Jan 2025",
    role: "Cloud Computing Cohort",
    org: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
    location: "Jakarta · MSIB Program",
    logo: logoBangkit,
    text: "Developed RESTful APIs using Express.js and FastAPI for ML models. Built CI/CD pipelines via Cloud Build on GitHub, deployed to Cloud Run on GCP, and managed access with Cloud IAM.",
  },
  {
    period: "Jul 2025 — Oct 2025",
    role: "Backend Developer",
    org: "PT MagerCoding Digital Indonesia",
    location: "Purwokerto, Central Java · Hybrid (Paid Internship)",
    logo: logoMager,
    text: "Developed the backend for Koupii Learning Management System (LMS) for a client from Vietnam. Responsible for building RESTful APIs using Laravel and integrating with the frontend to ensure the system meets requirements.",
  },
  {
    period: "Feb 2026 — Jul 2026",
    role: "Odoo Implementor",
    org: "PT Klinik Inovasi Indonesia (Puspo Aesthetic Clinic)",
    location: "Purwokerto, Central Java · Hybrid (PKWT)",
    logo: logoPuspo,
    text: "Implemented Odoo ERP solutions to support aesthetic clinic operations, including Website, Appointment, Live Chat, Manufacturing, Inventory, and WhatsApp Integration modules.",
  },
];

export const WORKFLOW = [
  {
    step: "01",
    title: "Database & Schema Design",
    sub: "Data modeling & indexing",
    icon: Database,
    deliverable: "SQL Schema & Entity-Relationship Diagrams",
    desc: "Designing structured relational layouts, setting precise constraints, and creating index strategies to ensure high-performance query execution before writing code.",
  },
  {
    step: "02",
    title: "API & Core Business Logic",
    sub: "RESTful endpoints & authorization",
    icon: Server,
    deliverable: "REST/FastAPI Documentation & Test Suites",
    desc: "Developing decoupled business engines using Laravel Repositories or Express Services, implementing policy-based guard authorization, and queueing heavy background tasks.",
  },
  {
    step: "03",
    title: "Frontend & User Interface",
    sub: "Responsive layouts & state management",
    icon: Code2,
    deliverable: "Interactive React SPA & Client-side Stores",
    desc: "Building polished web interfaces from design boards, coordinating complex client-server data synchronization with TanStack Query, and crafting fluid micro-interactions.",
  },
  {
    step: "04",
    title: "Deployment & Cloud Infrastructure",
    sub: "Containerization & CI/CD pipelines",
    icon: Server,
    deliverable: "Docker Image, GitHub Actions & Cloud Run URL",
    desc: "Containerizing applications with Docker, building automated CI/CD pipelines via GitHub Actions or Cloud Build, and shipping to Cloud Run or Cloudflare for reliable, zero-downtime delivery.",
  },
];
