import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import WhyWorks from './components/WhyWorks'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#05060A]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <WhyWorks />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/40 text-white/60">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Vasić Media. All rights reserved.</p>
          <div className="text-sm">VOICE – Guaranteed TikTok Reach Engine</div>
        </div>
      </footer>
    </div>
  )
}

export default App
