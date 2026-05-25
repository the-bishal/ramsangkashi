import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPinned, Phone, CheckCircle2, AlertCircle, Send, ArrowRight } from 'lucide-react'
import emailjs from '@emailjs/browser'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import SiteHeader from '../components/SiteHeader'
import Footer from '../sections/Footer'
import { assets } from '../data/assets'
import { contactDetails } from '../data/contact'

function ContactPage() {
  const icons = [Phone, Mail, MapPinned]

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'partial' | null

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
    if (!formData.message.trim()) tempErrors.message = 'Message content is required'

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
    const formattedMsg = `*RAM SANG KASHI - NEW CONTACT ENQUIRY*
----------------------------------------
*📌 CONTACT DETAILS*
*• Name:* ${formData.name.trim()}
*• Phone:* ${formData.phone.trim()}
*• Email:* ${formData.email.trim()}

*📌 MESSAGE*
"${formData.message.trim()}"
----------------------------------------
_Enquiry sent from ramsangkashi.in_`

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
            package_title: 'Contact Form Enquiry',
            travel_date: 'N/A',
            pilgrims_count: 'N/A',
            message: formData.message.trim(),
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
        // If EmailJS fails, trigger WhatsApp anyway so contact is not lost
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
        eyebrow="Contact Us"
        title="Plan your Kashi journey with a calm guide beside you."
        description="Share your dates, travel style, and the experience you want. We will help shape a route that feels clear, respectful, and beautifully paced."
        image={assets.contactGenerated}
      />

      <section className="px-7 py-18 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionEyebrow>Reach Out</SectionEyebrow>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Tell us what kind of journey you are imagining.
            </h2>
            <div className="mt-8 space-y-5">
              {contactDetails.map((detail, index) => {
                const Icon = icons[index]
                return (
                  <div
                    className="flex items-center gap-4 rounded-[7px] border border-[#dcc8ad] bg-[#fff8ef] p-5"
                    key={detail.label}
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#efe0cb] text-[#8b3b22]">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b3b22]">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-[#4c423b]">{detail.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[7px] border border-[#d8c5aa] bg-[#fff8ef] p-7 shadow-sm sm:p-9"
          >
            <AnimatePresence mode="wait">
              {submitStatus ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-[7px] border border-[#bcd7be] bg-[#f0f9f1] p-6 text-center text-[#2b512e]"
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#469d53]" />
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#1e3b21]">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#3b6a3f]">
                    {submitStatus === 'partial'
                      ? "Thank you! Your email logs are being configured. We are now redirecting you to WhatsApp to connect with our team directly."
                      : "Thank you for reaching out to Ram Sang Kashi Yatra! We have received your message and you are being redirected to WhatsApp to continue the conversation."}
                  </p>
                  <div className="mt-6 flex flex-col items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919580446907?text=${encodeURIComponent(
                        `Hi, I just submitted the contact form on your website. My name is ${formData.name.trim()}. Please connect!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-[3px] bg-[#1e7c30] px-6 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#165c23]"
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
                          message: '',
                        })
                      }}
                      className="text-xs font-bold uppercase tracking-widest text-[#7a321e] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                        Full Name *
                      </span>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-2 h-12 w-full rounded-[3px] border bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#8b3b22] ${
                          errors.name ? 'border-red-400' : 'border-[#d8c5aa]'
                        }`}
                        placeholder="Rajesh Kumar"
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
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                        Phone *
                      </span>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`mt-2 h-12 w-full rounded-[3px] border bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#8b3b22] ${
                          errors.phone ? 'border-red-400' : 'border-[#d8c5aa]'
                        }`}
                        placeholder="+91 9876543210"
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
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                      Email *
                    </span>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-2 h-12 w-full rounded-[3px] border bg-[#fbf3e8] px-4 text-sm outline-none transition focus:border-[#8b3b22] ${
                        errors.email ? 'border-red-400' : 'border-[#d8c5aa]'
                      }`}
                      placeholder="rajeshkumar@gmail.com"
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
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#6b3a2a]">
                      Message *
                    </span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or inquiry here..."
                      className={`mt-2 min-h-36 w-full resize-y rounded-[3px] border bg-[#fbf3e8] px-4 py-3 text-sm outline-none transition focus:border-[#8b3b22] ${
                        errors.message ? 'border-red-400' : 'border-[#d8c5aa]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    disabled={submitting}
                    className="inline-flex h-12 items-center justify-center gap-3 rounded-[3px] bg-[#7a321e] px-7 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8d3e25] disabled:bg-[#a89088] w-full sm:w-auto"
                    type="submit"
                  >
                    {submitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ContactPage
