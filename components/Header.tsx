import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 mb-8 border-b-2 border-green-400">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl hover:text-white transition-colors">MD Abdul Sahil</Link>
        <div className="space-x-4">
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

