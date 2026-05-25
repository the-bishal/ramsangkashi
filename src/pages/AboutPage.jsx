import { motion } from 'framer-motion'
import { CheckCircle2, Landmark, MapPinned, Sparkles, HeartHandshake, Compass } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import SiteHeader from '../components/SiteHeader'
import Footer from '../sections/Footer'
import { aboutHighlights } from '../data/about'
import { assets } from '../data/assets'

function AboutPage() {
  const values = [
    {
      icon: Landmark,
      title: 'Rooted in Heritage',
      text: 'We design journeys that respect Kashi’s sacred rhythm, local traditions, and living history.',
    },
    {
      icon: MapPinned,
      title: 'Locally Guided',
      text: 'Every itinerary is shaped with people who know the lanes, rituals, timings, and quieter corners.',
    },
    {
      icon: Sparkles,
      title: 'Meaningful Travel',
      text: 'The goal is not just sightseeing. It is a calm, memorable experience of devotion, culture, and place.',
    },
  ]

  const sacredTriangle = [
    {
      title: 'Kashi (Varanasi)',
      subtitle: 'The Soul & Liberation',
      description: 'The ancient capital of Lord Shiva, where life, death, and devotion flow eternally along the sacred banks of the Ganges.',
      image: assets.ghat2,
      highlight: 'Dashashwamedh Ghat & Vishwanath Temple',
    },
    {
      title: 'Prayagraj',
      subtitle: 'The Confluence (Sangam)',
      description: 'The sacred Triveni Sangam, the mystical meeting point of Ganga, Yamuna, and Saraswati representing absolute spiritual rebirth.',
      image: assets.prayagrajSangam,
      highlight: 'Holy Sangam Bath & Akshayavat Tree',
    },
    {
      title: 'Ayodhya',
      subtitle: 'The Origin & Dharma',
      description: 'The divine birthplace of Lord Ram, representing perfect righteousness, cosmic order, and the newly crafted Ram Mandir.',
      image: assets.ayodhyaMandir,
      highlight: 'Ram Janmabhoomi Mandir & Saryu River Aarti',
    },
  ]

  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#211815]">
      <SiteHeader variant="page" />
      <PageHero
        eyebrow="About Ram Sang Kashi"
        title="Journeys shaped around the soul of Varanasi."
        description="Ram Sang Kashi creates thoughtful spiritual and cultural travel experiences across Varanasi, helping visitors move through the city with clarity, care, and reverence."
        image={assets.aboutGenerated}
      />

      {/* Section 1: Our Approach (Layered Gallery and Message) */}
      <section className="px-7 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left Column: Overlapping Frame Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-3 max-w-xl mx-auto lg:mx-0"
          >
            {/* Soft decorative background frame */}
            <div className="absolute inset-0 rounded-[10px] border border-dashed border-[#dbc8ad]/60" />
            
            <div className="relative overflow-hidden rounded-[8px] border border-[#dbc8ad] bg-[#fffaf5] p-3 shadow-md">
              <img
                src={assets.hero}
                alt="Varanasi ghats at sunset"
                className="h-full min-h-[380px] sm:min-h-[440px] w-full object-cover object-right rounded-[4px]"
              />

              {/* Floating Overlay Stats Badge */}
              <div className="absolute bottom-7 right-7 max-w-[240px] rounded-[8px] bg-[#251917]/95 border border-[#8b3b22]/20 p-5 text-white shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8b3b22] text-[#fff7ed]">
                    <HeartHandshake className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-2xl font-bold font-serif text-[#eccfa8]">1,500+</h4>
                    <p className="text-[0.62rem] font-bold uppercase tracking-wider text-[#ead7bf]/80">
                      Pilgrims Guided Safely
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Detailed Copy */}
          <div>
            <SectionEyebrow>Our Approach</SectionEyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Designed for devotion, discovery, and ease.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-[#61584f]">
              From temple visits and boat rides to heritage walks and cultural
              experiences, each plan balances comfort with authenticity. Kashi is a city of labyrinthine lanes and profound spiritual rhythms; we ensure your journey remains smooth, organized, and deeply rooted in the city's sacred atmosphere.
            </p>
            <div className="mt-7 space-y-4">
              {aboutHighlights.map((item) => (
                <div className="flex gap-3 text-sm text-[#4d4038]" key={item}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8b3b22]" />
                  <span className="leading-6 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Sacred Triangle (Destinations) */}
      <section className="bg-[#fffcf8] border-y border-[#dfcdb3]/60 px-7 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow>The Sacred Pilgrimage Triangle</SectionEyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211815] leading-tight">
              Three Pillars of Spiritual Heartland
            </h2>
            <p className="mt-4 text-sm text-[#6c6259]">
              Explore the profound cosmic energies, confluences, and origins that define our multi-city yatras across Northern India.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {sacredTriangle.map((dest, index) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-[8px] border border-[#d8c5aa] bg-[#fffbf5] shadow-sm hover:shadow-md transition-all duration-300"
                key={dest.title}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-48 w-full shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${dest.image})` }}
                  />
                  <span className="absolute top-4 left-4 bg-[#7a321e] text-white px-3 py-1 rounded-[3px] text-[0.62rem] font-bold uppercase tracking-wider">
                    Step {index + 1}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#b8783a]">
                      {dest.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-[#211815] mt-1 group-hover:text-[#8b3b22] transition-colors">
                      {dest.title}
                    </h3>
                    <p className="mt-3 text-xs leading-5 text-[#6c5e53]">
                      {dest.description}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-[#ebd8c1]/40 pt-4 flex items-center gap-2 text-xs font-semibold text-[#8b3b22] bg-[#fdfaf5] p-2.5 rounded-[4px] border border-[#f3e6d5]">
                    <Compass className="h-4 w-4 shrink-0" strokeWidth={1.6} />
                    <span>Focus: {dest.highlight}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Core Pillars/Values */}
      <section className="bg-[#fff7ed] px-7 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="text-center max-w-xl mx-auto mb-16">
            <SectionEyebrow>Our Foundation</SectionEyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211815]">
              Core Pillars of Our Service
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[8px] border border-[#d8c5aa] hover:border-[#8b3b22]/50 bg-[#fff8ef] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
                  key={value.title}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fcf3e6] border border-[#f3e3ce] text-[#8b3b22] mb-6 shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <h3 className="font-serif text-2xl text-[#211815]">{value.title}</h3>
                  <p className="mt-4 text-xs leading-6 text-[#62584e]">{value.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage
