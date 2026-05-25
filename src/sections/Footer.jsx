import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail } from 'lucide-react'
import { assets } from '../data/assets'
import { footerGroups } from '../data/footer'

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const linkRoutes = {
  'Home': '/',
  'About Us': '/about-us',
  'Explore': '/explore',
  'Gallery': '/gallery',
  'Packages': '/packages',
  'Contact Us': '/contact-us',
}

const socialLinks = [
  { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61588479047794', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/ramsangkashi/', label: 'Instagram' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/ramsangkashi/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ramsangkashiyatra@gmail.com', label: 'Email' },
]

function Footer() {
  return (
    <footer className="bg-[#2b1b15] px-7 py-12 text-[#ead7bf] sm:px-10 lg:px-16" id="contact-us">
      <div className="mx-auto max-w-[1480px]">

        {/* ── Main grid ─────────────────────────────────────────────────── */}
        {/*  Mobile : 2 equal columns                                       */}
        {/*  Desktop: brand | links | newsletter                            */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[1fr_2fr_1.1fr]">

          {/* ── Brand + Social ─────────────────────────────────────────── */}
          <div className="col-span-2 lg:col-span-1">
            <img src={assets.logo} alt="Ram Sang Kashi" className="w-28 brightness-150 sepia" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#d7c1a7]">
              Varanasi is a doorway to the eternal. Come with questions, leave with clarity.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#7f5b41] transition hover:bg-[#c1844b] hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav links + Contact ────────────────────────────────────── */}
          {/* On mobile this is a 2-col grid itself; on desktop it expands  */}
          <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-1">

            {/* Company links */}
            <div>
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#c1844b]">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerGroups[0].links.map((link) => (
                  <li key={link}>
                    <Link
                      to={linkRoutes[link] ?? '/under-construction'}
                      className="text-sm text-[#ead7bf] transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#c1844b]">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerGroups[1].links.map((link) => (
                  <li key={link} className="text-sm text-[#d7c1a7] leading-5">
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#c1844b]">
                Get In Touch
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#d7c1a7]">
                <li className="leading-6">
                  Samneghat, Lanka, Varanasi,<br />Uttar Pradesh, 221004
                </li>
                <li>
                  <a href="mailto:ramsangkashiyatra@gmail.com" className="transition hover:text-white break-all">
                    ramsangkashiyatra@gmail.com
                  </a>
                </li>
                <li className="flex flex-col gap-1">
                  <a href="tel:+919580446907" className="transition hover:text-white">+91 95804 46907</a>
                  <a href="tel:+919519517559" className="transition hover:text-white">+91 95195 17559</a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Newsletter ─────────────────────────────────────────────── */}
          <div className="col-span-2 lg:col-span-1 lg:border-l lg:border-[#5b3f2d] lg:pl-9">
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#c1844b]">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#d7c1a7]">
              Stay updated with the latest stories &amp; travel guides.
            </p>
            <form className="mt-5 flex overflow-hidden rounded-[3px] border border-[#76543b]">
              <input
                aria-label="Email address"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#a98b70]"
              />
              <button
                aria-label="Subscribe"
                type="submit"
                className="inline-flex w-12 items-center justify-center bg-[#bd8349] text-white transition hover:bg-[#cf9559]"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────── */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#5b3f2d] pt-6 text-xs text-[#b99d82] sm:flex-row sm:items-center">
          <p>© 2026 ramsangkashi.in. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/under-construction" className="transition hover:text-white">Privacy Policy</Link>
            <Link to="/under-construction" className="transition hover:text-white">Terms of Use</Link>
            <Link to="/under-construction" className="transition hover:text-white">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
