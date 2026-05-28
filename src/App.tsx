import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import About from './components/About'
import Contact from './components/Contact'
import Background from './components/Background'
import AIStatusWidget from './components/AIStatusWidget'

type SectionId = 'home' | 'about' | 'projects' | 'contact'

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const navLinks: { id: SectionId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      
      for (const link of navLinks) {
        const element = document.getElementById(link.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: SectionId) => {
    setDrawerOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const topOffset = element.offsetTop - 80
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-darker)] text-[var(--text-primary)]">
      {/* Background Interactive canvas particle grids */}
      <Background />

      {/* Cyber Sticky Header Nav */}
      <nav className="cyber-nav">
        <div className="cyber-nav-container">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="cyber-nav-logo">
            <span>⚡ H4D3S / CORE</span>
            <span className="status-dot-2055" />
          </a>

          {/* Desktop Links */}
          <div className="cyber-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`cyber-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hamburger (Mobile) */}
          <button 
            className="hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Navigation Drawer"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Sidebar Navigation Menu) */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-90"
            />
            
            {/* Drawer container */}
            <motion.div
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="mobile-drawer"
            >
              <button 
                className="close-drawer-btn font-tech"
                onClick={() => setDrawerOpen(false)}
              >
                ×
              </button>
              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`mobile-drawer-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    [ {link.label.toUpperCase()} ]
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Single Page Scroll Sections */}
      <main className="relative z-10">
        <section id="home">
          <Hero onNext={() => scrollToSection('projects')} />
        </section>

        <section id="about" className="border-t border-gray-950/60 bg-[rgba(5,5,8,0.3)]">
          <About onNext={() => scrollToSection('projects')} />
        </section>

        <section id="projects" className="border-t border-gray-950/60">
          <ProductShowcase />
        </section>

        <section id="contact" className="border-t border-gray-950/60 bg-[rgba(5,5,8,0.3)]">
          <Contact />
        </section>
      </main>

      {/* Persistent AI Status Chat Widget */}
      <AIStatusWidget />

      {/* Cryptographic Stamp Footer */}
      <footer className="cyber-footer">
        <p className="cyber-footer-text">
          SYSTEM_PORTFOLIO_ENCRYPTED // © 2026 ROLANDO H. FERRER JR. ALL CHANNELS RESERVED.
        </p>
      </footer>
    </div>
  )
}
