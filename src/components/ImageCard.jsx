import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function ImageCard({ title, description, image, imagePosition = 'center' }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[7px] border border-[#d4c2a9] bg-[#fbf4ea] shadow-sm"
    >
      <div
        className="h-44 bg-cover bg-center transition duration-500 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }}
      />
      <div className="p-6">
        <h3 className="max-w-[13rem] text-[0.82rem] font-bold uppercase leading-5 tracking-[0.11em] text-[#291713]">
          {title}
        </h3>
        <p className="mt-4 min-h-14 text-sm leading-6 text-[#6d6258]">
          {description}
        </p>
        <Link
          className="mt-4 inline-flex items-center gap-3 text-[0.72rem] font-bold text-[#5f2c1b] transition group-hover:gap-4"
          to="/explore"
        >
          View Details
          <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
        </Link>
      </div>
    </motion.article>
  )
}

export default ImageCard
