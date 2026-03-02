'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-purple-500 to-pink-500',
      glowColor: '#9333EA',
      skills: [
        { 
          name: 'React', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        { 
          name: 'Next.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          invert: true
        },
        { 
          name: 'Tailwind CSS', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        },
        { 
          name: 'JavaScript', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        { 
          name: 'HTML5', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        { 
          name: 'CSS3', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      glowColor: '#10B981',
      skills: [
        { 
          name: 'Node.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        { 
          name: 'Express', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          invert: true
        },
        { 
          name: 'MongoDB', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        { 
          name: 'Firebase', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        },
      ],
    },
    {
      title: 'Tools',
      color: 'from-blue-500 to-cyan-500',
      glowColor: '#3B82F6',
      skills: [
        { 
          name: 'GitHub', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          invert: true
        },
        { 
          name: 'VS Code', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        { 
          name: 'Figma', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        },
        { 
          name: 'Vercel', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
          invert: true
        },
        { 
          name: 'Netlify', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12 sm:mb-16 lg:mb-20 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            My Skills
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="space-y-12 sm:space-y-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            variants={categoryVariants}
            className="relative"
          >
            {/* Category Title */}
            <motion.div 
              className="flex items-center gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <motion.div
                className={`h-1 w-12 sm:w-16 bg-gradient-to-r ${category.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 + 0.3 }}
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {category.title}
              </h3>
            </motion.div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={cardVariants}
                  className="group"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.08,
                      y: -10,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <Card className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl h-full shadow-2xl">
                      {/* Enhanced gradient border effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                      
                      {/* Stronger glow effect on hover */}
                      <motion.div
                        className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                        style={{
                          background: `radial-gradient(circle at center, ${category.glowColor}60 0%, transparent 70%)`,
                        }}
                      />

                      {/* Glass reflection effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                      <CardContent className="relative p-6 sm:p-8 flex flex-col items-center text-center h-full justify-center min-h-[180px] sm:min-h-[200px]">
                        {/* Icon with enhanced glow */}
                        <motion.div
                          className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 relative"
                          whileHover={{ 
                            scale: 1.15,
                            rotate: [0, -8, 8, -8, 0],
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={96}
                            height={96}
                            className={`w-full h-full object-contain ${skill.invert ? 'invert' : ''} group-hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.8)] transition-all duration-300`}
                          />
                        </motion.div>

                        {/* Skill Name with enhanced styling */}
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-purple-400 transition-all duration-300">
                          {skill.name}
                        </h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
