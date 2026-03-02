'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      pulseSpeed: number
      pulsePhase: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
        
        // Random purple/pink colors
        const colors = [
          'rgba(168, 85, 247, ',  // purple-500
          'rgba(217, 70, 239, ',  // fuchsia-500
          'rgba(236, 72, 153, ',  // pink-500
          'rgba(139, 92, 246, ',  // violet-500
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around screen
        if (this.x > canvasWidth) this.x = 0
        if (this.x < 0) this.x = canvasWidth
        if (this.y > canvasHeight) this.y = 0
        if (this.y < 0) this.y = canvasHeight

        // Pulse effect
        this.pulsePhase += this.pulseSpeed
      }

      draw() {
        if (!ctx) return
        const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.2
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + pulseOpacity + ')'
        ctx.fill()

        // Glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color + '0.8)'
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Geometric shape class
    class GeometricShape {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
      fadeDirection: number
      type: 'circle' | 'triangle' | 'square'
      color: string
      orbitRadius: number
      orbitAngle: number
      orbitSpeed: number
      centerX: number
      centerY: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.centerX = Math.random() * canvasWidth
        this.centerY = Math.random() * canvasHeight
        this.orbitRadius = Math.random() * 100 + 50
        this.orbitAngle = Math.random() * Math.PI * 2
        this.orbitSpeed = (Math.random() - 0.5) * 0.01
        this.x = this.centerX + Math.cos(this.orbitAngle) * this.orbitRadius
        this.y = this.centerY + Math.sin(this.orbitAngle) * this.orbitRadius
        this.size = Math.random() * 30 + 20
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.opacity = Math.random() * 0.15 + 0.05
        this.fadeDirection = Math.random() > 0.5 ? 0.001 : -0.001
        this.type = ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square'
        
        const colors = [
          'rgba(168, 85, 247, ',  // purple-500
          'rgba(217, 70, 239, ',  // fuchsia-500
          'rgba(236, 72, 153, ',  // pink-500
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update(canvasWidth: number, canvasHeight: number) {
        // Orbit movement
        this.orbitAngle += this.orbitSpeed
        this.x = this.centerX + Math.cos(this.orbitAngle) * this.orbitRadius
        this.y = this.centerY + Math.sin(this.orbitAngle) * this.orbitRadius

        // Rotation
        this.rotation += this.rotationSpeed

        // Fade in/out
        this.opacity += this.fadeDirection
        if (this.opacity >= 0.2 || this.opacity <= 0.05) {
          this.fadeDirection *= -1
        }

        // Wrap orbit center
        if (this.centerX > canvasWidth + 100) this.centerX = -100
        if (this.centerX < -100) this.centerX = canvasWidth + 100
        if (this.centerY > canvasHeight + 100) this.centerY = -100
        if (this.centerY < -100) this.centerY = canvasHeight + 100
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = this.opacity

        ctx.strokeStyle = this.color + '0.8)'
        ctx.lineWidth = 2
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color + '0.6)'

        if (this.type === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.stroke()
        } else if (this.type === 'triangle') {
          ctx.beginPath()
          ctx.moveTo(0, -this.size)
          ctx.lineTo(this.size, this.size)
          ctx.lineTo(-this.size, this.size)
          ctx.closePath()
          ctx.stroke()
        } else if (this.type === 'square') {
          ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
        }

        ctx.restore()
      }
    }

    // Create particles and shapes
    const particles: Particle[] = []
    const shapes: GeometricShape[] = []

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    for (let i = 0; i < 12; i++) {
      shapes.push(new GeometricShape(canvas.width, canvas.height))
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw shapes (behind particles)
      shapes.forEach(shape => {
        shape.update(canvas.width, canvas.height)
        shape.draw()
      })

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height)
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Deep purple gradient base */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950" />
      
      {/* Radial gradient overlays for depth */}
      <motion.div
        className="fixed inset-0 -z-40 opacity-40"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Canvas for particles and shapes */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-30 pointer-events-none"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Twinkling stars overlay */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Soft glow overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-t from-transparent via-purple-900/10 to-transparent pointer-events-none" />
    </>
  )
}
