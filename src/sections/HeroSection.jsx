import { motion } from 'framer-motion'
import ActionButton from '../components/ActionButton'
import OrnamentIcon from '../components/OrnamentIcon'
import SiteHeader from '../components/SiteHeader'
import { assets } from '../data/assets'
import { pillars } from '../data/homeData'

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#dbc8ad] bg-[#fbf3e8]"
    >
      <SiteHeader />
      <div className="relative min-h-[780px] pt-28 lg:min-h-[820px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf3e8] via-[#fbf3e8]/88 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#fbf3e8] to-transparent lg:hidden" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative z-10 mx-auto flex max-w-[1480px] px-7 pb-20 pt-24 sm:px-10 lg:px-16 lg:pt-36"
        >
          <div className="max-w-[640px]">
            <h1 className="font-serif text-[clamp(3.4rem,7vw,6.35rem)] leading-[0.98] text-[#1e1917]">
              Where Faith
              <br />
              Meets Eternity
            </h1>
            <div className="my-8 flex items-center gap-3 text-[#9a5d37]">
              <span className="h-px w-10 bg-current" />
              <span className="h-1.5 w-1.5 rotate-45 border border-current" />
              <span className="h-px w-10 bg-current" />
            </div>
            <p className="max-w-md text-lg leading-8 text-[#4f4740]">
              From the sacred Ghats to the timeless temples, Varanasi is an
              experience beyond words.
            </p>
            <ActionButton className="mt-8" to="/explore">Discover More</ActionButton>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 bg-[#fbf3e8]/95">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 px-4 sm:px-10 lg:grid-cols-4 lg:px-16">
          {pillars.map((pillar, index) => (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex min-h-48 flex-col items-center justify-center py-10 px-4 text-center"
              key={pillar.title}
            >
              <OrnamentIcon icon={pillar.icon} size="xl" />
              <h2 className="mt-4 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#251917]">
                {pillar.title}
              </h2>
              <p className="mt-3 max-w-[12rem] text-sm leading-6 text-[#5e554d]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
