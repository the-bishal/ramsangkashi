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

const socialLinks = [
  { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61588479047794', label: 'Facebook' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/ramsangkashi/', label: 'Instagram' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/ramsangkashi/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ramsangkashiyatra@gmail.com', label: 'Email' }
]

function Footer() {
  return (
    <footer
      className="bg-[#2b1b15] px-7 py-9 text-[#ead7bf] sm:px-10 lg:px-16"
      id="contact-us"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_1.2fr]">
          <div>
            <img src={assets.logo} alt="Kashi Varanasi" className="w-32 brightness-150 sepia" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#d7c1a7]">
              Varanasi is a doorway to the eternal. Come with questions, leave
              with clarity.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    aria-label={social.label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#7f5b41] transition hover:bg-[#c1844b] hover:text-white"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.label}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#c1844b]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => {
                    // Simple path routing mapping helper
                    let href = '/under-construction'
                    if (link === 'Home') href = '/'
                    else if (link === 'About Us') href = '/about-us'
                    else if (link === 'Explore') href = '/explore'
                    else if (link === 'Gallery') href = '/gallery'
                    else if (link === 'Packages') href = '/packages'
                    else if (link === 'Contact Us') href = '/contact-us'

                    return (
                      <li key={link}>
                        <Link className="text-sm text-[#ead7bf] transition hover:text-white" to={href}>
                          {link}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

            {/* Get In Touch Contact Details Column */}
            <div>
              <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#c1844b]">
                Get In Touch
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm text-[#ead7bf]">
                <li className="leading-6 text-[#d7c1a7]">
                  Samneghat, Lanka, Varanasi, Uttar Pradesh, 221004
                </li>
                <li>
                  <a
                    href="mailto:ramsangkashiyatra@gmail.com"
                    className="transition hover:text-white"
                  >
                    ramsangkashiyatra@gmail.com
                  </a>
                </li>
                <li className="flex flex-col gap-1.5">
                  <a
                    href="tel:+919580446907"
                    className="transition hover:text-white"
                  >
                    +91 95804 46907
                  </a>
                  <a
                    href="tel:+919519517559"
                    className="transition hover:text-white"
                  >
                    +91 95195 17559
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-[#5b3f2d] lg:border-l lg:pl-9">
            <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#c1844b]">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#d7c1a7]">
              Stay updated with the latest stories & travel guides.
            </p>
            <form className="mt-5 flex overflow-hidden rounded-[3px] border border-[#76543b]">
              <input
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#a98b70]"
                placeholder="Enter your email"
                type="email"
              />
              <button
                aria-label="Subscribe"
                className="inline-flex w-14 items-center justify-center bg-[#bd8349] text-white transition hover:bg-[#cf9559]"
                type="submit"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#5b3f2d] pt-5 text-xs text-[#b99d82] sm:flex-row">
          <p>© 2026 ramsangkashi.in. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/under-construction">Privacy Policy</Link>
            <Link to="/under-construction">Terms of Use</Link>
            <Link to="/under-construction">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

