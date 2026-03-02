'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [typewriterText, setTypewriterText] = useState('')
  const fullText = 'MERN + Next.js Developer building fast and beautiful web apps'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const image = imageRef.current

    if (!hero || !image) return

    // GSAP animations for complex effects
    gsap.fromTo(image, 
      { 
        scale: 0.8,
        rotation: -10,
        opacity: 0
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'back.out(1.7)',
        delay: 0.5
      }
    )

    // Floating animation for the image
    gsap.to(image, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    })
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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 flex items-center min-h-screen relative overflow-hidden"
    >
      <motion.div
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left"
          variants={itemVariants}
        >
          {/* Main heading with fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-2">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-gray-200"
              >
                Hey, I'm
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.8 },
                  scale: { duration: 0.8, delay: 0.8 },
                  backgroundPosition: { duration: 5, repeat: Infinity, ease: 'linear' }
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Musfika Rahman Bushra
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Typewriter tagline */}
          <motion.div
            variants={itemVariants}
            className="min-h-[60px] sm:min-h-[70px]"
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed">
              {typewriterText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-5 sm:h-6 bg-purple-500 ml-1"
              />
            </h2>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 items-center justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 group text-sm sm:text-base shadow-lg"
              >
                <span className="material-icons-outlined text-lg sm:text-xl">rocket_launch</span>
                <span className="group-hover:tracking-wider transition-all">See My Best Projects</span>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://drive.google.com/file/d/154rpSsQ4F6__F_k6Ky01v8w2Hbd61Qwa/view?usp=sharing"
                download
                className="bg-white/5 hover:bg-white/10 border-2 border-purple-500/50 hover:border-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 group text-sm sm:text-base backdrop-blur-sm"
              >
                <motion.span 
                  className="material-icons-outlined text-lg sm:text-xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  download
                </motion.span>
                <span className="group-hover:tracking-wider transition-all">Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4 items-center justify-center lg:justify-start pt-4"
            variants={itemVariants}
          >
            {[
              { 
                href: "https://github.com/noorjahanmim", 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                ),
                alt: "GitHub",
                color: "from-gray-700 to-gray-900"
              },
              { 
                href: "https://www.linkedin.com/in/musfikarahmanbushra", 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
                alt: "LinkedIn",
                color: "from-blue-600 to-blue-800"
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                <div className="relative z-10 group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Profile Image */}
        <motion.div 
          ref={imageRef}
          className="order-1 lg:order-2 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glowing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-40"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <Image
              src="https://i.pinimg.com/736x/d7/e0/7d/d7e07dce0b495ed0081c2f86279eb4db.jpg"
              alt="Musfika"
              width={320}
              height={320}
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-purple-500 shadow-2xl relative z-10 object-cover"
              priority
            />
            
            {/* Rotating ring */}
            <motion.div
              className="absolute -inset-4 border-2 border-dashed border-purple-500/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Pulse ring */}
            <motion.div
              className="absolute -inset-6 border border-purple-500/30 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}