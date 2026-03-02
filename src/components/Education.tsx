'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <motion.section 
      ref={sectionRef}
      id="education"
      className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.div className="text-center mb-12 sm:mb-16 relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
          variants={itemVariants}
        >
          My academic journey in technology
        </motion.p>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.div>

      {/* Education Card */}
      <motion.div
        variants={itemVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          className="group relative"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                left: `${15 + i * 15}%`,
                top: `${-5 + (i % 2) * 10}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2
              }}
            />
          ))}

          <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-pink-900/20 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Strong glow effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500 -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.6 }}
            />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 2
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Diploma in Computer Science and Technology
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 text-purple-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium">Sylhet Polytechnic Institute</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-pink-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium">2023 - Present</span>
                  </div>
                </div>

                <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed mb-6">
                  Currently pursuing a comprehensive diploma program focused on computer science fundamentals, programming, and web development. Building a strong foundation in modern technologies and development practices.
                </p>

                {/* Skills/Highlights */}
                <div className="flex flex-wrap gap-2">
                  {['Programming', 'Web Development'].map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.3)' }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sparkles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${20 + i * 25}%`,
                  top: `${25 + i * 20}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
