import { motion } from 'framer-motion'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { useState, useRef } from 'react'
import SectionEyebrow from '../components/SectionEyebrow'
import { assets } from '../data/assets'
import { reviews } from '../data/homeData'

function ReviewCard({ review, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex min-h-[250px] flex-col justify-between rounded-[7px] border border-[#ddcbb2] bg-[#f9efe2]/88 p-7 shadow-sm backdrop-blur-sm"
    >
      <div>
        <div className="flex gap-1 text-[#b9742d]">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star
              className="h-4 w-4 fill-current"
              key={starIndex}
              strokeWidth={1.4}
            />
          ))}
        </div>
        <p className="mt-7 text-sm leading-7 text-[#4f4640]">"{review.quote}"</p>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${review.tone} text-sm font-bold text-white ring-2 ring-[#ecd9be]`}
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#2b1c17]">– {review.name}</h3>
          <p className="mt-1 text-xs text-[#6c6259]">{review.location}</p>
        </div>
      </div>
    </motion.article>
  )
}

function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const index = Math.round(scrollLeft / clientWidth)
    setActiveIndex(index)
  }

  const scrollTo = (index) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  return (
    <section
      className="relative overflow-hidden bg-[#fbf3e8] bg-cover bg-center px-7 py-16 sm:px-10 lg:px-16"
      id="voices-of-kashi"
      style={{ backgroundImage: `url(${assets.review})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf3e8]/82 via-[#fbf3e8]/74 to-[#fbf3e8]/68" />

      <div className="relative z-10 mx-auto grid max-w-[1480px] items-center gap-10 xl:grid-cols-[360px_1fr_54px]">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="max-w-sm"
        >
          <SectionEyebrow>Voices of Kashi</SectionEyebrow>
          <Quote className="mb-5 h-9 w-9 fill-[#a66a38] text-[#a66a38]" />
          <blockquote className="font-serif text-3xl leading-[1.28] text-[#2b211d] sm:text-4xl">
            Kashi is not a place,
            <br />
            it is a feeling that
            <br />
            resides in your soul.
          </blockquote>
          <div className="mt-8 flex items-center gap-4 text-[#b4875e]">
            <span className="h-px w-24 bg-current" />
            <span className="h-4 w-4 rotate-45 border border-current" />
          </div>
        </motion.div>

        {/* Mobile: horizontal scroll carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto gap-4 pb-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="min-w-[85vw] snap-center"
              >
                <ReviewCard index={index} review={review} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to review ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-6 bg-[#8b3b22]'
                    : 'w-2 bg-[#d4b896]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet+: 3-column grid */}
        <div className="hidden md:grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard index={index} key={review.name} review={review} />
          ))}
        </div>

        <button
          aria-label="Next reviews"
          className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#dbc7ac] bg-[#f7ead8] text-[#b3753c] transition hover:bg-[#edd6b7] xl:inline-flex"
          type="button"
        >
          <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
        </button>
      </div>
    </section>
  )
}

export default ReviewSection
