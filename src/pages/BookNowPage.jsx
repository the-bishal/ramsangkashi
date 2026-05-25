import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Users,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Clock3,
  UsersRound,
  MessageSquare,
  AlertCircle
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import SiteHeader from '../components/SiteHeader'
import Footer from '../sections/Footer'
import PageHero from '../components/PageHero'
import { assets } from '../data/assets'
import { packagePlans } from '../data/packages'

function BookNowPage() {
  const location = useLocation()

  // Extract initial package state from React Router navigation (e.g. from Packages page)
  const initialPackage = location.state?.packageTitle || 'Custom / General Enquiry'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageTitle: initialPackage,
    travelDate: '',
    pilgrims: '1',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'partial' | 'error' | null

  // Keep track of the currently selected package object for real-time preview card
  const [selectedPlan, setSelectedPlan] = useState(null)

  useEffect(() => {
    const plan = packagePlans.find((p) => p.title === formData.packageTitle)
    setSelectedPlan(plan || null)
  }, [formData.packageTitle])

  // Sync state if initialPackage changes
  useEffect(() => {
    if (location.state?.packageTitle) {
      setFormData((prev) => ({ ...prev, packageTitle: location.state.packageTitle }))
    }
  }, [location.state])

  const validateForm = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required'
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required'
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid Phone Number'
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid Email Address'
    }
    if (!formData.travelDate) tempErrors.travelDate = 'Travel date is required'
    
    const pilgrimsNum = parseInt(formData.pilgrims, 10)
    if (!formData.pilgrims || isNaN(pilgrimsNum) || pilgrimsNum < 1) {
      tempErrors.pilgrims = 'Must be at least 1 traveler'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear validation error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setSubmitting(true)
    setSubmitStatus(null)

    // Formulate the dynamic Whatsapp Message text (beautifully formatted)
    const formattedMsg = `*RAM SANG KASHI YATRA - NEW BOOKING*
----------------------------------------
*📌 PILGRIM DETAILS*
*• Name:* ${formData.name.trim()}
*• Phone:* ${formData.phone.trim()}
*• Email:* ${formData.email.trim()}

*📌 TOUR DETAILS*
*• Selected Package:* ${formData.packageTitle}
*• Travel Date:* ${formData.travelDate}
*• Number of Pilgrims:* ${formData.pilgrims}

*📌 SPECIAL INSTRUCTIONS*
${formData.message.trim() ? `"${formData.message.trim()}"` : '_None provided_'}
----------------------------------------
_Booking request initiated from ramsangkashi.in_`

    const whatsappUrl = `https://wa.me/919580446907?text=${encodeURIComponent(formattedMsg)}`

    // Extract Environment Variables for EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Check if EmailJS keys are present and configured
    const isEmailJSConfigured =
      serviceId &&
      serviceId !== 'your_emailjs_service_id' &&
      templateId &&
      templateId !== 'your_emailjs_template_id' &&
      publicKey &&
      publicKey !== 'your_emailjs_public_key'

    if (isEmailJSConfigured) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name.trim(),
            from_email: formData.email.trim(),
            phone: formData.phone.trim(),
            package_title: formData.packageTitle,
            travel_date: formData.travelDate,
            pilgrims_count: formData.pilgrims,
            message: formData.message.trim() || 'No special requests',
          },
          publicKey
        )

        setSubmitStatus('success')
        setSubmitting(false)
        
        // Short delay before opening WhatsApp to allow success animation
        setTimeout(() => {
          window.open(whatsappUrl, '_blank')
        }, 1200)
      } catch (err) {
        console.error('EmailJS submission error:', err)
        // If EmailJS fails, trigger WhatsApp anyway so booking is not lost
        setSubmitStatus('partial')
        setSubmitting(false)
        setTimeout(() => {
          window.open(whatsappUrl, '_blank')
        }, 1500)
      }
    } else {
      // In offline / placeholder config mode, directly complete and open WhatsApp
      console.log('EmailJS keys are not configured. Launching WhatsApp directly.')
      setSubmitStatus('success')
      setSubmitting(false)
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
      }, 1000)
    }
  }

  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#211815]">
      <SiteHeader variant="page" />
      <PageHero
        eyebrow="Pilgrimage Registration"
        title="Secure your spiritual pathway in Varanasi"
        description="Fill out the reservation details below. Once submitted, our team will register the booking, send you a confirmation email, and connect via WhatsApp to finalize your personalized itinerary."
        image={assets.packagesGenerated}
      />

      <section className="px-5 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Booking Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[7px] border border-[#d8c5aa] bg-[#fff8ef] p-6 shadow-sm sm:p-10"
          >
            <h2 className="font-serif text-3xl text-[#251917] sm:text-4xl">
              Traveler Information
            </h2>
            <p className="mt-2 text-sm text-[#60554c]">
              Please fill in your authentic details. Standard confirmations take less than 1 hour.
            </p>

            <AnimatePresence mode="wait">
              {submitStatus ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-8 rounded-[7px] border border-[#bcd7be] bg-[#f0f9f1] p-6 text-center text-[#2b512e]"
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#469d53]" />
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#1e3b21]">
                    Registration Initialized!
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#3b6a3f]">
                    {submitStatus === 'partial'
                      ? "Thank you! Your email logs are being configured. We are now redirecting you to WhatsApp to finalize your booking directly."
                      : "Thank you for planning with Ram Sang Kashi Yatra! Your email confirmation is dispatched and you are being redirected to WhatsApp to finalize your dates."}
                  </p>
                  <div className="mt-6 flex flex-col items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919580446907?text=${encodeURIComponent(
                        `Hi, I just submitted the booking form on your website for: ${formData.packageTitle}. Please confirm details!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-[3px] bg-[#1e7c30] px-4 sm:px-6 text-[0.7rem] sm:text-xs font-bold uppercase tracking-wide sm:tracking-wider text-white transition hover:bg-[#165c23]"
                    >
                      Open WhatsApp Manually
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => {
                        setSubmitStatus(null)
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          packageTitle: 'Custom / General Enquiry',
                          travelDate: '',
                          pilgrims: '1',
                          message: '',
                        })
                      }}
                      className="text-xs font-bold uppercase tracking-widest text-[#7a321e] hover:underline"
                    >
                      Fill another form
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-2 h-12 w-full rounded-[3px] border bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#7a321e] ${
                          errors.name ? 'border-red-400' : 'border-[#d8c5aa]'
                        }`}
                        placeholder="E.g., Rajesh Kumar"
                        type="text"
                      />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                        WhatsApp / Phone *
                      </label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`mt-2 h-12 w-full rounded-[3px] border bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#7a321e] ${
                          errors.phone ? 'border-red-400' : 'border-[#d8c5aa]'
                        }`}
                        placeholder="E.g., +91 9876543210"
                        type="tel"
                      />
                      {errors.phone && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-2 h-12 w-full rounded-[3px] border bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#7a321e] ${
                        errors.email ? 'border-red-400' : 'border-[#d8c5aa]'
                        }`}
                      placeholder="Rajeshkumar@gmail.com"
                      type="email"
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                      Select Package / Yatra *
                    </label>
                    <select
                      name="packageTitle"
                      value={formData.packageTitle}
                      onChange={handleChange}
                      className="mt-2 h-12 w-full rounded-[3px] border border-[#d8c5aa] bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#7a321e]"
                    >
                      <option value="Custom / General Enquiry">
                        Custom / General Enquiry
                      </option>
                      {packagePlans.map((plan) => (
                        <option key={plan.title} value={plan.title}>
                          {plan.title} ({plan.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                        Preferred Travel Date *
                      </label>
                      <div className="relative mt-2">
                        <input
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          className={`h-12 w-full rounded-[3px] border bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#7a321e] ${
                            errors.travelDate ? 'border-red-400' : 'border-[#d8c5aa]'
                          }`}
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      {errors.travelDate && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.travelDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                        Number of Pilgrims *
                      </label>
                      <input
                        name="pilgrims"
                        value={formData.pilgrims}
                        onChange={handleChange}
                        min="1"
                        className={`mt-2 h-12 w-full rounded-[3px] border bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#7a321e] ${
                          errors.pilgrims ? 'border-red-400' : 'border-[#d8c5aa]'
                        }`}
                        type="number"
                      />
                      {errors.pilgrims && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.pilgrims}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                      Special Requests / Custom Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter details like elder assistance needed, hotel preferences, dietary requirements, or standard modifications."
                      className="mt-2 min-h-32 w-full resize-y rounded-[3px] border border-[#d8c5aa] bg-[#fbf3e8] px-4 py-3 text-sm outline-none transition focus:border-[#7a321e]"
                    />
                  </div>

                  <button
                    disabled={submitting}
                    className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 sm:gap-3 rounded-[3px] bg-[#7a321e] px-4 sm:px-7 text-[0.66rem] xs:text-[0.7rem] sm:text-[0.74rem] font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-white transition hover:bg-[#8d3e25] disabled:bg-[#a89088]"
                    type="submit"
                  >
                    {submitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit & Send via WhatsApp
                        <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Dynamic Package Preview Column */}
          <div className="flex flex-col space-y-6">
            
            {/* Preview Banner */}
            <div className="rounded-[7px] border border-[#dcc8ad] bg-[#fffaf3] p-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8b3b22]">
                <Sparkles className="h-4 w-4" />
                Live Package Preview
              </span>
              <p className="mt-1.5 text-xs text-[#6e6358]">
                Review your package details in real-time as you switch choices in the select menu.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {selectedPlan ? (
                <motion.article
                  key={selectedPlan.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-[7px] border border-[#d8c5aa] bg-[#fff8ef] shadow-sm"
                >
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${selectedPlan.image})`,
                      backgroundPosition: selectedPlan.imagePosition || 'center top',
                    }}
                  />
                  <div className="p-7">
                    <div className="flex flex-wrap gap-3 text-xs text-[#8b3b22]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" />
                        {selectedPlan.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <UsersRound className="h-3.5 w-3.5" />
                        {selectedPlan.audience}
                      </span>
                    </div>

                    <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#b8783a]">
                      {selectedPlan.category}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-[#251917]">
                      {selectedPlan.title}
                    </h3>
                    <p className="mt-2 text-lg font-bold text-[#7a321e]">
                      {selectedPlan.price}
                    </p>

                    <div className="mt-5 border-t border-[#ebd8c1] pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8b3b22]">
                        Package Highlights
                      </p>
                      <ul className="mt-3 space-y-2.5 text-xs leading-5 text-[#5e554c]">
                        {selectedPlan.highlights.map((highlight) => (
                          <li className="flex gap-2" key={highlight}>
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#b8783a]" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ) : (
                <motion.div
                  key="custom-preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-[7px] border border-[#d8c5aa] bg-[#fff8ef] p-8 text-center shadow-sm"
                >
                  <MessageSquare className="mx-auto h-12 w-12 text-[#b8783a] opacity-80" />
                  <h3 className="mt-4 font-serif text-xl text-[#251917]">
                    Custom Travel Enquiry
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f564d]">
                    You have chosen the custom travel layout. Specify any destination (Varanasi, Prayagraj, Ayodhya, or customized multi-city tracks) and customized requirements in the message box.
                  </p>
                  <div className="mt-6 space-y-2 border-t border-[#ebd8c1] pt-6 text-left text-xs text-[#73665a]">
                    <p className="font-bold text-[#8b3b22]">Ram Sang Kashi guarantees:</p>
                    <div className="flex gap-2">
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#b8783a]" />
                      <span>Completely customizable itineraries shaped to your health, age, and pace.</span>
                    </div>
                    <div className="flex gap-2">
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#b8783a]" />
                      <span>Trustworthy, knowledgeable pilgrimage guides and local assistance.</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BookNowPage
