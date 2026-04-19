import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  whatsapp,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "architecture",
    title: "Architecture",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    id: "fullstack",
    title: "Full Stack Developer",
    icon: web,
  },
  {
    id: "react",
    title: "React.js Specialist",
    icon: mobile,
  },
  {
    id: "dotnet",
    title: "ASP.NET Core Expert",
    icon: backend,
  },
  {
    id: "sql",
    title: "SQL Database Designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ASP.NET Core",
    icon: nodejs, // Placeholder icon
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C#",
    icon: typescript, // Placeholder icon
  },
  {
    name: "SQL Server",
    icon: mongodb, // Placeholder icon
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    id: "freelance",
    title: "Full Stack Developer (Junior)",
    companyName: "Professional Training / Freelance",
    icon: backend, // More relevant icon
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Designed and implemented high-performance desktop and web applications using C# and React.js.",
      "Developed complex administrative systems like DVLD using 3-Layer Architecture for better scalability.",
      "Ensured data integrity and secure transactions in banking simulation projects.",
      "Created modern, responsive user interfaces using Material UI and custom CSS.",
    ],
  },
  {
    id: "diploma",
    title: "Diploma in Computer Science",
    companyName: "National Institute for Administrative Sciences",
    icon: web, // More relevant icon
    iconBg: "#E6DEDD",
    date: "2022 - 2024",
    points: [
      "Focused on software engineering principles, OOP, and database management.",
      "Participated in multiple academic projects involving SQL Server and .NET.",
      "Graduated with a strong foundation in both desktop and web development.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Ayman did a great job on our management system. His attention to detail and architectural knowledge is impressive.",
    name: "Saad Al-Amri",
    designation: "Product Owner",
    company: "Freelance Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const projects: TProject[] = [
  {
    id: "gcorp-ecommerce",
    name: "G-Corp | E-commerce Portfolio",
    description:
      "A curated portfolio of 8 professional e-commerce stores built for clients across Saudi Arabia — covering fashion, perfumes, fabrics, handbags, flowers, and more. Full-service delivery: design, development, and deployment.",
    tags: [
      { name: "e-commerce", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "shopify", color: "pink-text-gradient" },
      { name: "client-work", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop", // E-commerce
    sourceCodeLink: "https://github.com/Aymn-Ahmed",
    liveLink: "https://g-corp-portfolio.vercel.app/",
  },
  {
    id: "communication-hub",
    name: "Enterprise Communication Hub",
    description:
      "A highly extensible Real-time Communication Hub for enterprise systems. I engineered the core messaging engine, integrated dynamic tracking for appointments and messages, and designed a modular framework that allows seamless integration of Support, Inquiry, and Incident Reporting sections.",
    tags: [
      {
        name: "realtime-messaging",
        color: "blue-text-gradient",
      },
      {
        name: "modular-architecture",
        color: "green-text-gradient",
      },
      {
        name: "dotnet-signalr",
        color: "pink-text-gradient",
      },
      {
        name: "extensible-ui",
        color: "orange-text-gradient",
      },
    ],
    image: whatsapp, // WhatsApp-like Chat UI
    sourceCodeLink: "https://github.com/Aymn-Ahmed",
    isCommercial: true,
    price: "Contact for Listing",
    commercialFeatures: [
      "Real-time Messaging Engine (SignalR)",
      "High-Performance Modular Monolith Architecture",
      "Dynamic Tracking (Appointments & Incidents)",
      "White-label Ready (Fully Customizable UI)",
      "Multi-tenant Identity System Support",
      "Complete Source Code & Documentation",
    ],
  },
  {
    id: "invoice-flow",
    name: "InvoiceFlowPro",
    description:
      "A professional Modular Monolith system designed for invoice management, featuring advanced modules for Identity, Tenancy, Billing, and Automated Processing. Built with DDD principles and clean architecture.",
    tags: [
      {
        name: "dotnet-api",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "modular-monolith",
        color: "pink-text-gradient",
      },
      {
        name: "sqlserver",
        color: "orange-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop", // Professional Dashboard
    sourceCodeLink: "https://github.com/Aymn-Ahmed",
  },
  {
    id: "dvld",
    name: "DVLD System",
    description:
      "A comprehensive 3-layer management system for vehicle license services, handling issuance, renewal, and suspension with fine-grained role-based access control.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "sqlserver",
        color: "green-text-gradient",
      },
      {
        name: "3-layer-arch",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data Dashboard UI
    sourceCodeLink: "https://github.com/Aymn-Ahmed",
  },
  {
    id: "banking",
    name: "Banking Simulation",
    description:
      "A secure banking system simulation that replicates core banking operations, account management, and fund transfers using OOP principles and layered architecture.",
    tags: [
      {
        name: "dotnet",
        color: "blue-text-gradient",
      },
      {
        name: "sqlserver",
        color: "green-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop", // Fintech UI
    sourceCodeLink: "https://github.com/Aymn-Ahmed",
  },
  {
    id: "apartment-rental",
    name: "Apartment Rental",
    description:
      "An automated management system for apartments and tenants, managing contracts, payments, and billing cycles with automated business rules.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "dotnet-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop", // Real Estate UI
    sourceCodeLink: "https://github.com/Aymn-Ahmed",
  },
  {
    id: "3d-portfolio",
    name: "3D Personal Portfolio",
    description:
      "A high-end interactive 3D web application designed to showcase professional expertise. Built with high-performance 3D models, dynamic stars background, and smooth Framer Motion animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", // Tech/3D Portfolio
    sourceCodeLink: "https://github.com/Aymn-Ahmed",
  },
];

const projectImages = import.meta.glob(
  "../assets/projects/**/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

const architectureImages = import.meta.glob(
  "../assets/architecture/**/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

export const getProjectScreenshots = (projectId?: string) => {
  if (!projectId) return [];
  return Object.entries(projectImages)
    .filter(([path]) => path.includes(`/projects/${projectId}/`))
    .map(([_, url], i) => ({
      id: i,
      src: url,
      title: `Screenshot ${i + 1}`,
    }));
};

export const getArchitectureDiagrams = (serviceId: string) => {
  return Object.entries(architectureImages)
    .filter(([path]) => path.toLowerCase().includes(`/architecture/${serviceId.toLowerCase()}/`))
    .map(([_, url], i) => ({
      id: i,
      src: url,
      title: `Architecture Diagram ${i + 1}`,
    }));
};

export const architectureDetails: Record<string, { tags: { name: string, color: string }[] }> = {
  fullstack: {
    tags: [
      { name: "modular-monolith", color: "blue-text-gradient" },
      { name: "end-to-end", color: "green-text-gradient" },
      { name: "full-cycle", color: "pink-text-gradient" },
    ],
  },
  react: {
    tags: [
      { name: "atomic-design", color: "blue-text-gradient" },
      { name: "component-driven", color: "green-text-gradient" },
      { name: "responsive-ui", color: "pink-text-gradient" },
    ],
  },
  dotnet: {
    tags: [
      { name: "clean-architecture", color: "blue-text-gradient" },
      { name: "ddd", color: "green-text-gradient" },
      { name: "layers", color: "pink-text-gradient" },
    ],
  },
  sql: {
    tags: [
      { name: "normalization", color: "blue-text-gradient" },
      { name: "indexing", color: "green-text-gradient" },
      { name: "data-integrity", color: "pink-text-gradient" },
    ],
  },
};

export { services, technologies, experiences, testimonials, projects };
