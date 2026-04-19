'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Simple scroll trigger animation
    gsap.fromTo(section.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)
  //   setSubmitStatus('idle')

  //   try {
  //     // Using mailto as a simple solution
  //     const mailtoLink = `mailto:musfikarahmanbushra@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
  //       `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  //     )}`
      
  //     window.location.href = mailtoLink
      
  //     setSubmitStatus('success')
  //     setFormData({ name: '', email: '', subject: '', message: '' })
      
  //     setTimeout(() => setSubmitStatus('idle'), 5000)
  //   } catch (error) {
  //     console.error('Error:', error)
  //     setSubmitStatus('error')
  //     setTimeout(() => setSubmitStatus('idle'), 5000)
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus('idle')

  try {
    await emailjs.send(
      'service_bnzdg2o',        // <-- ekhane tomar service id
      'template_xcn70ad',       // template id (eta already ase)
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact',
        message: formData.message,
      },
      'xBAXeh3es6yBaR8qv'         // <-- ekhane tomar public key
    )

    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })

  } catch (error) {
    console.error('EmailJS Error:', error)
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: 'email',
      text: 'musfikarahmanb@gmail.com',
      color: 'text-purple-500',
      href: 'mailto:musfikarahmanb@gmail.com',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <motion.section 
      ref={sectionRef}
      id="contact" 
      className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Section Title */}
      <motion.div 
        className="text-center mb-12 sm:mb-16"
        variants={itemVariants}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        <p className="text-gray-400 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
          Have a project in mind? Let's collaborate and build something extraordinary. I'm always excited to work on innovative ideas!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
        {/* Contact Information */}
        <motion.div
          className="space-y-6 order-2 lg:order-1"
          variants={itemVariants}
        >
          <Card className="glass-card border-white/10 bg-transparent">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                Get In Touch
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
              {contactInfo.map((contact, index) => (
                <div key={index}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all cursor-pointer ${contact.bgColor} ${contact.hoverColor} border border-white/5 hover:scale-[1.02]`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${contact.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <span className={`material-icons-outlined text-lg sm:text-xl ${contact.color}`}>
                        {contact.icon}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <span className={`text-sm sm:text-lg font-medium ${contact.color} break-all`}>
                        {contact.text}
                      </span>
                    </div>
                    
                    <span className="material-icons-outlined text-gray-400 text-lg sm:text-xl flex-shrink-0">
                      arrow_forward
                    </span>
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Response Time Card */}
          <Card className="glass-card border-white/10 bg-transparent">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="mb-3 sm:mb-4">
                <span className="material-icons-outlined text-3xl sm:text-4xl text-purple-500">
                  schedule
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                Response Time
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                I typically respond within 24 hours. Feel free to reach out anytime!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="lg:sticky lg:top-20 order-1 lg:order-2"
        >
          <Card className="glass-card border-white/10 bg-transparent">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
            
            <CardContent className="px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300 text-sm"
                  >
                    ✓ Your email client will open. Please send the email to complete!
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 text-sm"
                  >
                    ✗ Something went wrong. Please try again or email directly.
                  </motion.div>
                )}
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all text-sm sm:text-base shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.span 
                    className="flex items-center justify-center gap-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  >
                    <span className="material-icons-outlined text-lg sm:text-xl">
                      {isSubmitting ? 'hourglass_empty' : 'send'}
                    </span>
                    {isSubmitting ? 'Opening Email...' : 'Send Message'}
                  </motion.span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12 sm:mt-16"
        variants={itemVariants}
      >
        <p className="text-gray-400 text-base sm:text-lg">
          Let's build something amazing together! 🚀
        </p>
      </motion.div>
    </motion.section>
  )
}