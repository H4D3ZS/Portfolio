import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HeroProps {
  onNext: () => void
}

export default function Hero({ onNext }: HeroProps) {
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  
  const bootLogs = [
    "&gt;&gt; BOOTING HADES_CORE SYSTEM...",
    "&gt;&gt; RESOLVING SYSTEMS STACK CONFIGURATION...",
    "&gt;&gt; HOST_NODE: EDGE_REGION_PH_2055",
    "&gt;&gt; PYTORCH_AMBASSADOR_STATUS: ACTIVE",
    "&gt;&gt; RUST_TAURI_ENGINE: ENABLING SOVEREIGN_IDE",
    "&gt;&gt; LINUX_SUBSTRATE_HADES_V7: SUB_1GB [STABLE]",
    "&gt;&gt; SOLIDITY_EVM_SOLANA_API: PORTS INTEGRATED",
    "&gt;&gt; MOBILE_INFRASTRUCTURE: SWIFT_SWIFTUI / FLUTTER [ONLINE]",
    "&gt;&gt; AUTHENTICATION: SUCCESS",
    "&gt;&gt; ALL SYSTEMS OPERATIONAL. READY FOR AGENT ACTIONS."
  ]

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < bootLogs.length) {
        setTerminalLines(prev => [...prev, bootLogs[index]])
        index++
      } else {
        clearInterval(interval)
      }
    }, 400)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="section-wrapper">
      <div className="hero-pane-container">
        {/* Left Side: Brand Text & Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="status-badge-2055">
              <span className="status-dot-2055" />
              SYSTEM ACTIVE
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="gradient-2055">ROLANDO H</span>
            <br />
            <span className="gradient-2055-alt">FERRER JR</span>
          </h1>

          <p className="font-tech text-xs md:text-sm text-[var(--nebula-cyan)] font-semibold tracking-widest mb-6">
            AI SYSTEMS ENGINEER & FULL-STACK DEVELOPER
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Specializing in low-level kernel optimizations, autonomous edge AI substrates, PyTorch acceleration, native iOS/Flutter development, and high-performance Web3 solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={onNext} className="btn-2055 btn-2055-primary">
              See My Works →
            </button>
            <a 
              href="mailto:ferrer.rolando2001@gmail.com" 
              className="btn-2055 btn-2055-secondary"
            >
              Secure Channel
            </a>
          </div>
        </motion.div>

        {/* Right Side: Virtual Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="cyber-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot bg-red-500/80" />
                <span className="terminal-dot bg-yellow-500/80" />
                <span className="terminal-dot bg-green-500/80" />
              </div>
              <span className="text-[10px] text-gray-500 tracking-wider">HADES_AGENTS_SHELL</span>
            </div>

            <div className="terminal-content custom-scrollbar min-h-[260px] max-h-[300px]">
              <div className="space-y-1.5">
                {terminalLines.map((line, idx) => (
                  <div key={idx} className="font-tech text-[11px] leading-relaxed text-[var(--nebula-cyan)]" dangerouslySetInnerHTML={{ __html: line }} />
                ))}
                {terminalLines.length < bootLogs.length ? (
                  <span className="inline-block w-1.5 h-3 bg-[var(--nebula-cyan)] animate-pulse" />
                ) : (
                  <div className="text-green-400 animate-pulse font-tech text-[11px] mt-2">
                    hades_agent@client:~$ _
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
