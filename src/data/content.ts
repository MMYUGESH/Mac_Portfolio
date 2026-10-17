export type Project = {
  title: string
  description: string
  tech: string[]
  period?: string
  company?: string
  link?: string
}

export type ExperienceSection = {
  title: string
  icon: string
  bullets: string[]
}

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  icon: string
  location?: string
  employmentType?: string
  summary?: string
  sections?: ExperienceSection[]
  highlights: string[]
  skills?: string[]
}

export const KADAL_STUDIO = {
  title: 'Kadal',
  subtitle: 'AI product studio · Chennai',
  description:
    'Kadal is an AI product studio portfolio I co-built with a colleague — our own products, experiments, and case studies shipped end to end, from agents and infrastructure to interfaces.',
}

export type ResearchProject = {
  title: string
  description: string
  tech: string[]
}

export const PROFILE = {
  name: 'Yugesh M M',
  shortName: 'Yugesh',
  initials: 'YM',
  role: 'AI Product Engineer · Full-Stack Developer',
  tagline: 'AI Product Engineer · Full-Stack Developer',
  headline: 'I build AI products end to end — and ship them to production.',
  bio: `I build AI products end to end — from intelligent agents and backend infrastructure to full-stack interfaces — and ship them to production. Currently at Qualkode Technologies, building production AI across Blush, MessageBlue, Toldo, and Lana.`,
  email: 'mmyugesh@gmail.com',
  phone: '+91 9677279963',
  linkedin: 'https://www.linkedin.com/in/yugesh-m-m-246a67161/',
  github: 'https://github.com/MMYUGESH',
  resumePath: '/Yugesh_Resume.pdf',
  location: 'Chennai, India',
  currentRole: 'Software Engineer @ Qualkode Technologies',
  currentProducts: 'Blush · MessageBlue · Toldo · Lana',
  education: 'M.Tech Artificial Intelligence · SRM (2025–2027)',
  openToWork: true,
  openToRoles:
    'AI Product Engineering, AI Engineer, Full-Stack Developer — Chennai, or remote (India / US / Canada / Dubai (UAE) / EU teams).',
}

