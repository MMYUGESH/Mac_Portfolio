export type Project = {
  title: string
  description: string
  tech: string[]
  period?: string
  company?: string
  link?: string
}

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  highlights: string[]
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
  role: 'Software Engineer · AI Products',
  tagline: 'LLMs · Agents · RAG · Full-Stack · Ship to production',
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
    'AI Product Engineering, AI Engineer, Senior Full-Stack — Chennai, Dubai (UAE), or remote (India / US / EU teams).',
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
    role: 'Software Engineer',
    period: 'Present',
    highlights: [
      'Production AI for Blush (VIP matchmaking), MessageBlue, Toldo, and Lana',
      'LangChain agents, RAG, Langfuse observability, real-time voice AI',
      'iMessage API layer, CRM integrations, full-stack product delivery',
      'Team studio portfolio: Kadal — see work.kadal.cc',
    ],
  },
  {
    id: 'fifth',
    company: 'The Fifth Element Consultancy',
    role: 'Frontend Developer (Freelance)',
    period: 'Mar – May 2025 · Dubai (Remote)',
    highlights: ['Production React interfaces for international clients'],
  },
  {
    id: 'clubits',
    company: 'cluBITS Solutions',
    role: 'Full Stack Developer',
    period: 'Sep 2023 – Mar 2025',
    highlights: [
      'Scalable web apps, AI-powered tools, reusable UI libraries',
      'Microservices comms, eligibility verification, HRMS',
      'Azure AI & Google AI in production',
    ],
  },
  {
    id: 'ramco',
    company: 'Ramco Systems',
    role: 'Analyst Programmer',
    period: 'Jul 2021 – Jun 2023',
    highlights: ['Enterprise applications and backend services at scale'],
  },
]

export const PRODUCTION_PRODUCTS: Project[] = [
  {
    title: 'MessageBlue',
    company: 'Qualkode / Kadal client work',
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
    skills: ['LLMs', 'LangChain', 'RAG', 'NLP', 'Computer Vision', 'Python', 'Langfuse'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'MUI', 'ShadCN'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Fastify', 'Express', 'tRPC', 'REST', 'Firebase Functions'],
  },
  {
    category: 'Data & Cloud',
    skills: ['MongoDB', 'Firestore', 'SQL', 'Prisma', 'Cloudflare Workers', 'Azure', 'AWS'],
  },
  {
    category: 'Integrations',
    skills: ['Twilio', 'AssemblyAI', 'HubSpot', 'Attio', 'Teams', 'Zapier', 'iMessage'],
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
  'AI Agents',
  'tRPC',
  'Fastify',
  'MongoDB',
  'Langfuse',
  'Computer Vision',
  'MessageBlue',
  'Toldo',
  'Blush',
  'Lana',
  'Python',
  'NLP',
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
