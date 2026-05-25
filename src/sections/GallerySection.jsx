import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionEyebrow from '../components/SectionEyebrow'
import { galleryItems } from '../data/homeData'

function GallerySection() {
  return (
    <section id="gallery" className="bg-[#fff8ef] px-7 pb-7 pt-4 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <SectionEyebrow>Capturing Kashi</SectionEyebrow>
            <h2 className="font-serif text-3xl leading-tight text-[#211815] sm:text-4xl">
              A City of Endless Beauty
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#4b2a1f] transition hover:gap-4"
            to="/gallery"
          >
            View Gallery
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {galleryItems.map((item, index) => (
            <Link
              to="/gallery"
              className="block h-32 overflow-hidden rounded-[7px] border border-[#d6c3aa] bg-cover transition duration-500 hover:scale-[1.02] sm:h-40"
              key={`${item.image}-${index}`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: item.position,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
