export const projects = [
  // NOUVEAU PROJET #1 - ARKCRM (Multi-tenant CRM)
  {
    id: 1,
    title: "ARKCRM - Multi-tenant CRM",
    description: "Enterprise-grade Customer Relationship Management system with multi-tenant architecture. Built with React TypeScript and Spring Boot, featuring role-based access control (RBAC) for admins, clients, and system administrators. Includes comprehensive lead management, sales pipeline tracking, and tenant isolation for secure multi-company usage.",
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "RBAC", "Multi-tenant"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    link: "https://callnest-ui-technical-assignment.onrender.com",
    github: "https://github.com/Kevin-Razafison/ARKCRM_frontend",
    githubBackend: "https://github.com/Kevin-Razafison/ArkCRM_backend",
    videoDemo: "",
    features: [
      "Multi-tenant Architecture with Data Isolation",
      "Role-Based Access Control (Admin, Client, System Admin)",
      "Lead Management & Sales Pipeline Tracking",
      "Real-time Dashboard & Analytics",
      "Secure Authentication & Authorization"
    ]
  },

  // NOUVEAU PROJET #2 - ArkCalendar
  {
    id: 2,
    title: "ArkCalendar",
    description: "Feature-rich calendar application built with Flutter that combines traditional calendar functionality with productivity tools. Allows users to add sticky notes on specific dates, visualize the entire year at a glance, and maintain a running notes section. Perfect for personal organization, task tracking, and date-specific reminders with an intuitive and beautiful interface.",
    technologies: ["Flutter", "Dart", "Local Storage", "Material Design"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com/Kevin-Razafison/calendar-todo-list",
    apkDownload: "https://drive.google.com/file/d/165a3ZirYcAFP0SyT6JN6_NUnhkrJDDI2/view?usp=drive_link",
    videoDemo: "",
    features: [
      "Sticky Notes on Specific Dates",
      "Full Year Calendar Visualization",
      "Bottom Notes Section for Quick Tasks",
      "Intuitive Date Selection & Navigation",
      "Beautiful Material Design Interface"
    ]
  },

  // NOUVEAU PROJET #3 - ArkSpeak Training (AI English Practice)
  {
    id: 3,
    title: "ArkSpeak Training",
    description: "AI-powered English conversation practice app that helps users improve their spoken English through natural conversations. Features real-time voice interaction where the AI initiates conversations and responds naturally. Users can practice with different English accents (American, British, etc.) to develop versatile listening skills. Powered by advanced text-to-speech technology for realistic native speaker voices.",
    technologies: ["Flutter", "Dart", "Cartesia AI", "Grok API", "Speech Recognition", "TTS"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com/Kevin-Razafison/ArkSpeakTraining",
    apkDownload: "https://drive.google.com/file/d/1Q8P5v5jaIuoG68tBu0mGO-hCuHrYOzTM/view?usp=drive_link",
    videoDemo: "",
    features: [
      "Real-time AI Voice Conversation",
      "Multiple English Accents (American, British)",
      "Realistic Native Speaker Voices (Cartesia AI)",
      "Natural Conversation Flow (Grok-powered)",
      "Hands-free Practice - Just Talk!"
    ]
  },

  // PROJETS EXISTANTS
  {
    id: 4,
    title: "Lumen Mall E-Commerce",
    description: "Full-stack e-commerce platform with React.js frontend and Java Spring Boot backend. Features include product catalog, shopping cart, user authentication, and order management with admin dashboard.",
    technologies: ["React.js", "Spring Boot", "PostgreSQL", "REST API", "CSS"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
    link: "https://lumen-mall-client.onrender.com/",
    github: "https://github.com/Kevin-Razafison/Lumen-mall-client",
    githubBackend: "https://github.com/Kevin-Razafison/Lumen-mall-server",
    videoDemo: "",
    features: [
      "User Authentication & Authorization",
      "Product Catalog with Search & Filters",
      "Shopping Cart & Checkout",
      "Admin Dashboard for Product Management",
      "Order Tracking & Management"
    ]
  },
  {
    id: 5,
    title: "ArkChantier BTP Management",
    description: "Construction and Public Works (BTP) management application built with Flutter and Firebase. Manages projects, resources, and team coordination for construction sites.",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com/Kevin-Razafison/ArkChantier",
    apkDownload: "",
    videoDemo: "",
    features: [
      "Project Management Dashboard",
      "Team Coordination & Task Assignment",
      "Resource Tracking",
      "Real-time Updates with Firebase",
      "Offline Support"
    ]
  },
  {
    id: 6,
    title: "Invema Stock Management",
    description: "Complete inventory management system with modern frontend using HTML/CSS/JavaScript and robust backend with Node.js, Express, Prisma ORM, and PostgreSQL. Includes admin dashboard for inventory control.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com/Kevin-Razafison/frontEndInvema",
    githubBackend: "https://github.com/Kevin-Razafison/backEndInvema",
    videoDemo: "",
    features: [
      "Inventory Tracking & Management",
      "Admin Dashboard",
      "Stock Alerts & Notifications",
      "Reports & Analytics",
      "Multi-user Support"
    ]
  },
  {
    id: 7,
    title: "ARK Media Player",
    description: "Cross-platform desktop video player application with modern JavaFX UI. Features playlist management, keyboard shortcuts, and support for multiple video formats. Available for Windows and Linux with professional installers.",
    technologies: ["Java", "JavaFX", "Media API", "MSI", "DEB"],
    category: "Desktop",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    link: "#",
    github: "https://github.com/Kevin-Razafison/ARKMediaPlayer",
    videoDemo: "",
    downloadWindows: "",
    downloadLinux: "",
    features: [
      "Multi-format Video Playback (MP4, AVI, MKV)",
      "Playlist Management",
      "Keyboard Shortcuts",
      "Modern JavaFX Interface",
      "Windows (.msi) & Linux (.deb) Installers"
    ]
  }
];