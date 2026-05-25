import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import PageHero from '../components/PageHero'
import SiteHeader from '../components/SiteHeader'
import Footer from '../sections/Footer'
import { assets } from '../data/assets'
import { galleryCategories, galleryImages } from '../data/galleryData'

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const handlePrev = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#211815]">
      <SiteHeader variant="page" />
      <PageHero
        eyebrow="Visual Gallery"
        title="Capture the sacred spirit of Kashi."
        description="A curated visual journey through the ancient ghats, architectural wonders, and glowing spiritual ceremonies of Varanasi."
        image={assets.gangaAarti}
      />

      {/* Category Tabs */}
      <section className="px-7 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex flex-wrap justify-center gap-3 border-b border-[#dbc8ad]/60 pb-8">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setActiveImageIndex(null)
                }}
                className={`relative px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 rounded-[4px] ${
                  selectedCategory === category.id
                    ? 'text-white bg-[#8b3b22]'
                    : 'text-[#53463e] border border-[#dbc8ad] hover:border-[#8b3b22] hover:text-[#8b3b22] bg-[#fff8ef]/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div
            layout
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => {
                // Find global index to map correctly in lightbox if needed
                return (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={image.src}
                    onClick={() => setActiveImageIndex(index)}
                    className="group relative cursor-pointer overflow-hidden rounded-[8px] border border-[#d5c2a8] bg-[#fff8ef] shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#b8783a]/60"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#251917]/90 via-[#251917]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf3e8]/90 text-[#8b3b22] transition-transform duration-300 hover:scale-110">
                          <ZoomIn className="h-6 w-6" />
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#b8783a]">
                        {galleryCategories.find(c => c.id === image.category)?.label}
                      </span>
                      <h3 className="mt-2 font-serif text-xl text-[#211815] group-hover:text-[#8b3b22] transition-colors duration-200">
                        {image.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#6c5e53]">
                        {image.description}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-[#6c5e53]">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#150f0e]/95 p-4 sm:p-8 md:p-12"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute right-4 top-4 z-50 rounded-full bg-[#2a1d1b] p-3 text-white transition hover:bg-[#8b3b22] focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-[#2a1d1b]/80 p-2 text-white transition hover:bg-[#8b3b22] hover:scale-105 focus:outline-none sm:left-4 sm:p-3"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-[#2a1d1b]/80 p-2 text-white transition hover:bg-[#8b3b22] hover:scale-105 focus:outline-none sm:right-4 sm:p-3"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </button>

            {/* Image & Description container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] md:max-h-[85vh] max-w-4xl overflow-y-auto md:overflow-hidden rounded-[8px] border border-[#3e2e2a] bg-[#1e1514] shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:h-[65vh]">
                {/* Image Section */}
                <div className="flex items-center justify-center bg-black md:w-3/5">
                  <img
                    src={filteredImages[activeImageIndex].src}
                    alt={filteredImages[activeImageIndex].title}
                    className="max-h-[50vh] w-full object-contain md:max-h-full"
                  />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-between p-6 bg-[#251917] md:w-2/5">
                  <div>
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#d0a26e]">
                      {galleryCategories.find(c => c.id === filteredImages[activeImageIndex].category)?.label}
                    </span>
                    <h2 className="mt-3 font-serif text-3xl text-white">
                      {filteredImages[activeImageIndex].title}
                    </h2>
                    <div className="my-4 h-px w-12 bg-[#8b3b22]" />
                    <p className="text-sm leading-7 text-[#dbc8ad]">
                      {filteredImages[activeImageIndex].description}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-between items-center text-xs text-[#a28f7f] border-t border-[#3e2e2a] pt-4">
                    <span>Image {activeImageIndex + 1} of {filteredImages.length}</span>
                    <span className="italic font-serif">Ram Sang Kashi</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  )
}

export default GalleryPage
