import { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 95, icon: '🐍', description: 'Master of pythonic sorcery' },
  { name: 'JavaScript', level: 90, icon: '🌐', description: 'DOM manipulator extraordinaire' },
  { name: 'DevOps', level: 85, icon: '🚀', description: 'CI/CD pipeline architect' },
  { name: 'React', level: 88, icon: '⚛️', description: 'Component conjurer' },
  { name: 'AWS', level: 82, icon: '☁️', description: 'Cloud infrastructure wizard' },
  { name: 'Kotlin', level: 75, icon: '📱', description: 'Android app alchemist' },
  { name: 'Docker', level: 80, icon: '🐳', description: 'Container orchestration virtuoso' },
  { name: 'Machine Learning', level: 78, icon: '🤖', description: 'AI model tamer' },
  { name: 'GraphQL', level: 85, icon: '📊', description: 'Query language revolutionary' },
  { name: 'Blockchain', level: 72, icon: '🔗', description: 'Decentralized ledger pioneer' },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-4xl mb-8 text-center glitch">Skills & Superpowers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="border-2 border-green-400 p-4 rounded-lg relative overflow-hidden"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            whileHover={{ scale: 1.05, rotateY: 180 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">{skill.icon}</span>
              <h3 className="text-lg">{skill.name}</h3>
            </div>
            <motion.div
              className="w-full bg-gray-700 rounded-full h-2.5"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div
                className="bg-green-400 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </motion.div>
            {hoveredSkill === skill.name && (
              <motion.div
                className="absolute inset-0 bg-green-400 text-black p-4 flex items-center justify-center text-center"
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {skill.description}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

