import {
  BrainCircuit,
  Clapperboard,
  Code,
  GraduationCap,
  Handshake,
  HeartPulse,
  LayoutGrid,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ============================================================
// Structured, editable content for MyTEAm Group's website.
// Components consume this data — nothing significant is hard-coded
// in JSX, so future products/members/solutions are easy to add.
// ============================================================

// ---- TECHNOLOGY AREAS ("What We Do") ------------------------
// These are areas MyTEAm explores — NOT claims of finished products.
export interface Solution {
  title: string
  description: string
  icon: LucideIcon
}

export const solutions: Solution[] = [
  {
    title: 'Education Technology',
    description: 'Expanding access to learning with digital tools, resources, and educational services.',
    icon: GraduationCap,
  },
  {
    title: 'Health Technology',
    description: 'Exploring digital solutions that improve access to care and health information.',
    icon: HeartPulse,
  },
  {
    title: 'Software & Digital Technology',
    description: 'Computer programming, software and application development, and digital platforms.',
    icon: Code,
  },
  {
    title: 'Artificial Intelligence & Data',
    description: 'Applying AI and data to solve complex, real-world problems.',
    icon: BrainCircuit,
  },
  {
    title: 'Digital Platforms',
    description: 'Building scalable platforms that connect people, services, and opportunity.',
    icon: LayoutGrid,
  },
  {
    title: 'Technology Consultancy',
    description:
      'Technology and educational services and consultancy for individuals, businesses, and institutions.',
    icon: Handshake,
  },
  {
    title: 'Engineering Technology',
    description: 'Engineering technology services that turn ideas into reliable, real-world solutions.',
    icon: Wrench,
  },
  {
    title: 'Digital Entertainment',
    description: 'Creating digital entertainment products that inform, engage, and entertain.',
    icon: Clapperboard,
  },
]

// ---- PRODUCTS ----------------------------------------------
export interface Product {
  id: string
  name: string
  status: string
  tagline: string
  description: string
  href?: string
  featured?: boolean
  comingSoon?: boolean
}

// Live/announced products.
export const products: Product[] = [
  {
    id: 'jappa',
    name: 'Jappa',
    status: 'Flagship Product',
    tagline: 'Making global education more accessible to Africans.',
    description:
      'Jappa is a study-abroad platform designed to connect students across Africa with international university admission opportunities, scholarships, and tools that simplify the journey toward studying abroad.',
    href: '/products/jappa',
    featured: true,
  },
]

// Future, not-yet-announced products. Placeholders only — do NOT
// invent names or descriptions.
export const futureProducts: Product[] = [
  { id: 'product-02', name: 'Product 02', status: 'Coming Soon', tagline: '', description: '', comingSoon: true },
  { id: 'product-03', name: 'Product 03', status: 'Coming Soon', tagline: '', description: '', comingSoon: true },
  { id: 'product-04', name: 'Product 04', status: 'Coming Soon', tagline: '', description: '', comingSoon: true },
]

// ---- CORE VALUES -------------------------------------------
export interface Value {
  title: string
  description: string
}

export const values: Value[] = [
  { title: 'Innovation', description: 'We solve problems in new and better ways.' },
  { title: 'Integrity', description: 'We do the right thing, even when no one is watching.' },
  { title: 'Impact', description: 'We build with the difference we make in mind.' },
  { title: 'Collaboration', description: 'We believe the best outcomes come from working together.' },
  { title: 'Excellence', description: 'We aim for quality in everything we build.' },
]

// ---- PROCESSES ----------------------------------------------
export interface Step {
  title: string
  description: string
}

// Homepage: "How We Build / Our Approach".
export const processSteps: Step[] = [
  { title: 'Real-World Problem', description: 'We begin with genuine, pressing challenges that people actually face.' },
  { title: 'Research', description: 'We study the problem, the people, and the context before we design.' },
  { title: 'Ideation', description: 'We shape the best possible path toward a practical solution.' },
  { title: 'Technology', description: 'We build with the right tools to create reliable, scalable software.' },
  { title: 'Product', description: 'We turn technology into a product people can use and trust.' },
  { title: 'Impact', description: 'We measure success by the real difference our product makes.' },
]

// Innovation page pipeline.
export const innovationPipeline: Step[] = [
  { title: 'Idea', description: 'Every product begins with a real problem worth solving.' },
  { title: 'Research', description: 'We explore the need, the people, and the landscape.' },
  { title: 'Prototype', description: 'We build and test lightweight versions of the idea.' },
  { title: 'Product', description: 'We develop a polished, dependable product from what works.' },
  { title: 'Impact', description: 'We deliver outcomes that create meaningful value.' },
]

// ---- IMPACT -------------------------------------------------
// IMPORTANT: No fabricated statistics. Non-numeric, carefully-worded
// statements only, plus a clearly-marked "metrics coming soon" slot.
export const impactStatements: string[] = [
  'Building technology with the potential to reach millions.',
  'Creating opportunities and connecting people to better possibilities.',
  'Expanding access to information across Africa and beyond.',
]

// Metric placeholders shown as "coming soon" — never presented as numbers.
export const impactMetricSlots: string[] = ['People Reached', 'Products Built', 'Countries Reached', 'Partners']

// ---- LEADERSHIP -----------------------------------------------
export interface Leader {
  name: string
  role: string
  bio?: string
  social?: string
  /** Optional profile photo. Rendered in the circular container with object-cover. */
  image?: string
}

// Only verified leadership. Structure supports adding members easily.
export const leadership: Leader[] = [
  { name: 'Jozef Ike', role: 'Founder / CEO', bio: '', image: '/brand/CEO.jpg' },
  { name: 'Aganyi Innocent', role: 'Chief Operations Officer (COO)', bio: '', image: '/brand/COO.png' },
]