import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Landmark, ArrowRight, Home, Sparkles, Phone, Mail } from 'lucide-react'
import { assets } from '../data/assets'

function UnderConstructionPage() {
  // Generate a fixed number of golden particles for the magical background effect
  const particles = Array.from({ length: 25 })

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#15100e] text-[#fbf3e8] px-6 py-12">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02] brightness-[0.4] saturate-[0.85]"
        style={{ backgroundImage: `url(${assets.ayodhyaMandir})` }}
      />
      {/* Warm Golden Sepia & Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b120f]/80 via-[#271813]/90 to-[#120a08]/98" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(18,10,8,0.95)_90%)]" />

      {/* Floating Golden Cosmic Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, i) => {
          const randomSize = Math.floor(Math.random() * 6) + 3 // 3px to 8px
          const randomLeft = Math.floor(Math.random() * 100) // 0% to 100%
          const randomTop = Math.floor(Math.random() * 100) // 0% to 100%
          const randomDuration = Math.floor(Math.random() * 12) + 12 // 12s to 24s
          const randomDelay = Math.floor(Math.random() * 8) // 0s to 8s
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-tr from-[#e5a953]/30 to-[#f9d784]/65 blur-[1px]"
              style={{
                width: randomSize,
                height: randomSize,
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: randomDelay,
              }}
            />
          )
        })}
      </div>

      {/* Top Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[1480px] flex justify-between items-center border-b border-[#dfcdb3]/15 pb-6"
      >
        <Link className="block w-28 sm:w-32" to="/" aria-label="Home page">
          <img
            src={assets.logo}
            alt="Kashi Varanasi"
            className="h-auto w-full object-contain brightness-125 sepia"
          />
        </Link>
        <div className="flex items-center gap-5 text-xs text-[#ead7bf] opacity-80">
          <span className="hidden sm:inline-flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-[#e5a953]" />
            A Sacred Journey Awaits
          </span>
        </div>
      </motion.div>

      {/* Main Content Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 my-auto flex max-w-2xl flex-col items-center text-center px-4 sm:px-6"
      >
        {/* Sacred Landmark Icon with Orbiting Rings */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#7a321e]/30 border border-[#e5a953]/35 text-[#e5a953]">
          <Landmark className="h-9 w-9 animate-pulse" strokeWidth={1.3} />
          <div className="absolute inset-0 rounded-full border border-dashed border-[#e5a953]/20 animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        {/* Dynamic Titles */}
        <h2 className="mt-8 font-serif text-[clamp(1.8rem,5vw,2.75rem)] leading-tight text-[#fff8ef] tracking-wide">
          Sculpting Your Sacred Experience
        </h2>
        
        {/* Divider Ornament */}
        <div className="my-5 flex items-center gap-3 text-[#e5a953]/55">
          <span className="h-px w-12 bg-current" />
          <span className="h-1.5 w-1.5 rotate-45 border border-current bg-current" />
          <span className="h-px w-12 bg-current" />
        </div>

        <p className="text-[0.74rem] font-bold uppercase tracking-[0.25em] text-[#e5a953]">
          Under Construction
        </p>

        {/* Poetic & Informative Paragraph */}
        <p className="mt-6 text-sm sm:text-base leading-7 sm:leading-8 text-[#ead7bf]/85 font-light">
          Just as the grand stone temples of Kashi, Prayagraj, and Ayodhya are meticulously carved block by block with absolute devotion, we are carefully sculpting this experience for you. Our pilgrimage guides are refining this section to ensure your online booking journey is as smooth, respectful, and beautifully paced as our yatras.
        </p>

        {/* Dynamic Routing CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            to="/"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2.5 rounded-[3px] border border-[#e5a953]/30 bg-transparent px-6 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#ead7bf] transition duration-300 hover:bg-[#fff8ef]/5 hover:text-white"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Link>

          <Link
            to="/book-now"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2.5 rounded-[3px] bg-[#7a321e] px-6 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#8d3e25] shadow-lg shadow-[#7a321e]/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Yatra Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>

      {/* Bottom Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 w-full max-w-[1480px] flex flex-col sm:flex-row justify-between items-center border-t border-[#dfcdb3]/10 pt-6 gap-4 text-xs text-[#ead7bf]/50 text-center"
      >
        <p>© 2026 Ram Sang Kashi Yatra. Dedicated to spiritual pathways.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="tel:+919580446907"
            className="inline-flex items-center gap-1.5 transition hover:text-[#ead7bf]"
          >
            <Phone className="h-3.5 w-3.5 text-[#e5a953]/70" />
            +91 95804 46907
          </a>
          <a
            href="mailto:ramsangkashiyatra@gmail.com"
            className="inline-flex items-center gap-1.5 transition hover:text-[#ead7bf]"
          >
            <Mail className="h-3.5 w-3.5 text-[#e5a953]/70" />
            ramsangkashiyatra@gmail.com
          </a>
        </div>
      </motion.div>
    </main>
  )
}

export default UnderConstructionPage
