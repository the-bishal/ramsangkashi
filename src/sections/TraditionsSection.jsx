import { motion } from 'framer-motion'
import ActionButton from '../components/ActionButton'
import OrnamentIcon from '../components/OrnamentIcon'
import SectionEyebrow from '../components/SectionEyebrow'
import { assets } from '../data/assets'
import { stats } from '../data/homeData'

function TraditionsSection() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-[#fffaf3] px-5 py-14 sm:px-10 sm:py-16 lg:px-16"
    >
      <div
        className="absolute inset-y-0 right-0 w-full bg-contain bg-right-top bg-no-repeat opacity-95"
        style={{ backgroundImage: `url(${assets.cloudy})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf3] via-[#fffaf3]/98 to-[#fffaf3]/80 sm:via-[#fffaf3]/95 sm:to-[#fffaf3]/20" />
      <div className="relative z-10 mx-auto max-w-[1480px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <SectionEyebrow>The Spirit of Varanasi</SectionEyebrow>
          <h2 className="font-serif text-3xl leading-tight text-[#211815] sm:text-4xl lg:text-5xl">
            Timeless Traditions.
            <br />
            Infinite Stories.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#5d554e] sm:mt-5">
            Every corner of Varanasi echoes with devotion, tradition and the
            eternal flow of the Ganga.
          </p>
          <ActionButton variant="light" className="mt-6 sm:mt-7" to="/explore">
            About Varanasi
          </ActionButton>
        </motion.div>

        {/* Stats — 3 columns on all screen sizes */}
        <div className="mt-12 grid w-full grid-cols-3 gap-2 sm:mt-14 sm:gap-8 sm:max-w-2xl">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col items-center text-center px-1"
              key={stat.label}
            >
              <OrnamentIcon icon={stat.icon} size="sm" />
              <div className="mt-2 font-serif text-xl leading-tight text-[#251917] sm:text-4xl">
                {stat.value}
              </div>
              <p className="mt-1 text-[0.6rem] leading-4 text-[#5f574f] sm:text-xs sm:leading-5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TraditionsSection
