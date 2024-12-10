'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import WhackABug from './WhackABug'

const titles = [
  "Production-Ready Developer",
  "Python Wizard",
  "DevOps Mastermind",
  "AI Enthusiast",
  "Blockchain Explorer",
  "Cloud Architecture Guru",
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [showWhackABug, setShowWhackABug] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mb-16 text-center relative">
      <motion.h1 
        className="text-6xl mb-4 glitch"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        Mohammad Abdul Sahil
      </motion.h1>
      <motion.div
        className="text-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {titles[titleIndex]}
      </motion.div>
      <p className="text-xl mb-8 pixelate">
        Crafting digital wonders and taming technological chaos since 2015. 
        Let&apos;s turn your wildest tech dreams into reality!
      </p>
      <motion.div 
        className="flex justify-center space-x-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-400 text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-green-400 transition-all duration-300"
        >
          Hire Me!
        </motion.a>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="border-2 border-green-400 px-6 py-3 rounded-full text-lg font-bold hover:bg-green-400 hover:text-black transition-all duration-300"
        >
          Explore My Work
        </motion.a>
        <motion.button
          onClick={() => setShowWhackABug(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-purple-600 transition-all duration-300"
        >
          Whack-a-Bug!
        </motion.button>
      </motion.div>
      {showWhackABug && <WhackABug onClose={() => setShowWhackABug(false)} />}
    </section>
  )
}