export const IMPACT_HIGHLIGHTS = [
  {
    area: 'AI Engineering',
    detail:
      'Agents with LangChain, LLMs, RAG, vector search, persistent memory, and durable agent task loops.',
  },
  {
    area: 'AI Observability',
    detail: 'Langfuse for prompt management, tracing, and evaluation workflows.',
  },
  {
    area: 'Real-Time AI',
    detail:
      'Live-call transcription & AI assistance — Twilio Media Streams, WebSockets, AssemblyAI, Firebase, Firestore.',
  },
  {
    area: 'Messaging & Integrations',
    detail:
      'Twilio, iMessage/SendBlue, AppleScript, HubSpot, Close, Attio, GoHighLevel, Microsoft Teams, Zapier.',
  },
  {
    area: 'Computer Vision & Automation',
    detail:
      'Appium mobile automation and vision/LLM pipelines — extract & normalize profile data to MongoDB & Firestore.',
  },
  {
    area: 'Full-Stack Engineering',
    detail:
      'React, TypeScript, Node.js, Fastify, Express, Firebase Functions, REST, tRPC, database optimization.',
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'qualkode',
    company: 'Qualkode Technologies',
    icon: '⚡',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    location: 'United States · Remote',
    employmentType: 'Full-time',
    summary:
      'Building production AI products for Blush (VIP matchmaking) and its product group: MessageBlue, Toldo, and Lana.',
    skills: ['MongoDB', 'TypeScript', 'LangChain', 'React', 'Node.js', 'Firebase', 'Cloudflare Workers'],
    sections: [
      {
        title: 'BLUSH — production AI agents & CRM',
        icon: '🤖',
        bullets: [
          'Stabilized Twilio and iMessage (SendBlue) messaging: webhooks, inbound validation, group/1:1 chats, logging, Langfuse observability.',
          'Fixed matchmaker scheduling, profile chat, and outbound calling bugs across Firebase Functions and React.',
          'Built Appium automation for Bumble, Tinder, and Hinge profile capture.',
          'Integrated computer vision and LLM extraction to normalize profiles into MongoDB/Firestore for rating, deduplication, and review.',
          'Built live-call dashboards using Twilio Media Streams, WebSockets, AssemblyAI transcription, Firestore, and Langfuse AI suggestions.',
        ],
      },
      {
        title: 'LANA — iMessage AI assistant',
        icon: '💬',
        bullets: [
          'Implemented user deletion, referral invites, iMessage routing, webhook debugging, conversation filters, and group-chat UX.',
          'Automated Apple Messages.app via AppleScript and System Events — iMessages, Tapbacks, typing indicators, read receipts, group chats on distributed Mac agents.',
        ],
      },
      {
        title: 'MESSAGEBLUE — iMessage API for AI agents',
        icon: '📡',
        bullets: [
          'Integrated iMessage with HubSpot, Close, Attio, GoHighLevel, and Microsoft Teams.',
          'Co-developed AI agents: RAG, vector search, persistent conversation memory, voice-note replies, durable agent task loops.',
          'Delivered Swagger/Postman API docs, Zapier automation, HubSpot VoIP via Chrome extension and Node.js bridge.',
        ],
      },
      {
        title: 'TOLDO — no-code AI assistant builder',
        icon: '☁️',
        bullets: [
          'Engineered end-to-end features for a no-code AI assistant builder.',
          'Built serverless features on Cloudflare Workers, Durable Objects, and D1.',
          'Developed chat-to-creation workflows and publishing to Web, Slack, Telegram, and Teams.',
        ],
      },
    ],
    highlights: [],
  },
  {
    id: 'fifth',
    company: 'The Fifth Element Consultancy',
    icon: '🎨',
    role: 'Frontend Developer',
    period: 'Mar 2025 – May 2025',
    location: 'Dubai, UAE · Remote',
    employmentType: 'Freelance',
    skills: ['Next.js', 'React.js', 'Redux Toolkit'],
    highlights: [
      'Led frontend for multiple interactive education portals — responsive, accessible, high-performance UIs.',
      'Architected and shipped an AI-powered automated resume generation tool with intelligent data processing and dynamic CV formatting.',
      'Delivered rapid features in a 3-month timeline with clean, scalable code.',
      'Migrated legacy education portals from Angular to React — faster rendering and reusable components.',
      'Integrated Redux Toolkit (RTK) for centralized state and streamlined API patterns.',
    ],
  },
  {
    id: 'clubits',
    company: 'cluBITS Solutions',
    icon: '🔧',
    role: 'Full-stack Developer',
    period: 'Sep 2023 – Mar 2025',
    location: 'India',
    employmentType: 'Full-time',
    skills: ['TypeScript', 'Fastify', 'React', 'tRPC', 'Prisma', 'SQL Server'],
    highlights: [
      'Designed and developed scalable web applications using React and Fastify/Express.',
      'Built secure, type-safe APIs with tRPC and REST.',
      'Managed relational databases with Prisma ORM and optimized queries in SQL Server.',
      'Created reusable component libraries to standardize UI development.',
      'Integrated Azure AI APIs — image-to-text extraction and email content generation.',
      'Optimized API and React performance; collaborated cross-functionally with documentation.',
    ],
  },
  {
    id: 'ramco',
    company: 'Ramco Systems',
    icon: '🏛️',
    role: 'Analyst Programmer',
    period: 'Jul 2021 – Jun 2023',
    location: 'Chennai, Tamil Nadu · On-site',
    employmentType: 'Full-time',
    skills: ['React.js', 'Storybook', 'SSMS', 'Front-End Development'],
    highlights: [
      'Created a Storybook-based component library to document and showcase UI components.',
      'Implemented stored-procedure logic in SSMS to optimize backend processes.',
      'Contributed to the design system for migrating existing product frontend to React.',
      'Fixed component issues and customized behavior across the design system.',
    ],
  },
]

