import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import OrnamentIcon from '../components/OrnamentIcon'
import SectionEyebrow from '../components/SectionEyebrow'
import { assets } from '../data/assets'
import { travelGuideLinks, visitFacts } from '../data/homeData'

function PlanVisitSection() {
  return (
    <section id="plan-your-visit" className="bg-[#fff8ef] px-7 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-[1fr_420px]">
        {/* Left Side: Facts Grid */}
        <div className="flex flex-col justify-center">
          <div>
            <SectionEyebrow>Plan Your Visit</SectionEyebrow>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-4">
              {visitFacts.map((fact) => (
                <div
                  className="rounded-[8px] border border-[#ebdcc7] bg-[#fffbf6] p-5 text-center shadow-sm flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:border-[#8b3b22]/40 group"
                  key={fact.title}
                >
                  <div className="rounded-full bg-[#fdf8f2] p-2.5 border border-[#f5e6d3] text-[#8b3b22] transition-transform duration-300 group-hover:scale-110">
                    <OrnamentIcon icon={fact.icon} className="h-6 w-6" size="sm" />
                  </div>
                  <h3 className="mt-3.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#251917] sm:text-[0.72rem]">
                    {fact.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#6c6259] font-medium sm:text-sm">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Travel Guide Aside */}
        <aside className="relative overflow-hidden rounded-[8px] border border-[#eadbc5] bg-[#f5e8d8] p-7 transition-all duration-300 hover:shadow-md">
          <div
            className="absolute inset-y-0 right-0 w-2/3 bg-contain bg-right-bottom bg-no-repeat opacity-35"
            style={{ backgroundImage: `url(${assets.review})` }}
          />
          <div className="relative z-10 max-w-56">
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#251917]">
              Travel Guide
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#5f574f]">
              Everything you need to know for a smooth journey.
            </p>
            <div className="mt-5 space-y-3">
              {travelGuideLinks.map((link) => (
                <Link
                  className="flex items-center gap-3 text-sm font-medium text-[#60301f] transition hover:gap-4"
                  to="/under-construction"
                  key={link}
                >
                  {link}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default PlanVisitSection
