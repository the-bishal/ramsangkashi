import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ImageCard from '../components/ImageCard'
import SectionEyebrow from '../components/SectionEyebrow'
import { experiences } from '../data/homeData'

function ExperienceSection() {
  return (
    <section id="packages" className="bg-[#fbf3e8] px-7 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div>
            <SectionEyebrow>Explore Varanasi</SectionEyebrow>
            <h2 className="max-w-xl font-serif text-4xl leading-tight text-[#211815] sm:text-5xl">
              Experience the Many
              <br />
              Facets of <span className="text-[#7a321e]">Kashi</span>
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#4b2a1f] transition hover:gap-4"
            to="/gallery"
          >
            View All Experiences
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {experiences.map((experience) => (
            <ImageCard {...experience} key={experience.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
