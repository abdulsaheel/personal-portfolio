"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const bugs = ['🐛', '🐞', '🕷️', '🦟', '🐜', '🦗', '🪲', '🪳']

interface WhackABugProps {
  onClose: () => void
}

export default function WhackABug({ onClose }: WhackABugProps) {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [activeBugs, setActiveBugs] = useState<{ id: number; position: { x: number; y: number }; bug: string }[]>([])
  const [cheatCode, setCheatCode] = useState('')
  const [isCheatActive, setIsCheatActive] = useState(false)
  const [gameStatus, setGameStatus] = useState<'playing' | 'ended' | 'won'>('playing')

  useEffect(() => {
    let timer: NodeJS.Timeout
    let bugSpawner: NodeJS.Timeout

    if (gameStatus === 'playing') {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1 && !isCheatActive) {
            clearInterval(timer)
            clearInterval(bugSpawner)
            setGameStatus('ended')
            return 0
          }
          return prevTime - 1
        })
      }, 1000)

      bugSpawner = setInterval(() => {
        if (activeBugs.length < 5) {
          setActiveBugs((prevBugs) => [
            ...prevBugs,
            {
              id: Date.now(),
              position: {
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
              },
              bug: bugs[Math.floor(Math.random() * bugs.length)],
            },
          ])
        }
      }, 1000)
    }

    return () => {
      clearInterval(timer)
      clearInterval(bugSpawner)
    }
  }, [gameStatus, isCheatActive, activeBugs.length])

  const whackBug = (id: number) => {
    setScore((prevScore) => prevScore + 1)
    setActiveBugs((prevBugs) => prevBugs.filter((bug) => bug.id !== id))
  }

  const resetGame = () => {
    setScore(0)
    setTimeLeft(30)
    setActiveBugs([])
    setIsCheatActive(false)
    setCheatCode('')
    setGameStatus('playing')
  }

  const handleCheatCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setCheatCode(input)
    if (input.toLowerCase() === 'you are hired') {
      setIsCheatActive(true)
      setGameStatus('won')
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-800 p-8 rounded-lg relative w-[90vw] h-[90vh] max-w-4xl max-h-[600px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-red-500"
        >
          X
        </button>
        <h2 className="text-2xl mb-4 text-green-400 text-center">Whack-a-Bug!</h2>
        <p className="mb-4 text-green-400 text-center">Score: {score} | Time: {timeLeft}s</p>
        <div className="w-full h-[400px] border-2 border-green-400 relative overflow-hidden bg-black">
          <AnimatePresence>
            {activeBugs.map((bug) => (
              <motion.div
                key={bug.id}
                className="absolute text-4xl cursor-pointer"
                style={{ left: `${bug.position.x}%`, top: `${bug.position.y}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onClick={() => whackBug(bug.id)}
              >
                {bug.bug}
              </motion.div>
            ))}
          </AnimatePresence>
          {gameStatus === 'ended' && !isCheatActive && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl text-green-400 mb-4">Game Over! Your score: {score}</p>
                <button
                  onClick={resetGame}
                  className="bg-green-400 text-black px-4 py-2 rounded hover:bg-white transition-colors"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
          {gameStatus === 'won' && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl text-green-400 mb-4">😎 &quot;Cheat? Nope, just talent. You’re a legend for winning this game!&quot;</p>
                <button
                  onClick={resetGame}
                  className="bg-green-400 text-black px-4 py-2 rounded hover:bg-white transition-colors"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
        <p className="mt-4 text-green-400 text-center text-sm">Click the bugs to whack them!</p>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            value={cheatCode}
            onChange={handleCheatCode}
            placeholder="Enter cheat code (hint: About)"
            className="bg-gray-700 text-white px-3 py-2 rounded mr-2 w-300px placeholder:text-xs"
            style={{ width: '400px' }}
          />
          {isCheatActive && <span className="text-green-400 self-center">Cheat activated!</span>}
        </div>
        <div className="absolute bottom-4 left-4">
          <button
            className="text-green-400 text-sm hover:underline"
            onClick={() => alert('Hint: The cheat code is something you would say to a developer you just hired!')}
          >
            About
          </button>
        </div>
      </div>
    </motion.div>
  )
}