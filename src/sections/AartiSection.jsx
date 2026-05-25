import { motion } from 'framer-motion'
import ActionButton from '../components/ActionButton'
import SectionEyebrow from '../components/SectionEyebrow'
import { assets } from '../data/assets'

function AartiSection() {
  return (
    <section
      className="relative min-h-[430px] overflow-hidden bg-[#15110f] px-7 py-20 text-white sm:px-10 lg:px-16"
    >
      {/* Background image as a separate element for proper control */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-right-center"
        style={{ backgroundImage: `url(${assets.gangaAarti})` }}
      />

      {/* On mobile: gradient from bottom so text is readable, image shows at top  */}
      {/* On desktop: gradient from left so text on left, image on right */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#120e0c]/95 via-[#120e0c]/75 to-[#120e0c]/30 sm:bg-gradient-to-r sm:from-[#120e0c]/98 sm:via-[#120e0c]/85 sm:to-[#120e0c]/10" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-[1480px] mt-20 sm:mt-0"
      >
        <div className="max-w-lg">
          <SectionEyebrow light>A Moment of Divinity</SectionEyebrow>
          <h2 className="font-serif text-4xl leading-tight text-[#fff7ec] sm:text-5xl">
            Ganga Aarti
            <br />
            <span className="text-2xl sm:text-3xl">An Experience Beyond Words</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#eee2d4]">
            Witness the divine evening Aarti on the banks of Maa Ganga. A moment
            that stays with you forever.
          </p>
          <ActionButton className="mt-8 bg-[#bd8349] hover:bg-[#cf9559]" to="/book-now" state={{ packageTitle: 'Custom / General Enquiry' }}>
            Book Aarti Experience
          </ActionButton>
        </div>
      </motion.div>
    </section>
  )
}

export default AartiSection
