'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    name: 'WISAtharva',
    description: 'AI-powered learning assistant that revolutionizes personalized education.',
    tech: ['Python', 'TensorFlow', 'NLP', 'React'],
    link: '#',
    icon: '🤖',
  },
  {
    name: 'MetaLand Holdings',
    description: 'Blockchain-based real estate visualization and management platform.',
    tech: ['TypeScript', 'Ethereum', 'Three.js', 'GraphQL'],
    link: '#',
    icon: '🏙️',
  },
  {
    name: 'CloudOps Maestro',
    description: 'Advanced cloud infrastructure automation and optimization tool.',
    tech: ['Python', 'AWS', 'Terraform', 'Kubernetes'],
    link: '#',
    icon: '☁️',
  },
  {
    name: 'QuantumChat',
    description: 'Secure messaging app leveraging quantum encryption algorithms.',
    tech: ['Kotlin', 'Quantum SDK', 'Firebase', 'Protocol Buffers'],
    link: '#',
    icon: '🔐',
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-4xl mb-8 text-center glitch">Legendary Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="border-2 border-green-400 p-6 rounded-lg cursor-pointer relative overflow-hidden"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl mb-2 flex items-center">
              <span className="text-4xl mr-2">{project.icon}</span>
              {project.name}
            </h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-green-400 text-black px-2 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <AnimatePresence>
              {activeProject === index && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.a
                    href={project.link}
                    className="bg-green-400 text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-green-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Explore Project
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

