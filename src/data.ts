export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  video?: string;
  comingSoon?: boolean;
  featured?: boolean;
  portrait?: boolean;
};

export const profile = {
  name: "Wiem Koussani",
  role: "Software Engineer · AI Specialist",
  experience: "3+ years",
  photo: "/images/wiem-koussani.png",
  email: "wiem.koussani@ensi-uma.tn",
  linkedin: "https://www.linkedin.com/in/wiem-koussani-35054a28a/",
  github: "https://github.com/wiemkoussani",
  summary:
    "I design and ship intelligent systems that turn complex data into clear decisions — from private-equity copilots and industrial platforms to real-time computer vision.",
};

export const projects: Project[] = [
  {
    id: "orch",
    title: "Private Equity AI Copilot",
    tagline: "One conversational layer across the entire PE platform",
    description:
      "An AI chatbot embedded in a private equity platform that covers every core module — deals, funds, investors, contacts, and fundraising. Teams can edit and download reports, ask questions about the current document or an external one, and receive answers enriched with graphs, diagrams, and structured insights.",
    highlights: [
      "Full coverage of deal, fund, investor, contact & fundraising modules",
      "Edit and download reports directly from the conversation",
      "Document Q&A on present or external files",
      "Visual answers with graphs and diagrams",
    ],
    stack: ["Spring Boot", "Spring AI", "Angular", "MySQL"],
    video: "/videos/orch.webm",
    featured: true,
  },
  {
    id: "stock",
    title: "Stock Management System",
    tagline: "From production demand to warehouse operations",
    description:
      "An end-to-end stock management application that orchestrates the full flow — from production demand through warehouse processing. It handles entries, exits, cleaning workflows, and first- and second-level operations so inventory stays accurate and actionable.",
    highlights: [
      "Production demand to warehouse pipeline",
      "Entries, exits & cleaning workflows",
      "First- and second-level processing",
      "Operational visibility across the stock lifecycle",
    ],
    stack: ["Next.js", "Supabase"],
    video: "/videos/stock-management.mp4",
  },
  {
    id: "media",
    title: "Multilingual Content Studio",
    tagline: "YouTube videos → publish-ready social & articles",
    description:
      "An AI media pipeline that turns YouTube videos into multilingual content ready for LinkedIn, Twitter/X, and long-form articles. It extracts meaning from video, adapts tone per platform, and generates publishable copy at scale.",
    highlights: [
      "Source content from YouTube videos",
      "Multilingual generation for global reach",
      "Platform-tuned posts for LinkedIn & Twitter/X",
      "Article-length drafts from the same source",
    ],
    stack: ["Next.js", "Supabase", "AI / NLP"],
    video: "/videos/media.mp4",
  },
  {
    id: "roadbud",
    title: "RoadBud — Drowsiness Detection",
    tagline: "Real-time driver assistance with nearby stations",
    description:
      "A real-time drowsiness detection app that assists drivers and surfaces the nearest stations when risk is detected. Detection fuses YOLOv5 vision, Wav2Vec2 audio analysis, and BLE heart-rate signals from smartwatches for a robust multimodal alert system.",
    highlights: [
      "Real-time drowsiness detection",
      "Nearest station assistance for the driver",
      "YOLOv5 + Wav2Vec2 multimodal fusion",
      "BLE heart-rate from smartwatches",
    ],
    stack: ["Flutter", ".NET", "Machine Learning"],
    video: "/videos/roadbud.mp4",
    portrait: true,
  },
  {
    id: "wini-maint",
    title: "Wini_Maint",
    tagline: "Industrial maintenance — planning, stock & field ops",
    description:
      "A mobile and web GMAO solution for industrial maintenance providers. It optimizes planning, tracking, and traceability of technical interventions while connecting technicians, the maintenance team, and leadership — with stock, quotes, live geolocation, and reporting.",
    highlights: [
      "Interventions, planning & technician geolocation",
      "Stock, spare parts & critical alerts",
      "Quotes with PDF export",
      "Dashboards, CSV/PDF reporting & offline sync",
    ],
    stack: ["Flutter", "Supabase"],
    video: "/videos/wini.mp4?v=4",
    portrait: true,
  },
];

export const skills = {
  "Artificial Intelligence": [
    "Machine Learning",
    "Computer Vision",
    "NLP / LLMs",
    "Generative AI",
    "RAG & AI Agents",
    "Multimodal AI",
  ],
  "Backend & Data": [
    "Spring Boot",
    "Spring AI",
    ".NET",
    "MySQL",
    "MongoDB",
    "Supabase",
    "REST APIs",
  ],
  "Frontend & Mobile": ["Next.js", "Angular", "React", "Flutter", "TypeScript"],
  Practices: ["System Design", "Product Thinking", "End-to-end Delivery"],
};
