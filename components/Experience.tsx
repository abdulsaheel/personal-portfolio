'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'TechGigantoCorp',
    position: 'Senior Full-Stack Sorcerer',
    period: '2021 - Present',
    description: 'Architecting scalable cloud solutions and mentoring junior developers in the dark arts of coding.',
  },
  {
    company: 'StartupRocketShip Inc.',
    position: 'DevOps Ninja',
    period: '2019 - 2021',
    description: 'Orchestrated CI/CD pipelines and optimized infrastructure, reducing deployment times by 70% and scaling to handle 10x traffic spikes.',
  },
  {
    company: 'AI Innovations Ltd.',
    position: 'Machine Learning Engineer',
    period: '2017 - 2019',
    description: 'Developed cutting-edge AI models for natural language processing and computer vision, revolutionizing customer service chatbots.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-4xl mb-8 text-center glitch">Epic Career Journey</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="border-2 border-green-400 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl mb-2">{exp.position}</h3>
            <h4 className="text-xl mb-2 text-green-400">{exp.company}</h4>
            <p className="mb-2 text-gray-400">{exp.period}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