export const PRODUCTION_PRODUCTS: Project[] = [
  {
    title: 'MessageBlue',
    company: 'Qualkode',
    description:
      'Agent layer for an iMessage API for AI agents — retrieval over customer knowledge, memory, voice notes, tool integrations with safe writes.',
    tech: ['Node.js', 'LLMs', 'RAG', 'WebSocket', 'HMAC'],
    link: 'https://messageblue.ai',
  },
  {
    title: 'Blush',
    company: 'Qualkode',
    description:
      'Production AI agents for VIP matchmaking — client chat, date coordination, call booking, CRM performance (e.g. query optimization at scale).',
    tech: ['LangChain', 'React', 'Node.js', 'Firebase'],
  },
  {
    title: 'Toldo',
    company: 'Qualkode / Kadal',
    description: 'No-code AI assistant builder on Cloudflare — from first commit to paid production.',
    tech: ['Cloudflare Workers', 'LLMs', 'React'],
    link: 'https://toldo.ai/',
  },
  {
    title: 'Lana',
    company: 'Qualkode',
    description: 'iMessage AI product — dashboards, chat UI, and backend integrations.',
    tech: ['React', 'Node.js', 'MongoDB', 'iMessage'],
  },
  {
    title: 'message-blue-web',
    company: 'MessageBlue',
    description: 'Group chat UI, virtual scrolling, analytics, voice notes.',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
]

export const PROJECTS: Project[] = [
  ...PRODUCTION_PRODUCTS,
  {
    title: 'Microservices Communication Platform',
    company: 'cluBITS',
    description: 'Email, SMS, iMessage, notifications, storage, AI content generation.',
    tech: ['Fastify', 'tRPC', 'AWS', 'Azure', 'Prisma'],
    period: '2023',
  },
  {
    title: 'Eligibility Verification',
    company: 'cluBITS',
    description: 'Insurance verification, QR card upload, real-time SSE.',
    tech: ['React', 'TanStack Query', 'tRPC'],
    period: '2024',
  },
]

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: 'EcoGradeML',
    description:
      'Predict food eco-grades (A–E) from Open Food Facts ingredient text — TF-IDF, XGBoost, CORAL, multilingual embeddings, ordinal classification.',
    tech: ['Python', 'XGBoost', 'NLP', 'Embeddings'],
  },
  {
    title: 'Sign Language Recognition',
    description:
      'Video pipeline with pose extraction, temporal CNN-RNN, augmentation & generalization experiments; web API + React UI.',
    tech: ['Computer Vision', 'Python', 'React', 'CNN-RNN'],
  },
  {
    title: 'Chennai 15-Minute City GIS',
    description:
      'GIS web app — isochrone APIs, ward-level accessibility scoring, clustering, LLM-assisted urban planning interface.',
    tech: ['GIS', 'Python', 'LLM', 'React'],
  },
  {
    title: 'AI Assistants & NLP',
    description:
      'LangChain workflows, semantic embeddings, text classification, feature engineering, ML evaluation.',
    tech: ['LangChain', 'LLMs', 'NLP'],
  },
]

export const SKILL_GROUPS = [
  {
    category: 'AI / ML',
    skills: [
      'LLMs',
      'LangChain',
      'RAG',
      'Langfuse',
      'NLP',
      'Computer Vision',
      'Python',
      'Azure AI',
      'Google AI',
    ],
  },
  {
    category: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Redux',
      'Material UI',
      'ShadCN/UI',
      'TanStack Query',
      'TanStack Table',
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      'Node.js',
      'Fastify',
      'Express.js',
      'tRPC',
      'REST APIs',
      'Swagger',
      'Zod',
      'SSE',
      'Firebase Functions',
    ],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQL Server', 'Azure SQL', 'Prisma ORM', 'Firestore'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Azure', 'AWS SES', 'AWS SNS', 'Docker', 'Cloudflare Workers', 'Firebase'],
  },
  {
    category: 'Automation & Testing',
    skills: ['Cypress', 'Appium', 'Nightwatch'],
  },
  {
    category: 'Integrations & Messaging',
    skills: [
      'Twilio',
      'AssemblyAI',
      'iMessage',
      'AppleScript',
      'HubSpot',
      'Attio',
      'GoHighLevel',
      'Microsoft Teams',
      'Zapier',
    ],
  },
  {
    category: 'Dev Tools & Workflow',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'Jira', 'Chrome DevTools', 'React DevTools'],
  },
]

/** Top ticker — skills & production tech (scrolls horizontally). */
export const MARQUEE_PHRASES = [
  'LLMs',
  'LangChain',
  'RAG',
  'React',
  'TypeScript',
  'Node.js',
  'tRPC',
  'Fastify',
  'Prisma',
  'MongoDB',
  'Azure',
  'AWS',
  'Cypress',
  'Appium',
  'Swagger',
  'TanStack Query',
  'Docker',
  'Langfuse',
  'Firebase',
  'Cloudflare Workers',
]

export const STUDIO_STACK_TAGS = [
  'LLMs',
  'LangChain',
  'RAG',
  'React',
  'TypeScript',
  'Node.js',
  'AI Agents',
]

export const LINKS = {
  messageblue: 'https://messageblue.ai',
  assistant: 'https://messageblue.kadal.cc/build/agt_fqd0ssbwx5tmkagx',
  toldo: 'https://toldo.ai/',
  kadalWork: 'https://work.kadal.cc/',
  kadalHome: 'https://kadal.cc/',
}
