import { motion } from 'framer-motion'
import SectionEyebrow from './SectionEyebrow'

function PageHero({ eyebrow, title, description, image, children }) {
  return (
    <section className="relative overflow-hidden bg-[#fff7ed] px-7 py-20 sm:px-10 lg:px-16">
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-65 lg:block"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff7ed] via-[#fff7ed]/96 to-[#fff7ed]/72" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-[1480px]"
      >
        <div className="max-w-2xl">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="font-serif text-5xl leading-tight text-[#211815] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f574f]">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </motion.div>
    </section>
  )
}

export default PageHero
