import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    // Simulate sending message
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Message sent:', message)
    setMessage('')
    setIsSending(false)
    alert('Message received! I\'ll get back to you faster than you can say "Python is awesome!"')
  }

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-4xl mb-8 text-center glitch">Initiate Communication</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <div>
          <label htmlFor="message" className="block mb-2 text-lg">Your Cosmic Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 bg-black border-2 border-green-400 rounded text-green-400 focus:outline-none focus:border-white transition-colors duration-300"
            rows={6}
            required
            placeholder="Type your message here... Don't worry, I speak both human and binary!"
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-green-400 text-black px-6 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-green-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSending}
        >
          {isSending ? 'Transmitting...' : 'Send Transmission'}
        </motion.button>
      </form>
    </section>
  )
}

