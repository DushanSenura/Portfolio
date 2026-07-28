export type ProjectStatus = 'Live' | 'V2.0 coming soon' | 'Coming soon'

export type Project = {
  slug: string
  title: string
  shortTitle: string
  category: string
  platforms: string[]
  status: ProjectStatus
  summary: string
  introduction: string[]
  technologies: string[]
  features: string[]
  accent: string
  previewLabels: string[]
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'smartdine',
    title: 'SmartDine',
    shortTitle: 'Restaurant operations, reimagined',
    category: 'Restaurant Management',
    platforms: ['Web'],
    status: 'V2.0 coming soon',
    summary:
      'A complete restaurant platform for digital ordering, reservations, kitchen operations, and business insights.',
    introduction: [
      'SmartDine brings the restaurant experience into one connected workspace. Guests can browse a digital menu, place orders, and reserve a table, while staff can manage the kitchen and service flow from a single dashboard.',
      'Version 2.0 is being designed around faster workflows, clearer real-time order tracking, and more useful analytics for restaurant teams.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    features: [
      'QR-based digital menu and ordering',
      'Table reservations and availability',
      'Live kitchen order management',
      'Menu, pricing, and inventory controls',
      'Sales and performance analytics',
      'Role-based staff access',
    ],
    accent: '#ff8a4c',
    previewLabels: ['Operations dashboard', 'Digital menu', 'Kitchen display'],
  },
  {
    slug: 'carenest',
    title: 'CareNest',
    shortTitle: 'Better coordination for senior care',
    category: 'Senior Resident Management',
    platforms: ['Web', 'Mobile app'],
    status: 'Coming soon',
    summary:
      'A resident-centred care management system that connects daily care, health records, staff, and families.',
    introduction: [
      'CareNest is a web and mobile platform built to make senior residence management more organised and compassionate. It gives care teams a shared view of resident details, daily activities, medication, and important updates.',
      'The mobile experience supports staff during daily rounds, while the web dashboard provides administrators with the wider operational picture.',
    ],
    technologies: [
      'React (Web)',
      'React Native (Mobile)',
      'Expo',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    features: [
      'Resident profiles and care plans',
      'Medication schedules and reminders',
      'Staff tasks and shift coordination',
      'Health notes and incident records',
      'Family updates and communication',
      'Web and mobile experiences',
    ],
    accent: '#55d6a5',
    previewLabels: ['Care overview', 'Resident profile', 'Mobile care plan'],
  },
  {
    slug: 'expenso',
    title: 'Expenso',
    shortTitle: 'Every expense, clearly understood',
    category: 'Expense Tracking',
    platforms: ['Mobile app'],
    status: 'Coming soon',
    summary:
      'A simple mobile money companion for tracking spending, planning budgets, and understanding financial habits.',
    introduction: [
      'Expenso helps people record expenses without friction and see where their money goes. Its mobile-first flow keeps daily tracking quick while turning transactions into clear, useful insights.',
      'Budgets, categories, reports, and reminders work together to help users build a healthier and more consistent financial routine.',
    ],
    technologies: ['Flutter', 'Dart', 'SQLite', 'REST API', 'Charts'],
    features: [
      'Fast income and expense entry',
      'Custom categories and accounts',
      'Monthly budgets and alerts',
      'Visual spending breakdowns',
      'Searchable transaction history',
      'Recurring payment reminders',
    ],
    accent: '#55a7ff',
    previewLabels: ['Monthly summary', 'Add expense', 'Spending insights'],
  },
  {
    slug: 'ai-resume-screener',
    title: 'AI Resume Screener',
    shortTitle: 'A smarter first pass for hiring',
    category: 'AI / Recruitment',
    platforms: ['Web'],
    status: 'Coming soon',
    summary:
      'An AI-assisted screening workspace that compares resumes with role requirements and highlights strong candidates.',
    introduction: [
      'AI Resume Screener is designed to reduce the repetitive first stage of recruitment. Recruiters can define a role, review structured candidate matches, and focus their time on the people most aligned with the opportunity.',
      'The product is built as a decision-support tool: it presents evidence and match signals clearly while keeping final hiring decisions with people.',
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'NLP', 'PostgreSQL'],
    features: [
      'Resume parsing and structured profiles',
      'Job-description match scoring',
      'Skill and experience comparison',
      'Candidate ranking and shortlists',
      'Explainable match highlights',
      'Recruiter review workspace',
    ],
    accent: '#a875ff',
    previewLabels: ['Candidate ranking', 'Match analysis', 'Resume insights'],
  },
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
