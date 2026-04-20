import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import About from './components/About'
import Contact from './components/Contact'

type Page = 'home' | 'about' | 'projects' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const pages: { id: Page; component: React.ReactNode; label: string }[] = [
    { id: 'home', component: <Hero onNext={() => setCurrentPage('projects')} />, label: 'Home' },
    { id: 'about', component: <About onNext={() => setCurrentPage('projects')} />, label: 'About' },
    { id: 'projects', component: <ProductShowcase />, label: 'Projects' },
    { id: 'contact', component: <Contact />, label: 'Contact' },
  ]

  return (
    <div className="relative min-h-screen bg-[var(--bg-dark)]">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-links">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`nav-link ${currentPage === page.id ? 'active' : ''}`}
            >
              {page.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {pages.map((page) => (
          currentPage === page.id && (
            <motion.div
              key={page.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {page.component}
            </motion.div>
          )
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2026 Rolando H Ferrer Jr. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
