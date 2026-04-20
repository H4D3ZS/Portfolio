import { motion } from 'framer-motion'

type Page = 'home' | 'research' | 'products' | 'experience' | 'about' | 'contact'

interface NavigationDotsProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}

export default function NavigationDots({ currentPage, onPageChange }: NavigationDotsProps) {
  const pages: { id: Page; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'research', label: 'Research', icon: '🔬' },
    { id: 'products', label: 'Products', icon: '📱' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ]

  return (
    <div className="nav-dots">
      {pages.map((page) => (
        <motion.div
          key={page.id}
          className="relative group"
          whileHover={{ scale: 1.2 }}
        >
          <div
            onClick={() => onPageChange(page.id)}
            className={`nav-dot ${currentPage === page.id ? 'active' : ''}`}
          />
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 holo-panel rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            <span className="font-tech text-xs text-[var(--nebula-cyan)]">{page.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
