import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'
import React from 'react'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Mohammad Abdul Sahil - Mind-Blowing Portfolio',
  description: 'Production-Ready Developer | Python Wizard | DevOps Mastermind | AI Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

