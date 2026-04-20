import { motion } from 'framer-motion'

interface ResearchProductsProps {
  onNext: () => void
  onPrev: () => void
}

interface Project {
  title: string
  subtitle: string
  description: string
  specs: string[]
  status: 'active' | 'research' | 'production'
  accentColor: 'cyan' | 'magenta' | 'lime'
  icon: string
  link?: string
}

export default function ResearchProducts({ onNext, onPrev }: ResearchProductsProps) {
  const projects: Project[] = [
    {
      title: "VSCODIUM-RUST",
      subtitle: "AGENTIC & SOVEREIGN IDE",
      description: "Groundbreaking VS Code architecture rewritten in Rust + Tauri. Features Claude Code integration with 42+ tools, Parallel Mind multi-agent orchestration, Ollama-first data sovereignty, and Visual Lab data flow builder.",
      specs: [
        "Rust + Tauri backend for native performance",
        "Claude Code integration (42+ agentic tools)",
        "Parallel Mind multi-agent architecture",
        "Ollama-first local AI with 100% privacy",
        "Visual Lab JSON/SQL data flow builder",
        "Integrated iOS/Android simulators",
        "MCP support for reverse engineering",
      ],
      status: 'active' as const,
      accentColor: 'cyan' as const,
      icon: "💻",
      link: "https://github.com/H4D3ZS/vscodium-rust",
    },
    {
      title: "PROJECT HADES",
      subtitle: "LINUX 7.0 KERNEL SUBSTRATE",
      description: "Revolutionary sub-1GB Linux kernel implementation featuring eBPF-based routing and 10MB Neural VFS for ultra-low latency AI workloads.",
      specs: [
        "Linux 7.0 kernel with custom patches",
        "eBPF-based Reflex Arc for real-time routing",
        "10MB Neural Virtual File System",
        "Sub-1GB memory footprint",
        "Optimized for AMD MI300X",
      ],
      status: 'active' as const,
      accentColor: 'cyan' as const,
      icon: "🔥",
    },
    {
      title: "ACHERON EMULATOR",
      subtitle: "OPEN CORE VIRTUALIZATION",
      description: "Cross-platform emulation framework recreated from scratch in pure C++. Logic inspired by Virtualization.framework but all implementation is original code - no Apple code used. Features advanced identity spoofing capabilities.",
      specs: [
        "Pure C++ implementation from scratch",
        "Original codebase (no Apple code)",
        "iOS 26.3 boot stability research",
        "Cross-platform identity spoofing",
        "Hardware-accelerated isolation",
      ],
      status: 'research' as const,
      accentColor: 'magenta' as const,
      icon: "💀",
    },
    {
      title: "CYBERIFRIT",
      subtitle: "SHADOW AI AUDITOR",
      description: "GitLab hackathon project built with GitHub Labs Duo Agent. Autonomous security scanning tool that detects vulnerabilities through AI-powered code analysis.",
      specs: [
        "GitHub Labs Duo Agent integration",
        "Autonomous vulnerability detection",
        "Real-time security scanning",
        "GitLab CI/CD integration",
        "AI-powered code analysis",
      ],
      status: 'production' as const,
      accentColor: 'lime' as const,
      icon: "👹",
    },
  ]

  const getStatusColor = (status: string) => {
    if (status === 'active') return 'text-[var(--nebula-lime)]'
    if (status === 'research') return 'text-[var(--nebula-magenta)]'
    return 'text-[var(--nebula-cyan)]'
  }

  const getAccentColor = (color: string) => {
    if (color === 'cyan') return 'text-[var(--nebula-cyan)]'
    if (color === 'magenta') return 'text-[var(--nebula-magenta)]'
    return 'text-[var(--nebula-lime)]'
  }

  const getAccentBg = (color: string) => {
    if (color === 'cyan') return 'bg-[var(--nebula-cyan)]'
    if (color === 'magenta') return 'bg-[var(--nebula-magenta)]'
    return 'bg-[var(--nebula-lime)]'
  }

  return (
    <div className="container-2055 mx-auto px-6 h-full flex flex-col items-center justify-center py-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="status-badge-2055">
            <span className="status-dot-2055" />
            RESEARCH & PRODUCTS
          </div>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
          <span className="gradient-2055">SYSTEM</span>
          <span className="text-[var(--quantum-white)]"> </span>
          <span className="gradient-2055-alt">MODULES</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Architecting the future of AI systems through IDE innovation, kernel optimization, virtualization research, and autonomous deployment.
        </p>
      </div>

      {/* Project Cards - 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mb-6" style={{ maxHeight: '52vh', overflowY: 'auto', padding: '10px' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="holo-panel holo-panel-hover p-5 cursor-pointer flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-4xl">{project.icon}</span>
              <div className={`status-badge-2055 ${getStatusColor(project.status)}`}>
                <span className="status-dot-2055" />
                {project.status.toUpperCase()}
              </div>
            </div>

            <h3 className={`font-tech text-lg font-bold mb-2 ${getAccentColor(project.accentColor)}`}>
              {project.title}
            </h3>

            <p className="font-tech text-xs text-gray-400 mb-2 tracking-wide">{project.subtitle}</p>
            <p className="text-gray-300 mb-4 leading-relaxed text-xs flex-grow">{project.description}</p>

            <div className="space-y-1.5 mb-4">
              {project.specs.map((spec, j) => (
                <div key={j} className="tech-spec-item">
                  <span className={`w-1.5 h-1.5 rounded-full ${getAccentBg(project.accentColor)}`} />
                  <span className="font-tech text-xs text-gray-300">{spec}</span>
                </div>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-tech text-xs ${getAccentColor(project.accentColor)} cursor-pointer hover:underline`}
              >
                VIEW ON GITHUB ↗
              </a>
            ) : (
              <div className="pt-3 border-t border-[rgba(6,182,212,0.1)] flex items-center justify-between mt-auto">
                <div className="font-tech text-xs text-gray-500 tracking-wider">SYSTEM DIAGNOSTICS</div>
                <span className={`text-sm font-tech cursor-pointer ${getAccentColor(project.accentColor)}`}>ACCESS DATA →</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <motion.button onClick={onPrev} className="btn-2055 btn-2055-secondary">← Previous</motion.button>
        <motion.button onClick={onNext} className="btn-2055 btn-2055-primary">Next: Products →</motion.button>
      </div>
    </div>
  )
}
