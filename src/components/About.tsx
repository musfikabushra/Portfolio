'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current

    if (!section || !title) return

    gsap.fromTo(title, 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
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
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  const highlights = [
    {
      title: 'Why I Code',
      description: 'My programming journey began with a simple conversation with my sister about Programming Hero. That spark of curiosity ignited a passion that transformed into my life\'s purpose.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'What I Build',
      description: 'I specialize in the MERN stack, crafting interactive and user-friendly web applications that combine clean design with powerful functionality.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Beyond the Code',
      description: 'When I\'m not building web applications, you\'ll find me drawing and watching anime. Art fuels my creativity and brings fresh perspectives to my development work.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'What\'s Next',
      description: 'Currently studying at Sylhet Polytechnic Institute, constantly learning and evolving. I\'m excited to collaborate on projects that challenge me and build applications that make a real difference.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <motion.section 
      ref={sectionRef}
      id="about" 
      className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.div className="text-center mb-12 sm:mb-16 relative z-10">
        <motion.h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.div>

      {/* Highlight Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-full"
            >
              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${20 + i * 25}%`,
                    top: `${-5 + i * 5}%`,
                  }}
                  animate={{
                    y: [-8, 8, -8],
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

              <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-pink-900/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 h-full shadow-2xl">
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                />

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                />

                {/* Title */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                  {highlight.description}
                </p>

                {/* Sparkles */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      right: `${20 + i * 30}%`,
                      bottom: `${20 + i * 20}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Story Card */}
      <motion.div
        variants={cardVariants}
        className="group"
      >
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                left: `${15 + i * 18}%`,
                top: `${-5 + (i % 2) * 10}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2
              }}
            />
          ))}

          <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 backdrop-blur-xl rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl">
            {/* Strong glow effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500 -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.6 }}
            />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
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
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  My Journey
                </h3>
              </motion.div>

              <div className="space-y-6 text-purple-100/90 text-base sm:text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Hello! I'm <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Musfika Rahman Bushra</span>, currently studying Computer Science and Technology at Sylhet Polytechnic Institute. My programming journey began when I heard about Programming Hero from my sister. That spark of curiosity quickly turned into a passion, and I've been exploring the world of web development ever since.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  I love building interactive and user-friendly web applications, especially using the MERN stack. Designing clean interfaces, solving real-world problems, and creating smooth user experiences are the types of work I truly enjoy. Every project is a chance to learn, iterate, and grow.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  I'm a curious, detail-oriented person who enjoys learning new things and sharing knowledge. Whether it's debugging a tricky issue or sketching a new character, I bring focus, creativity, and heart to everything I do.
                </motion.p>
              </div>
            </div>

            {/* Sparkles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${25 + i * 20}%`,
                  top: `${30 + i * 15}%`,
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
