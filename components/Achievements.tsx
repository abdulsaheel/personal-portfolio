import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'Hackathon Champion',
    description: 'Won first place in the Global AI Hackathon 2022, developing an AI-powered solution for climate change prediction.',
    icon: '🏆',
  },
  {
    title: 'Open Source Contributor',
    description: 'Major contributor to popular open-source projects, with over 1000 GitHub stars and 500 forks across various repositories.',
    icon: '⭐',
  },
  {
    title: 'Tech Conference Speaker',
    description: 'Delivered keynote speeches at multiple international tech conferences, including PyCon and DevOpsDays.',
    icon: '🎤',
  },
  {
    title: 'Patent Holder',
    description: 'Holds two patents for innovative algorithms in distributed systems and quantum computing applications.',
    icon: '📜',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="mb-16">
      <h2 className="text-4xl mb-8 text-center glitch">Legendary Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className="border-2 border-green-400 p-6 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl mb-2 flex items-center">
              <span className="text-4xl mr-2">{achievement.icon}</span>
              {achievement.title}
            </h3>
            <p>{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

