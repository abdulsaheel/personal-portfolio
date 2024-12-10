"use client";
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingIcons from '@/components/FloatingIcons'
import React from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    document.body.classList.add('cosmic-background')
  }, [])

  return (
    <main className={`min-h-screen text-green-400 p-4 overflow-hidden ${loaded ? 'fade-in' : ''}`}>
      <FloatingIcons />
      <div className="max-w-6xl mx-auto relative">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

