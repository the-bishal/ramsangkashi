import {
  CalendarDays,
  Clock3,
  Flame,
  Landmark,
  Mountain,
  Route,
  Sailboat,
  Train,
  Utensils,
  Waves,
} from 'lucide-react'
import { assets } from './assets'

// ── Hero pillars ──────────────────────────────────────────────────────────────
export const pillars = [
  {
    icon: assets.pillarGhats,
    title: 'Sacred Ghats',
    description: 'Spiritual rituals & holy dip',
  },
  {
    icon: assets.pillarTemples,
    title: 'Ancient Temples',
    description: 'Architectural marvels & devotion',
  },
  {
    icon: assets.pillarCulture,
    title: 'Cultural Heritage',
    description: 'Art, music, literature & traditions',
  },
  {
    icon: assets.pillarJourney,
    title: 'Spiritual Journey',
    description: 'Find peace, purpose & yourself',
  },
]

// ── Traditions stats ──────────────────────────────────────────────────────────
export const stats = [
  {
    icon: Landmark,
    value: '3000+',
    label: 'Years of History',
  },
  {
    icon: Waves,
    value: '88',
    label: 'Ghats Along the Ganga',
  },
  {
    icon: Flame,
    value: '2000+',
    label: 'Temples & Shrines',
  },
]

// ── Experience cards ──────────────────────────────────────────────────────────
export const experiences = [
  {
    icon: Sailboat,
    title: 'Boat Ride on the Ganges',
    image: assets.ghat5,
    description: 'Feel the serenity as you sail through timeless waters.',
    imagePosition: 'center center',
  },
  {
    icon: Route,
    title: 'Heritage Walk',
    image: assets.ghat6,
    description: 'Walk through ancient lanes filled with stories.',
    imagePosition: 'center center',
  },
  {
    icon: Landmark,
    title: 'Temple Trail',
    image: assets.temple2,
    description: 'Discover the spiritual heart of ancient temples.',
    imagePosition: 'center center',
  },
  {
    icon: Utensils,
    title: 'Local Culture',
    image: assets.aarti2,
    description: 'Savor local flavors, art, music & the Ganga aarti.',
    imagePosition: 'center center',
  },
]

// ── Testimonial reviews ───────────────────────────────────────────────────────
export const reviews = [
  {
    quote:
      "The spiritual energy of Varanasi is unlike anything I've ever experienced.",
    name: 'Ananya S.',
    location: 'New Delhi',
    initials: 'AS',
    tone: 'from-[#8b3b25] to-[#d0a26e]',
  },
  {
    quote: 'The Ganga Aarti is a sight that stays with you forever.',
    name: 'Rahul M.',
    location: 'Mumbai',
    initials: 'RM',
    tone: 'from-[#264552] to-[#c78a49]',
  },
  {
    quote:
      'Every corner of Kashi has a story, a soul, a silence that speaks.',
    name: 'Priya K.',
    location: 'Bengaluru',
    initials: 'PK',
    tone: 'from-[#7a321e] to-[#e0b278]',
  },
]

// ── Plan your visit facts ─────────────────────────────────────────────────────
export const visitFacts = [
  {
    icon: CalendarDays,
    title: 'Best Time',
    value: 'October to March',
  },
  {
    icon: Clock3,
    title: 'Duration',
    value: '2 - 5 Days',
  },
  {
    icon: Train,
    title: 'How to Reach',
    value: 'By Air, Rail, Road',
  },
  {
    icon: Mountain,
    title: 'Stay Options',
    value: 'From Budget to Luxury',
  },
]

export const travelGuideLinks = [
  'Travel Tips',
  'Safety Guide',
  'Local Etiquette',
]

// ── Gallery ───────────────────────────────────────────────────────────────────
export const galleryItems = [
  { image: assets.ghat2, position: 'center' },
  { image: assets.temple1, position: 'center' },
  { image: assets.aarti1, position: 'center' },
  { image: assets.ghat3, position: 'center' },
  { image: assets.temple3, position: 'center' },
  { image: assets.aarti4, position: 'center' },
]
