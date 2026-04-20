import { motion } from 'framer-motion'

interface HeroProps {
  onNext: () => void
}

export default function Hero({ onNext }: HeroProps) {
  return (
    <div className="hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Hero Image */}
        <div className="hero-image-container">
          <img 
            src="/media/hero.b4b83a6ce16c771a9151.png" 
            alt="Workspace" 
            className="hero-image"
          />
        </div>

        {/* Name */}
        <h1 className="hero-name">Rolando H Ferrer Jr</h1>
        
        {/* Subtitle */}
        <p className="hero-subtitle">AI SYSTEMS ENGINEER & FULLSTACK DEVELOPER</p>
        
        {/* CTA Button */}
        <button onClick={onNext} className="hero-btn">
          see my works
        </button>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">SCROLL</div>
    </div>
  )
}
