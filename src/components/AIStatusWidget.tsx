import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = [
  { hourRange: [5, 12], text: 'Good morning' },
  { hourRange: [12, 18], text: 'Good afternoon' },
  { hourRange: [18, 22], text: 'Good evening' },
  { hourRange: [22, 24], text: 'Working late?' },
  { hourRange: [0, 5], text: 'Night owl detected' },
]

export default function AIStatusWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [greeting, setGreeting] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hour = new Date().getHours()
    const matchedGreeting = greetings.find(
      (g) => hour >= g.hourRange[0] && hour < g.hourRange[1]
    )
    setGreeting(matchedGreeting?.text || 'Hello')
  }, [])

  if (!mounted) return null

  return (
    <div className="ai-widget-2055">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-full right-0 mb-4 w-72 holo-panel p-5 rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(6,182,212,0.1)]">
              <div>
                <h4 className="font-display text-sm font-bold text-[var(--nebula-cyan)]">AI Status</h4>
                <p className="font-tech text-xs text-gray-500">Quantum Core Online</p>
              </div>
              <div className="status-badge-2055">
                <span className="status-dot-2055" />
                Active
              </div>
            </div>

            {/* Greeting */}
            <div className="mb-4 pb-3 border-b border-[rgba(6,182,212,0.1)]">
              <p className="font-display text-base font-bold text-[var(--quantum-white)] mb-1">{greeting}</p>
              <p className="font-tech text-xs text-gray-500">Powered by Transformers.js</p>
            </div>

            {/* Status */}
            <div className="space-y-2 mb-4">
              {[
                { label: 'Model', value: 'Quantized' },
                { label: 'Inference', value: 'Local' },
                { label: 'Latency', value: '<10ms' },
              ].map((status) => (
                <div key={status.label} className="flex items-center justify-between py-1.5 px-2 rounded bg-[var(--void-800)]">
                  <span className="font-tech text-xs text-gray-500">{status.label}</span>
                  <span className="font-tech text-xs text-gray-300">{status.value}</span>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--nebula-cyan)]/10 to-[var(--nebula-magenta)]/10 border border-[var(--nebula-cyan)]/20 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">🔥</span>
                <span className="font-tech text-xs text-[var(--nebula-cyan)]">PyTorch Philippines Ambassador</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Core Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="quantum-core"
      >
        <span className="text-2xl">🤖</span>
      </motion.button>
    </div>
  )
}
