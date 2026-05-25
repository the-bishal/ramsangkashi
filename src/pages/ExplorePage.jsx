import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  Compass,
  Flame,
  History,
  Landmark,
  MapPin,
  Quote,
  Sparkles,
  Waves,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SiteHeader from '../components/SiteHeader'
import Footer from '../sections/Footer'
import { assets } from '../data/assets'

const exploreSections = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    subtitle: 'The Eternal City (Kashi)',
    image: assets.exploreHero,
    summary: 'The spiritual capital of India, resting on the trident of Lord Shiva, where life, death, and liberation flow eternally along the sacred banks of the Ganges.',
    quote: '"Varanasi is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together." — Mark Twain',
    facts: [
      { label: 'Known As', value: 'Kashi, Benares, City of Light' },
      { label: 'Sacred River', value: 'The Holy Ganges (Ganga)' },
      { label: 'Primary Deity', value: 'Lord Shiva (Kashi Vishwanath)' },
      { label: 'Must-See Ritual', value: 'Subah-e-Banaras & Ganga Aarti' },
    ],
    timeline: [
      { era: '1200 BCE', title: 'Ancient Beginnings', desc: 'Vedic settlements establish Kashi as a premier center of philosophy, spiritual learning, and scripture.' },
      { era: '528 BCE', title: 'Buddha’s First Sermon', desc: 'Gautama Buddha travels to nearby Sarnath to deliver his first discourse, turning the Wheel of Dharma.' },
      { era: '16th Century', title: 'Tulsidas & Ramcharitmanas', desc: 'The great poet-saint writes the Hindi translation of the Ramayana on the banks of the Ganges.' },
      { era: '1780 CE', title: 'Vishwanath Reconstruction', desc: 'Queen Ahilyabai Holkar of Indore rebuilds the sacred temple to its golden glory.' },
    ],
    details: [
      {
        title: 'Mythology & The Trident',
        content: 'According to Hindu cosmology, Varanasi is not situated on the terrestrial earth, but rather rests majestically on the tip of Lord Shiva’s Trishul (trident). This cosmic location makes it a gateway beyond the physical universe, ensuring that anyone who breathes their last here attains Moksha (complete liberation from the cycle of birth and rebirth).',
      },
      {
        title: 'The Flow of the Ganges & 84 Ghats',
        content: 'The Ganges curves uniquely northward in Varanasi, flowing back toward its source in the Himalayas, symbolizing the return of the soul to its origins. The city’s eighty-four stone ghats represent steps connecting human existence to the cosmic river, each holding distinct legacies of kings, ascetics, and divine events.',
      },
    ],
  },
  {
    id: 'prayagraj',
    name: 'Prayagraj',
    subtitle: 'The Confluence of Souls',
    image: assets.prayagrajSangam,
    summary: 'The sacred "Prayag" where three of India’s most revered rivers merge, forming a cosmic confluence that has drawn sages, kings, and millions of seekers for millennia.',
    quote: '"At the confluence of the dark Yamuna and the bright Ganga, he who bathes gets purified of all actions and merges with the cosmic absolute." — Rigveda',
    facts: [
      { label: 'Known As', value: 'Prayag, Allahabad, King of Confluences' },
      { label: 'Sacred River', value: 'Triveni Sangam (Ganga, Yamuna, Saraswati)' },
      { label: 'Primary Deity', value: 'Lalita Devi & Someshwar Mahadev' },
      { label: 'Key Gathering', value: 'Kumbh Mela (Every 12 Years)' },
    ],
    timeline: [
      { era: 'Vedic Era', title: 'The First Sacrifice', desc: 'Lord Brahma performs the Prakrishta Yajna (first sacrifice) at this holy site, naming it Prayag.' },
      { era: 'Ramayana Era', title: 'Bharadwaj Ashram', desc: 'Lord Ram, Sita, and Lakshman visit the revered ashram of Sage Bharadwaj during their exile.' },
      { era: '1583 CE', title: 'The Akbar Fort', desc: 'Emperor Akbar recognizes the strategic and spiritual importance, constructing the grand Prayagraj Fort.' },
      { era: 'Modern Era', title: 'Freedom Movement', desc: 'The city serves as a crucial hub for India’s independence struggle, home of the Anand Bhawan.' },
    ],
    details: [
      {
        title: 'Triveni Sangam: The Cosmic Confluence',
        content: 'The heart of Prayagraj is the Triveni Sangam, the physical meeting point of the pale, rapid-flowing Ganges, the deep emerald Yamuna, and the subterranean, mythical Saraswati river of pure wisdom. The distinct colors of the rivers meeting is a visually striking, spiritually moving phenomenon that symbolizes the union of body, devotion, and supreme intellect.',
      },
      {
        title: 'The Kumbh Mela: Humanity’s Largest Gathering',
        content: 'According to sacred scriptures, drops of the nectar of immortality (Amrit) fell from the heavens at Prayagraj during the Samudra Manthan (churning of the ocean). To celebrate this cosmic event, the Kumbh Mela is organized here. It is recognized by UNESCO as intangible cultural heritage, uniting millions of pilgrims in a serene, peaceful sea of devotion under the winter skies.',
      },
    ],
  },
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    subtitle: 'The Realm of Righteousness',
    image: assets.ayodhyaMandir,
    summary: 'The legendary birthplace of Lord Rama, standing proudly on the banks of the Saryu River as the eternal symbol of dharma, purity, and cultural rebirth.',
    quote: '"Ayodhya is the city built by gods themselves, prosperous and radiant, where the ideals of truth and duty find their eternal home." — Valmiki Ramayana',
    facts: [
      { label: 'Known As', value: 'Saket, Ram Janmabhoomi, Awadh' },
      { label: 'Sacred River', value: 'The Holy Saryu River' },
      { label: 'Primary Deity', value: 'Sri Ram Lalla (Lord Rama)' },
      { label: 'Signature Festival', value: 'Deepotsav (Festival of Lights)' },
    ],
    timeline: [
      { era: 'Treta Yuga', title: 'Birth of Sri Ram', desc: 'Lord Rama, the seventh avatar of Vishnu, takes birth to demonstrate the path of perfect righteousness.' },
      { era: '1st Century BCE', title: 'King Vikramaditya', desc: 'The legendary emperor restores the ancient city, identifying temples and building beautiful bathing ghats.' },
      { era: '18th Century', title: 'Awadh Sovereignty', desc: 'Ayodhya and Faizabad blossom as major cultural capitals of art, music, and exquisite architecture.' },
      { era: '2024 CE', title: 'The Ram Mandir Renaissance', desc: 'The historic consecration of the grand Nagara-style temple restores Ayodhya’s global spiritual prominence.' },
    ],
    details: [
      {
        title: 'The Invincible City of Dharma',
        content: 'The word Ayodhya translates literally to "that which cannot be conquered by conflict or war," signifying a state of eternal peace and spiritual fortitude. As the capital of the sun-dynasty (Ikshvaku), the city was designed as a model kingdom of harmony, safety, and prosperity, serving as the setting for the epic Ramayana.',
      },
      {
        title: 'Saryu River & Devotion in Stone',
        content: 'The sacred Saryu river is the quiet witness to Lord Rama’s entire earthly journey, carrying prayers and washing away worldly burdens. Today, the majestic pink sandstone Ram Mandir, with its elaborate Nagara-style architecture, intricate shikhara spires, and grand hand-carved pillars, represents a spectacular architectural renaissance of Indian heritage.',
      },
    ],
  },
]

