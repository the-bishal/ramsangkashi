import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { useState } from 'react'
import SectionEyebrow from '../components/SectionEyebrow'
import { assets } from '../data/assets'
import { reviews } from '../data/homeData'

function ReviewCard({ review }) {
  return (
    <div className="flex h-full min-h-[240px] flex-col justify-between rounded-[7px] border border-[#ddcbb2] bg-[#f9efe2]/90 p-7 shadow-sm backdrop-blur-sm">
      <div>
        <div className="flex gap-1 text-[#b9742d]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" strokeWidth={1.4} />
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-[#4f4640]">"{review.quote}"</p>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${review.tone} text-sm font-bold text-white ring-2 ring-[#ecd9be]`}
        >
          {review.initials}
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#2b1c17]">– {review.name}</h3>
          <p className="mt-1 text-xs text-[#6c6259]">{review.location}</p>
        </div>
      </div>
    </div>
  )
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '80%' : '-80%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-80%' : '80%', opacity: 0 }),
}

function ReviewSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = reviews.length

  const go = (dir) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + total) % total)
  }

  const jumpTo = (i) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  // Indices for the 3 visible cards (wrapping)
  const idx0 = current % total
  const idx1 = (current + 1) % total
  const idx2 = (current + 2) % total

  return (
    <section
      className="relative overflow-x-clip bg-[#fbf3e8] bg-cover bg-center px-7 py-16 sm:px-10 lg:px-16"
      id="voices-of-kashi"
      style={{ backgroundImage: `url(${assets.review})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf3e8]/85 via-[#fbf3e8]/75 to-[#fbf3e8]/65" />

      <div className="relative z-10 mx-auto max-w-[1480px]">
        <div className="grid gap-12 xl:grid-cols-[320px_1fr]">

          {/* Left: Pull quote + controls */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-between gap-10"
          >
            <div>
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
            </div>

            {/* Arrow controls + dots */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous review"
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dbc7ac] bg-[#f7ead8] text-[#b3753c] transition hover:bg-[#edd6b7] active:scale-95"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={1.6} />
              </button>
              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => jumpTo(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-6 bg-[#8b3b22]' : 'w-2 bg-[#d4b896] hover:bg-[#b8904a]'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Next review"
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dbc7ac] bg-[#f7ead8] text-[#b3753c] transition hover:bg-[#edd6b7] active:scale-95"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
              </button>
            </div>
          </motion.div>

          {/* Right: Sliding Carousel */}
          <div className="relative overflow-hidden rounded-[7px]" style={{ minHeight: 260 }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) go(1)
                  else if (info.offset.x > 50) go(-1)
                }}
                className="absolute inset-0 grid cursor-grab grid-cols-1 gap-5 active:cursor-grabbing sm:grid-cols-2 xl:grid-cols-3"
              >
                {/* Mobile: 1 card, Tablet: 2 cards, Desktop: 3 cards */}
                <ReviewCard review={reviews[idx0]} />
                <div className="hidden sm:block">
                  <ReviewCard review={reviews[idx1]} />
                </div>
                <div className="hidden xl:block">
                  <ReviewCard review={reviews[idx2]} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ReviewSection
