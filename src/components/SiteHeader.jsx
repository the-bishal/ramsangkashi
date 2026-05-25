import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../data/assets'
import { navItems } from '../data/navigation'

function SiteHeader({ variant = 'overlay' }) {
  const isOverlay = variant === 'overlay'
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header
        className={`${isOverlay ? 'absolute inset-x-0 top-0' : 'relative bg-[#fff7ed]'} z-20`}
      >
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-7 py-7 sm:px-10 lg:px-16">
          <NavLink className="block w-28 sm:w-36" to="/" aria-label="Varanasi home">
            <img
              src={assets.logo}
              alt="Kashi Varanasi"
              className="h-auto w-full object-contain"
            />
          </NavLink>
          <nav className="hidden items-center gap-14 lg:flex">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `text-[0.68rem] font-bold uppercase tracking-[0.17em] transition hover:text-[#8b3b22] ${
                    isActive ? 'text-[#8b3b22]' : 'text-[#241815]'
                  }`
                }
                end={item.href === '/'}
                to={item.href}
                key={item.label}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <NavLink
              to="/book-now"
              className="inline-flex h-9 sm:h-10 items-center justify-center rounded-[3px] bg-[#7a321e] px-4 sm:px-5 text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#fbf3e8] transition-all duration-300 hover:bg-[#8d3e25] hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              Book Now
            </NavLink>
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] text-[#672d1d] transition hover:bg-[#ead9c0] lg:hidden"
              aria-label="Open menu"
              type="button"
            >
              <Menu className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </header>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col bg-[#251917] text-[#ead7bf]"
          >
            {/* Header section in drawer */}
            <div className="flex items-center justify-between px-7 py-7 sm:px-10">
              <NavLink onClick={() => setIsOpen(false)} className="block w-28 sm:w-36" to="/">
                <img
                  src={assets.logo}
                  alt="Kashi Varanasi"
                  className="h-auto w-full object-contain brightness-150 sepia"
                />
              </NavLink>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#3b2a27] text-white transition hover:bg-[#8b3b22] focus:outline-none"
                aria-label="Close menu"
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-1 flex-col justify-center px-8 sm:px-16 space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.label}
                >
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `font-serif text-3xl sm:text-4xl transition-colors duration-250 ${
                        isActive ? 'text-[#d0a26e] font-semibold' : 'text-[#ead7bf] hover:text-white'
                      }`
                    }
                    end={item.href === '/'}
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Drawer Bottom Info */}
            <div className="border-t border-[#3b2a27] bg-[#1d1311] px-8 py-8 sm:px-16 space-y-4">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#d0a26e]">
                Speak to our Pilgrimage Guide
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:+919580446907"
                  className="inline-flex items-center gap-3 text-sm text-[#ead7bf] hover:text-white transition"
                >
                  <Phone className="h-4 w-4 text-[#d0a26e]" />
                  +91 95804 46907
                </a>
                <a
                  href="tel:+919519517559"
                  className="inline-flex items-center gap-3 text-sm text-[#ead7bf] hover:text-white transition"
                >
                  <Phone className="h-4 w-4 text-[#d0a26e]" />
                  +91 95195 17559
                </a>
                <a
                  href="mailto:ramsangkashiyatra@gmail.com"
                  className="inline-flex items-center gap-3 text-sm text-[#ead7bf] hover:text-white transition pt-1"
                >
                  <Mail className="h-4 w-4 text-[#d0a26e]" />
                  ramsangkashiyatra@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SiteHeader
