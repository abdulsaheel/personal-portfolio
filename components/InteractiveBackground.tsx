import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const items = ['🐍', '☁️', '🚀', '💻', '🔧', '🌟', '🎮', '🔥', '💡', '🌈'];

export default function InteractiveBackground() {
  const [elements, setElements] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (elements.length < 20) {
        const newElement = (
          <motion.div
            key={Date.now()}
            className="absolute text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
          >
            {items[Math.floor(Math.random() * items.length)]}
          </motion.div>
        );
        setElements((prev) => [...prev, newElement]);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [elements]);

  return <div className="fixed inset-0 pointer-events-none z-0">{elements}</div>;
}