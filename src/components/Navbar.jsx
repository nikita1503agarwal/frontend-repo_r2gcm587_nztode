import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_30px_rgba(99,102,241,0.6)]" />
          <span className="text-white font-semibold tracking-wide">VOICE by Vasić Media</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <button className="hover:text-white" onClick={() => scrollTo('how')}>How it works</button>
          <button className="hover:text-white" onClick={() => scrollTo('pricing')}>Pricing</button>
          <button className="hover:text-white" onClick={() => scrollTo('why')}>Why VOICE</button>
          <button className="hover:text-white" onClick={() => scrollTo('cases')}>Case studies</button>
          <button className="hover:text-white" onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition">Get strategy</button>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3 text-white/80">
          {[
            { id: 'how', label: 'How it works' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'why', label: 'Why VOICE' },
            { id: 'cases', label: 'Case studies' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Get strategy' },
          ].map((item) => (
            <button key={item.id} className="block w-full text-left py-2" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
