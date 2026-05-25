import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, UsersRound, Search, X, SlidersHorizontal } from 'lucide-react'
import PageHero from '../components/PageHero'
import SiteHeader from '../components/SiteHeader'
import Footer from '../sections/Footer'
import { assets } from '../data/assets'
import { packagePlans } from '../data/packages'

function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Yatras' },
    { id: 'Varanasi', label: 'Varanasi Only' },
    { id: 'Prayagraj - Ayodhya - Varanasi', label: 'Multi-City Tours' },
  ]

  // Filter package plans dynamically based on search query & active category tab
  const filteredPlans = packagePlans.filter((plan) => {
    const matchesCategory = activeCategory === 'all' || plan.category === activeCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      query === '' ||
      plan.title.toLowerCase().includes(query) ||
      plan.category.toLowerCase().includes(query) ||
      plan.audience.toLowerCase().includes(query) ||
      plan.highlights.some((h) => h.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#211815]">
      <SiteHeader variant="page" />
      <PageHero
        eyebrow="Curated Packages"
        title="Choose the journey that matches your pace."
        description="Explore extracted Ram Sang Kashi packages for Varanasi, Prayagraj, Ayodhya and sacred multi-city journeys, organized into clear plans with price, duration and inclusions."
        image={assets.packagesGenerated}
      />

      {/* Search & Filter Section */}
      <section className="px-7 pt-12 pb-4 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex flex-col gap-6 rounded-[8px] border border-[#d8c5aa] bg-[#fff8ef] p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:p-8">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-lg">
              <span className="absolute inset-y-0 left-4 flex items-center text-[#8b3b22]">
                <Search className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <input
                type="text"
                placeholder="Search yatra packages (e.g. family, budget, couple, Ayodhya)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full rounded-[4px] border border-[#dcc8ad] bg-[#fffbf6] pl-12 pr-10 text-sm text-[#211815] placeholder-[#807266] outline-none transition focus:border-[#8b3b22] focus:ring-1 focus:ring-[#8b3b22]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-3 flex items-center text-[#807266] hover:text-[#8b3b22] transition"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8b3b22] flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" strokeWidth={1.6} />
                Region:
              </span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition rounded-[3px] border ${
                    activeCategory === category.id
                      ? 'text-[#fbf3e8] bg-[#8b3b22] border-[#8b3b22]'
                      : 'text-[#6c5e53] bg-[#fffbf6] border-[#dcc8ad] hover:border-[#8b3b22] hover:text-[#8b3b22]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

          </div>

          {/* Results Badge */}
          <div className="mt-4 flex items-center justify-between px-1">
            <p className="text-xs text-[#6c5e53] font-medium">
              Showing <span className="font-bold text-[#8b3b22]">{filteredPlans.length}</span> of{' '}
              <span className="font-bold text-[#211815]">{packagePlans.length}</span> Kashi Packages
            </p>
            {(searchQuery || activeCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#8b3b22] hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="px-7 pb-20 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1480px]">
          
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {filteredPlans.map((plan) => (
              <motion.article
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.38,
                      ease: 'easeOut',
                    },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group flex flex-col md:flex-row overflow-hidden rounded-[8px] border border-[#d8c5aa] bg-[#fff8ef] shadow-sm hover:shadow-md transition-all duration-300 min-h-[220px]"
                key={plan.title}
              >
                {/* Left Side: Landscape Image on Mobile, Side Banner on Desktop */}
                <div className="relative overflow-hidden h-44 w-full md:h-auto md:w-72 lg:w-80 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${plan.image})`,
                      backgroundPosition: plan.imagePosition,
                    }}
                  />
                </div>

                {/* Right Side: Package Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Meta info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eecdab]/40 pb-3">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#b8783a]">
                        {plan.category}
                      </p>
                      <div className="flex flex-wrap gap-3 text-[0.68rem] text-[#8b3b22]">
                        <span className="inline-flex items-center gap-1.5 font-medium">
                          <Clock3 className="h-3.5 w-3.5" />
                          {plan.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-medium">
                          <UsersRound className="h-3.5 w-3.5" />
                          {plan.audience}
                        </span>
                      </div>
                    </div>

                    {/* Title & Price Row */}
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h2 className="font-serif text-xl sm:text-2xl leading-tight text-[#211815] group-hover:text-[#8b3b22] transition-colors duration-200">
                        {plan.title}
                      </h2>
                      <p className="text-base sm:text-lg font-bold text-[#7a321e] shrink-0">
                        {plan.price}
                      </p>
                    </div>

                    {/* Highlights Grid (2-column grid on larger viewports to save space) */}
                    <ul className="mt-4 grid gap-x-6 gap-y-2 text-xs leading-5 text-[#62584e] sm:grid-cols-2">
                      {plan.highlights.map((highlight) => (
                        <li className="flex gap-2 items-start" key={highlight}>
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#b8783a]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Action Button */}
                  <div className="mt-6 pt-4 border-t border-[#ebd8c1]/30 flex justify-end">
                    <Link
                      to="/book-now"
                      state={{ packageTitle: plan.title }}
                      className="inline-flex items-center gap-2 rounded-[3px] bg-[#7a321e] px-5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#fbf3e8] transition hover:bg-[#8d3e25] shadow-sm"
                    >
                      Book Package
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </Link>
                  </div>

                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredPlans.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-md rounded-[8px] border border-dashed border-[#dcc8ad] bg-[#fff8ef] p-10 text-center shadow-sm mt-12"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fdf8f2] text-[#8b3b22] border border-[#f5e6d3] mb-4">
                <Search className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-serif text-2xl text-[#211815]">No Yatras Found</h3>
              <p className="mt-3 text-sm leading-6 text-[#6c5e53]">
                We couldn't find any packages matching your query. Try adjusting your filters or search keywords.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="mt-6 inline-flex h-10 items-center justify-center rounded-[3px] bg-[#8b3b22] px-6 text-xs font-bold uppercase tracking-wider text-[#fbf3e8] transition hover:bg-[#9e462d]"
              >
                Clear Search & Filters
              </button>
            </motion.div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PackagesPage
