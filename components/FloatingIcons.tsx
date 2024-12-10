'use client'

import { useEffect, useState } from 'react'

const icons = ['💻', '🚀', '🔧', '🔍', '🌟', '🔥', '⚡', '🎯', '🔐', '🌈']

const MAX_ICONS = 10; // Limit number of icons active at any time.

export default function FloatingIcons() {
  const [activeIcons, setActiveIcons] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIcons.length < MAX_ICONS) {
        createIcon();
      }
    }, 150); // Throttle creation every 150ms

    return () => clearInterval(interval);
  }, [activeIcons]);

  const createIcon = () => {

    const newIconId = Date.now(); // Use unique key-like timestamp

    setActiveIcons((prev) => [...prev, newIconId]);

    const timeout = setTimeout(() => {
      setActiveIcons((prev) => prev.filter((id) => id !== newIconId));
    }, 5000);

    return () => clearTimeout(timeout);
  };

  return (
    <div
      id="floating-icons"
      className="fixed inset-0 pointer-events-none z-0"
    >
      {activeIcons.map((iconId) => (
        <div
          key={iconId}
          className="floating-icon absolute text-4xl"
          style={{
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`,
          }}
        >
          {icons[Math.floor(Math.random() * icons.length)]}
        </div>
      ))}
    </div>
  );
}