function ExplorePage() {
  const [activeTab, setActiveTab] = useState('varanasi')

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setActiveTab(id)
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -90 // header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Active section indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120 // offset

      for (const section of exploreSections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#211815]">
      <SiteHeader variant="page" />
      <PageHero
        eyebrow="Spiritual History"
        title="Journey through the sacred legends."
        description="Delve deep into the timelines, mythology, and timeless culture of Varanasi, Prayagraj, and Ayodhya—the foundational pillars of spiritual India."
        image={assets.exploreHero}
      />

      {/* Sticky Sub-navigation */}
      <nav className="sticky top-0 z-30 border-b border-[#dfcdb3] bg-[#fff7ed]/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1480px] px-7 sm:px-10 lg:px-16">
          <div
            className="flex items-center justify-start sm:justify-center gap-8 py-4 sm:gap-14 overflow-x-auto whitespace-nowrap scroll-smooth"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {exploreSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative py-2 text-xs font-bold uppercase tracking-[0.18em] transition duration-300 shrink-0 ${
                  activeTab === section.id ? 'text-[#8b3b22]' : 'text-[#62584e] hover:text-[#8b3b22]'
                }`}
              >
                {section.name}
                {activeTab === section.id && (
                  <motion.span
                    layoutId="activeSubNav"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-[#8b3b22]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Detailed City Sections */}
      <section className="px-7 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1480px] space-y-28">
          {exploreSections.map((section, idx) => {
            const isEven = idx % 2 === 0
            return (
              <article
                id={section.id}
                key={section.id}
                className="scroll-mt-28 border-b border-[#dbc8ad]/50 pb-24 last:border-b-0 last:pb-0"
              >
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
                  
                  {/* Text Details & Narratives */}
                  <div className={`space-y-8 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <div className="flex items-center gap-2.5 text-[#8b3b22]">
                        <Compass className="h-4 w-4 animate-spin-slow" />
                        <span className="text-xs font-bold uppercase tracking-[0.16em]">{section.subtitle}</span>
                      </div>
                      <h2 className="mt-3 font-serif text-4xl leading-tight text-[#211815] sm:text-5xl lg:text-6.5xl">
                        {section.name}
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-[#53463e] italic font-medium">
                        {section.summary}
                      </p>
                    </div>

                    {/* Interactive Quote Block */}
                    <div className="relative overflow-hidden rounded-[8px] border-l-4 border-[#8b3b22] bg-[#fff8ef] p-6 shadow-sm">
                      <Quote className="absolute right-4 top-4 h-12 w-12 text-[#b8783a]/10" />
                      <p className="font-serif text-lg leading-8 text-[#483931] relative z-10">
                        {section.quote}
                      </p>
                    </div>

                    {/* Detailed Myths & Explanations */}
                    <div className="space-y-6">
                      {section.details.map((detail) => (
                        <div key={detail.title} className="rounded-[6px] border border-[#dbc8ad]/60 bg-[#fff8ef]/40 p-6">
                          <h3 className="flex items-center gap-2 font-serif text-xl text-[#8b3b22]">
                            <span className="h-1.5 w-1.5 rotate-45 bg-[#b8783a]" />
                            {detail.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-[#62584e]">
                            {detail.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Chronological History Timeline */}
                    <div className="space-y-6 pt-4">
                      <h3 className="flex items-center gap-2.5 font-serif text-2xl text-[#211815]">
                        <History className="h-5 w-5 text-[#8b3b22]" />
                        Historical Timeline
                      </h3>
                      <div className="relative border-l-2 border-[#dbc8ad]/60 pl-6 ml-2 space-y-8">
                        {section.timeline.map((item, tIdx) => (
                          <div key={item.era} className="relative">
                            {/* Dot */}
                            <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#fbf3e8] border border-[#8b3b22]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#8b3b22]" />
                            </span>
                            <div>
                              <span className="inline-block px-2.5 py-0.5 rounded-[4px] bg-[#8b3b22] text-[0.68rem] font-bold text-white uppercase tracking-wider">
                                {item.era}
                              </span>
                              <h4 className="mt-2 text-base font-semibold text-[#211815]">{item.title}</h4>
                              <p className="mt-1.5 text-sm leading-6 text-[#62584e]">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Visuals & Fast Facts Sidebar */}
                  <div className={`space-y-8 lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Grand City Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden rounded-[8px] border border-[#d5c2a8] bg-[#fff8ef] shadow-md"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#2a1d1b]">
                        <img
                          src={section.image}
                          alt={section.name}
                          className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                        />
                      </div>
                    </motion.div>

                    {/* Fast Facts Card */}
                    <div className="rounded-[8px] border border-[#dbc8ad] bg-[#fff8ef] p-6 shadow-sm relative overflow-hidden">
                      {/* Background watermark pattern */}
                      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none">
                        <Landmark className="h-44 w-44" />
                      </div>

                      <div className="flex items-center gap-2 border-b border-[#dbc8ad]/60 pb-4">
                        <Sparkles className="h-5 w-5 text-[#b8783a]" />
                        <h3 className="font-serif text-lg text-[#211815]">Fast Facts</h3>
                      </div>

                      <div className="mt-5 space-y-4">
                        {section.facts.map((fact) => (
                          <div key={fact.label} className="flex flex-col border-b border-[#dbc8ad]/30 pb-3 last:border-0 last:pb-0">
                            <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#b8783a]">
                              {fact.label}
                            </span>
                            <span className="mt-1 text-sm font-semibold text-[#483931]">
                              {fact.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ExplorePage
