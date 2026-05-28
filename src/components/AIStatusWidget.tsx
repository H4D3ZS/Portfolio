import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  sender: 'system' | 'user' | 'agent'
  text: string
  timestamp: string
}

export default function AIStatusWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    // Core boot logs
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    setMessages([
      { sender: 'system', text: `HADES_AGENT_INIT v2.6.3 [ONLINE]`, timestamp: now },
      { sender: 'system', text: `Model: Local Distilled LLaMA-Lite (quantized)`, timestamp: now },
      { sender: 'agent', text: `Welcome. I am the Hades Autonomous Assistant. Type your request or select one of the core system modules below:`, timestamp: now }
    ])
  }, [])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [messages, isOpen])

  if (!mounted) return null

  const getSystemResponse = (input: string): string => {
    const cleanInput = input.toLowerCase().trim()
    
    if (cleanInput.includes('help') || cleanInput.includes('menu') || cleanInput.includes('clear')) {
      return `SYSTEM ACCESS GRANTED. AVAILABLE MODULES:
- [web]: Full-stack Web3 & Web development experience
- [mobile]: Swift, SwiftUI, and Flutter engineering
- [hades]: Custom 1GB Linux Kernel substrate research
- [vscodium]: Rust-based sovereign IDE tooling
- [contact]: Rolando's communication protocols`
    }
    
    if (cleanInput.includes('web') || cleanInput.includes('fullstack') || cleanInput.includes('react') || cleanInput.includes('solidity')) {
      return `WEB CORE DIAGNOSTICS:
- Sr. Web3 Engineer at Success Academy LLC.
- Engineered Solidity smart contracts, Solana API hooks, & Unity3D bridge wrappers.
- Technical expertise in React.js, TailwindCSS v4, Node.js, and Laravel integrations.
- Built multiple responsive web modules matching zero-friction SEO standard.`
    }
    
    if (cleanInput.includes('mobile') || cleanInput.includes('flutter') || cleanInput.includes('swift') || cleanInput.includes('ios')) {
      return `MOBILE CORE DIAGNOSTICS:
- iOS Developer at Dance Vision. Developed native App with Swift, SwiftUI & PostgreSQL.
- Architected Acheron Emulator: Swift/C++ iOS virtualization sandbox.
- Developed "Tapme Tap You" Dating app & "Paps Delivery" App in Flutter/Dart.
- Native Android expertise using Java and Android Studio.`
    }

    if (cleanInput.includes('hades') || cleanInput.includes('kernel') || cleanInput.includes('ebpf')) {
      return `PROJECT HADES DIAGNOSTICS:
- Independent Research on sub-1GB Linux 7.0 kernel.
- Custom eBPF 'Reflex Arc' integration for active real-time package routing.
- Designed 10MB Neural VFS (.aim) for edge storage and distill inference.`
    }

    if (cleanInput.includes('vscodium') || cleanInput.includes('rust') || cleanInput.includes('ide')) {
      return `VSCODIUM-RUST SPECIFICATION:
- Sovereign Agentic IDE built in Rust + Tauri.
- Integrated Claude Code engine with parallel agent executors.
- 100% local Ollama-first pipeline ensuring data confidentiality.`
    }
    
    if (cleanInput.includes('contact') || cleanInput.includes('email') || cleanInput.includes('phone')) {
      return `COMMUNICATION PORTS OPEN:
- Email: ferrer.rolando2001@gmail.com
- Mobile: +63-976-127-0346
- Address: General Santos City, South Cotabato, Philippines
- Ambassador: PyTorch Philippines community hub`
    }

    if (cleanInput.includes('ambassador') || cleanInput.includes('pytorch')) {
      return `PYTORCH FOUNDATION ENGAGEMENT:
- Appointed PyTorch Philippines Ambassador.
- Organizing AI training, edge deployment audits, and deep learning seminars.
- Core advocate for open deep-learning pipelines and local data sovereignty.`
    }

    return `Heuristics Match [NIL]. Fallback Response:
Rolando H. Ferrer Jr. is an AI Systems Engineer & Full-stack Developer.
Try typing: "web", "mobile", "hades", "vscodium", or "contact" for custom specifications.`
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    const userMsg: Message = { sender: 'user', text: inputValue, timestamp: now }
    
    setMessages(prev => [...prev, userMsg])
    const currentInput = inputValue
    setInputValue('')

    // Simulate Agent processing delay
    setTimeout(() => {
      const responseText = getSystemResponse(currentInput)
      const agentNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      setMessages(prev => [...prev, { sender: 'agent', text: responseText, timestamp: agentNow }])
    }, 450)
  }

  const triggerPreset = (presetCommand: string) => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    setMessages(prev => [...prev, { sender: 'user', text: `Accessing Module: ${presetCommand.toUpperCase()}`, timestamp: now }])
    
    setTimeout(() => {
      const responseText = getSystemResponse(presetCommand)
      const agentNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      setMessages(prev => [...prev, { sender: 'agent', text: responseText, timestamp: agentNow }])
    }, 300)
  }

  return (
    <div className="ai-widget-2055">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="absolute bottom-full right-0 mb-4 w-80 md:w-96 holo-panel p-5"
            style={{ border: '1px solid rgba(0,245,255,0.2)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-[rgba(0,245,255,0.1)]">
              <div>
                <h4 className="font-display text-sm font-bold text-[var(--nebula-cyan)]">HADES_AUTONOMOUS_CORE</h4>
                <p className="font-tech text-[10px] text-gray-500">Local Inference Online</p>
              </div>
              <div className="status-badge-2055">
                <span className="status-dot-2055" />
                ACTIVE
              </div>
            </div>

            {/* Floating Chat Screen */}
            <div className="floating-console">
              <div 
                ref={outputRef}
                className="console-output custom-scrollbar"
                style={{ maxHeight: '220px', overflowY: 'auto' }}
              >
                {messages.map((msg, i) => (
                  <div key={i} className="mb-2.5">
                    {msg.sender === 'system' && (
                      <div className="text-[10px] text-gray-500 font-tech">
                        [{msg.timestamp}] &gt;&gt; {msg.text}
                      </div>
                    )}
                    {msg.sender === 'user' && (
                      <div className="text-right">
                        <span className="inline-block bg-[rgba(185,131,255,0.15)] text-[var(--nebula-magenta)] px-2.5 py-1 rounded-md text-[11px] font-tech border border-[rgba(185,131,255,0.25)]">
                          user@client:~$ {msg.text}
                        </span>
                      </div>
                    )}
                    {msg.sender === 'agent' && (
                      <div className="text-left">
                        <div className="text-[10px] text-[var(--nebula-cyan)] font-tech mb-0.5">
                          agent@hades:~$ [{msg.timestamp}]
                        </div>
                        <span className="inline-block bg-[rgba(0,245,255,0.06)] text-[var(--quantum-white)] px-3 py-1.5 rounded-lg text-[11px] leading-relaxed border border-[rgba(0,245,255,0.12)] whitespace-pre-line font-tech">
                          {msg.text}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Prompt Controls */}
              <div className="flex flex-wrap gap-1.5 mb-3 pt-2 border-t border-[rgba(0,245,255,0.08)]">
                <button 
                  onClick={() => triggerPreset('web')}
                  className="px-2 py-1 text-[9px] font-tech text-gray-400 bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded hover:border-[var(--nebula-cyan)] hover:text-white"
                >
                  🌐 WEB_DEV
                </button>
                <button 
                  onClick={() => triggerPreset('mobile')}
                  className="px-2 py-1 text-[9px] font-tech text-gray-400 bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded hover:border-[var(--nebula-cyan)] hover:text-white"
                >
                  📱 MOBILE_DEV
                </button>
                <button 
                  onClick={() => triggerPreset('hades')}
                  className="px-2 py-1 text-[9px] font-tech text-gray-400 bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded hover:border-[var(--nebula-cyan)] hover:text-white"
                >
                  🔬 SYSTEMS
                </button>
                <button 
                  onClick={() => triggerPreset('contact')}
                  className="px-2 py-1 text-[9px] font-tech text-gray-400 bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded hover:border-[var(--nebula-cyan)] hover:text-white"
                >
                  📧 CONTACTS
                </button>
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendMessage} className="console-input-row">
                <span className="console-prompt-indicator">&gt;</span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question (e.g. Solidity, Swift)..."
                  className="console-input-field"
                  style={{ border: 'none', background: 'transparent', outline: 'none' }}
                />
                <button 
                  type="submit" 
                  className="text-[var(--nebula-cyan)] hover:text-[var(--nebula-magenta)] text-xs font-tech font-bold px-2 cursor-pointer"
                >
                  SEND
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger floating button & Tooltip helper */}
      <div className="flex items-center gap-3 justify-end">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="px-3.5 py-1.5 holo-panel text-[10px] font-tech text-[var(--nebula-cyan)] whitespace-nowrap hidden sm:block shadow-lg"
              style={{ border: '1px solid rgba(0, 245, 255, 0.25)', background: 'rgba(5, 5, 8, 0.95)' }}
            >
              ⚙️ HADES_AI: ACTIVE (Click to chat)
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="quantum-core relative"
          aria-label="Toggle AI Agent Assistant Console"
        >
          <span className="text-xl">🤖</span>
        </motion.button>
      </div>
    </div>
  )
}
