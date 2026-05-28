import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Project {
  name: string
  subtitle: string
  description: string
  details: string
  category: string
  filterCategory: 'systems' | 'web' | 'mobile' | 'gaming'
  image: string
  link?: string
  specs: string[]
  metrics?: { label: string; value: string }[]
}

export default function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'systems' | 'web' | 'mobile'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const products: Project[] = [
    {
      name: "VSCODIUM-RUST",
      subtitle: "AGENTIC & SOVEREIGN IDE",
      description: "IDE written in Rust + Tauri featuring Claude Code integration, Parallel Mind multi-agent orchestration, and Ollama data sovereignty.",
      details: "An open-source IDE built for absolute data security. Combines a Rust/Tauri native execution thread with multi-agent orchestration engines. Integrates parallel Claude CLI processes, allowing developers to execute visual system operations with 100% data confidentiality using local Ollama model layers.",
      category: "IDE / SYSTEM TOOLING",
      filterCategory: "systems",
      image: "media/vscodium_rust_ide.jpg",
      link: "https://github.com/H4D3ZS/vscodium-rust",
      specs: ["Rust & Tauri Native Substrate", "Claude Code (42+ tools) Integration", "Parallel Mind Multi-Agent Threading", "Ollama-first Local Privacy Layer", "MCP Reverse Engineering Support"],
      metrics: [
        { label: "Execution Latency", value: "<15ms" },
        { label: "Memory Footprint", value: "32MB Base" },
        { label: "Security Level", value: "Sovereign" }
      ]
    },
    {
      name: "PROJECT HADES",
      subtitle: "LINUX 7.0 KERNEL SUBSTRATE",
      description: "Sub-1GB Linux 7.0 kernel substrate with eBPF 'Reflex Arc' for real-time routing and 10MB Neural VFS for low-latency edge AI.",
      details: "A research project developing an ultra-compact Linux substrate. Integrates eBPF-based socket processing at the ring-buffer level, combined with a 10MB virtual file system that stores distilled neural networks directly within kernel virtual directories. Reduces model loading times to near-zero.",
      category: "KERNEL RESEARCH",
      filterCategory: "systems",
      image: "media/sub_hades.jpg",
      specs: ["Linux 7.0 Custom Patchset", "eBPF Reflex Arc Socket Router", "10MB Neural Virtual File System (.aim)", "Sub-1GB Absolute Ram Allocation", "Formal Z3 Safety Constraint Solvers"],
      metrics: [
        { label: "Kernel Base Weight", value: "480MB" },
        { label: "Decision Routing", value: "<50ms" },
        { label: "VFS Footprint", value: "10MB" }
      ]
    },
    {
      name: "ACHERON EMULATOR",
      subtitle: "OPEN CORE VIRTUALIZATION",
      description: "iOS virtualization sandbox written in pure C++. Recreates hypervisor boot-chain loops from scratch without Apple proprietary code.",
      details: "An experimental virtualization system designed to inspect mobile kernels. Written in pure standard C++, this framework emulates the basic low-level page-table interfaces of target architectures, achieving a stable environment for boot-chain analysis and reverse-engineering tests.",
      category: "VIRTUALIZATION",
      filterCategory: "systems",
      image: "media/acheron.jpg",
      specs: ["Pure C++ Virtualization Subsystem", "Zero Proprietary Code Dependencies", "iOS 26.3 Kernel Boot Testing", "Hypervisor Hardware Spoofing Core", "Acheron-cli Patch Compiler"],
      metrics: [
        { label: "Boot Stability", value: "99.1%" },
        { label: "Hypervisor Overhead", value: "-40% vs QEMU" },
        { label: "Isolation Level", value: "Sandboxed" }
      ]
    },
    {
      name: "CYBERIFRIT",
      subtitle: "SHADOW SECURITY AUDITOR",
      description: "Autonomous security agent built during GitLab CI/CD Hackathon. Features ROCm 6.1+ AMD MI300X acceleration.",
      details: "An automated threat intelligence worker that audits continuous integration files. Utilizing AMD ROCm GPU processing, it deciphers repository code structures at high speeds, generating immediate proof-of-concept vulnerability vectors.",
      category: "SECURITY AGENT",
      filterCategory: "systems",
      image: "media/cyber_ifrit_dashboard.png",
      specs: ["GitLab Duo CI/CD Pipelines", "ROCm 6.1+ GPGPU Acceleration", "Optimized for AMD MI300X Silicons", "Autonomous Code Penetration Scans", "AI Vuln Exploitation Generator"],
      metrics: [
        { label: "Commit Scan Rate", value: "10K+ / Hour" },
        { label: "Vulnerability Recall", value: "98.4%" },
        { label: "GPU Load Efficiency", value: "85%" }
      ]
    },
    {
      name: "PAYTRIXX",
      subtitle: "CROSS-PLATFORM DIGITAL WALLET",
      description: "Full-stack mobile fintech application enabling lightning-fast cashless digital transactions.",
      details: "A comprehensive digital wallet developed in Flutter, backed by a highly secure Laravel backend. Integrates local biometric hardware keys, multi-signature transactions, and encrypted QR transaction loops for zero-friction mobile commerce.",
      category: "FINTECH / MOBILE & WEB",
      filterCategory: "mobile",
      image: "media/paytrixx.6ba4c96d0e46087eb4dc.png",
      specs: ["Flutter & Dart Mobile Core", "Laravel High-Throughput REST APIs", "AES-256 Handshake Wallet Encryption", "EVM Web3 Smart Contract Bridges", "Biometric TouchID/FaceID Gateways"],
      metrics: [
        { label: "Transaction Speed", value: "<1.2s" },
        { label: "Uptime Rating", value: "99.99%" },
        { label: "Platform Support", value: "iOS / Android" }
      ]
    },
    {
      name: "PROESSAYHELPER",
      subtitle: "ACADEMIC WRITING HUB",
      description: "Academic and professional writing assistance dashboard with active generative content structures.",
      details: "An immersive collaborative web platform designed for content production. Features a sleek, responsive React layout, rich text editing suites, structured document indexing, and local in-editor assistant modules.",
      category: "EDTECH / WEB SYSTEM",
      filterCategory: "web",
      image: "media/proessayhelp.751df242249a2c9d9ac5.png",
      specs: ["React & Node.js Architecture", "TailwindCSS Modular Layout", "Collaborative Document Storage", "Real-Time Structural Analysis", "Automated Plagiarism Scans"],
      metrics: [
        { label: "Active Writers", value: "50K+ Monthly" },
        { label: "API Latency", value: "180ms Avg" },
        { label: "Content Sync", value: "Real-time" }
      ]
    },
    {
      name: "APTOFA",
      subtitle: "MENTAL HEALTH SUPPORT COMMUNITY",
      description: "Responsive support network featuring mutual help forums, micro-chats, and peer networking.",
      details: "A responsive community-driven web application built with Laravel and React. Specifically optimized for low-bandwidth mobile viewports, providing a safe, performant space for peer support and anonymous discussion boards.",
      category: "HEALTH / COMMUNITY WEB",
      filterCategory: "web",
      image: "media/aptofa.65c0efbd957fde1a5b71.png",
      specs: ["React SPA Interface", "Laravel Backend Core", "Secure Anonymous Identity Hash", "Real-time Chat WebSockets", "Low-bandwidth Image Cache Engine"],
      metrics: [
        { label: "Page Load Time", value: "0.8s Mobile" },
        { label: "Data Encryption", value: "SHA-256" },
        { label: "User Retention", value: "40% Weekly" }
      ]
    },
    {
      name: "TAPME TAP YOU",
      subtitle: "INTERACTIVE MATCHING PORTAL",
      description: "Dating platform built in Flutter featuring gesture matchmaking swipe systems and secure chat.",
      details: "A premium cross-platform mobile application utilizing Flutter and Firebase. Features a high-fidelity swipe interface, responsive real-time geolocation matching, and fully encrypted node-to-node messaging interfaces.",
      category: "SOCIAL / MOBILE PORTAL",
      filterCategory: "mobile",
      image: "media/tapme.3b925f5b3fa7a2bb601e.png",
      specs: ["Flutter Native Rendering", "Firebase Geolocation Database", "Dynamic Real-Time Messaging", "Low-latency Profile Caching", "Responsive Touch Gesture Engine"],
      metrics: [
        { label: "Match Query Time", value: "120ms" },
        { label: "Active Connections", value: "20K+" },
        { label: "Crash-free Rate", value: "99.8%" }
      ]
    },
    {
      name: "LUMINOUS GLORY",
      subtitle: "BLOCKCHAIN MOBA ARENA",
      description: "Multiplayer battle game created in Unity3D featuring Solidity NFT item tokenization.",
      details: "A high-performance gaming application. Merges a robust C# Unity3D client execution loop with decentralized EVM contracts, allowing users to earn, trade, and verifiably own in-game combat items directly on-chain.",
      category: "GAMING / WEB3 & C#",
      filterCategory: "gaming",
      image: "media/moba.c810019c30e52f310a9e.png",
      specs: ["Unity3D Engine & C# Client", "Solidity Smart Contract NFTs", "Decentralized Wallet Bridges", "Dynamic Vertex Shader Pipelines", "Ultra-low Latency Server Loops"],
      metrics: [
        { label: "Client Frame Rate", value: "60 FPS Mobile" },
        { label: "Contract Calls", value: "<3s Settlement" },
        { label: "Item Mint Weight", value: "0.01 ETH" }
      ]
    },
    {
      name: "PAPS FOOD DELIVERY",
      subtitle: "FILIPINO LOCAL LOGISTICS",
      description: "Hyperlocal food delivery mobile app optimized for Filipino delivery networks.",
      details: "A hyperlocal delivery and logistics coordinator built with Flutter. Backed by real-time geolocation mapping, it coordinates routing configurations, dispatch logs, and payment APIs for couriers and vendors.",
      category: "LOGISTICS / MOBILE APP",
      filterCategory: "mobile",
      image: "media/paps.750bdb5bb446b165d11e.png",
      specs: ["Flutter Cross-Platform Core", "Google Maps Matrix Routing APIs", "Filipino Vendor Transaction Ports", "Push Notification Alert Dispatch", "Offline-first Local SQLite Cache"],
      metrics: [
        { label: "Routing Efficiency", value: "+22%" },
        { label: "Dispatch Latency", value: "<1s" },
        { label: "Store integrations", value: "300+ Vendors" }
      ]
    }
  ]

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.filterCategory === activeFilter || p.category.toLowerCase().includes(activeFilter))

  return (
    <div className="section-wrapper">
      <div className="text-center mb-10">
        <div className="status-badge-2055 mb-2">SYSTEM MODULES</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
          PROJECT MATRIX
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Select a domain filter to isolate specific systems. Click on any block to initiate a deep-dive architecture diagnostics run.
        </p>
      </div>

      {/* High-tech filter tabs */}
      <div className="filter-tabs">
        <button 
          onClick={() => setActiveFilter('all')} 
          className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
        >
          [ 🔍 ALL CORE ]
        </button>
        <button 
          onClick={() => setActiveFilter('systems')} 
          className={`filter-tab ${activeFilter === 'systems' ? 'active' : ''}`}
        >
          [ ⚙️ AI & SYSTEMS ]
        </button>
        <button 
          onClick={() => setActiveFilter('web')} 
          className={`filter-tab ${activeFilter === 'web' ? 'active' : ''}`}
        >
          [ 🌐 WEB DEV ]
        </button>
        <button 
          onClick={() => setActiveFilter('mobile')} 
          className={`filter-tab ${activeFilter === 'mobile' ? 'active' : ''}`}
        >
          [ 📱 MOBILE APPS ]
        </button>
      </div>

      {/* Responsive showcase grid */}
      <motion.div 
        layout 
        className="showcase-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.name}
              onClick={() => setSelectedProject(product)}
              className="showcase-card holo-panel holo-panel-hover"
            >
              <div className="showcase-img-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="showcase-img"
                  loading="lazy"
                />
                <div className="showcase-badge">
                  <span className="status-badge-2055">
                    {product.filterCategory.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="showcase-content">
                <div className="showcase-category">{product.category}</div>
                <h3 className="showcase-title font-display">{product.name}</h3>
                <p className="showcase-desc">{product.description}</p>
                <div className="showcase-link">
                  INSPECT DIAGNOSTICS &gt;
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Diagnostics Drawer (Modal popup) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="details-modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="details-modal holo-panel bg-[var(--bg-dark)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Banner */}
              <div className="modal-banner">
                <img src={selectedProject.image} alt={selectedProject.name} />
                <button className="modal-close" onClick={() => setSelectedProject(null)}>
                  ×
                </button>
              </div>

              {/* Body */}
              <div className="modal-body">
                <span className="modal-category">{selectedProject.category}</span>
                <h3 className="modal-title font-display">{selectedProject.name}</h3>
                
                {/* Metrics */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {selectedProject.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded bg-[rgba(0,245,255,0.04)] border border-[rgba(0,245,255,0.08)] text-center">
                        <div className="text-[9px] font-tech text-gray-500 uppercase tracking-wide">{m.label}</div>
                        <div className="text-xs md:text-sm font-tech text-[var(--nebula-cyan)] font-bold mt-1">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="modal-desc">{selectedProject.details}</p>

                {/* Specs */}
                <h4 className="modal-subtitle">ARCHITECTURE SPECIFICATIONS</h4>
                <div className="space-y-2 mb-6">
                  {selectedProject.specs.map((spec) => (
                    <div key={spec} className="tech-spec-item">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--nebula-cyan)]" />
                      <span className="font-tech text-xs text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Link & Close action grid */}
                <div className="pt-4 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row gap-3">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-2055 btn-2055-primary flex-grow text-center"
                    >
                      Access Core Repository ↗
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="btn-2055 btn-2055-secondary text-center px-6 cursor-pointer"
                  >
                    Close Diagnostics
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
