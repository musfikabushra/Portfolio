'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current

    if (!section || !title) return

    gsap.fromTo(title,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  }

  return (
    <motion.section 
      ref={sectionRef}
      id="projects" 
      className="container mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.div className="text-center mb-12 sm:mb-16 relative z-10">
        <motion.h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          variants={cardVariants}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
          variants={cardVariants}
        >
          Showcasing my best work in web development
        </motion.p>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group perspective-1000"
          >
            <motion.div
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative h-full"
            >
              {/* Floating particles around card */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${-5 + (i % 3) * 10}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2
                  }}
                />
              ))}

              <Card className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-pink-900/20 backdrop-blur-xl h-full shadow-2xl">
                {/* Gradient glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                />

                {/* Stronger glow on hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.75 }}
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
                      repeatDelay: 1
                    }}
                  />
                </div>

                <CardContent className="p-0 relative z-10 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 sm:h-56">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent" />

                    {/* Sparkle effects */}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${30 + i * 15}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: 'easeInOut'
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <motion.h3 
                      className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-purple-200/80 text-sm sm:text-base mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.split(', ').slice(0, 3).map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(168, 85, 247, 0.3)'
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons - Hidden by default, fade in on hover */}
                    <motion.div 
                      className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <Link href={`/projects/${project.slug}`} className="flex-1">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg shadow-purple-500/50">
                            <span className="flex items-center justify-center gap-2">
                              <span className="material-icons-outlined text-sm">visibility</span>
                              View Project
                            </span>
                          </Button>
                        </motion.div>
                      </Link>

                      <Link href={project.live} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="outline" 
                            className="px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
                          >
                            <span className="material-icons-outlined text-sm">open_in_new</span>
                          </Button>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
