import { motion } from 'framer-motion'

interface ProductShowcaseProps {
}

interface ProductCardProps {
  name: string
  description: string
  category: string
  delay: number
  image: string
  link?: string
}

function ProductCard({ name, description, category, delay, image, link }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1 }}
      className="project-card"
    >
      <div className="project-image-wrapper">
        <img src={image} alt={name} className="project-image" />
      </div>
      <div className="project-category">{category}</div>
      <div className="project-name">{name}</div>
      <div className="project-description">{description}</div>
      <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="project-link">
        VIEW PROJECT →
      </a>
    </motion.div>
  )
}

export default function ProductShowcase({}: ProductShowcaseProps) {
  const products = [
    {
      name: "VSCODIUM-RUST",
      description: "Agentic & Sovereign IDE rewritten in Rust + Tauri. Claude Code integration with 42+ tools, Parallel Mind multi-agent architecture, Ollama-first data sovereignty.",
      category: "IDE / TOOLING",
      image: "/media/projectImg.771236e1a97e2201a189.png",
      link: "https://github.com/H4D3ZS/vscodium-rust",
      delay: 1,
    },
    {
      name: "CYBERIFRIT",
      description: "The Shadow Auditor - Autonomous security agent for GitLab CI/CD pipelines. ROCm 6.1+ acceleration for AMD MI300X, real-time scanning of 10K+ commits/hour.",
      category: "SECURITY - GITLAB HACKATHON 2026",
      image: "/media/projectImg.771236e1a97e2201a189.png",
      delay: 2,
    },
    {
      name: "PROJECT HADES",
      description: "Sub-1GB Linux 7.0 kernel substrate with eBPF 'Reflex Arc' for real-time routing. 10MB Neural VFS for edge AI with <50ms inference latency.",
      category: "KERNEL RESEARCH 2026",
      image: "/media/projectImg.771236e1a97e2201a189.png",
      delay: 3,
    },
    {
      name: "ACHERON EMULATOR",
      description: "iOS virtualization framework using Swift. 99%+ boot stability on iOS 26.3.1. Flutter-based research tool with hardware identity spoofing for security research.",
      category: "VIRTUALIZATION 2026",
      image: "/media/projectImg.771236e1a97e2201a189.png",
      delay: 4,
    },
    {
      name: "PAYTRIXX",
      description: "Cross-Platform Digital Wallet for cashless mobile financial transactions.",
      category: "FINTECH",
      image: "/media/paytrixx.6ba4c96d0e46087eb4dc.png",
      delay: 5,
    },
    {
      name: "PROESSAYHELPER",
      description: "Writing assistance platform for students and professionals.",
      category: "EDTECH",
      image: "/media/proessayhelp.751df242249a2c9d9ac5.png",
      delay: 6,
    },
    {
      name: "APTOFA",
      description: "Social anxiety support community platform for mutual help and interaction.",
      category: "MENTAL HEALTH",
      image: "/media/aptofa.65c0efbd957fde1a5b71.png",
      delay: 7,
    },
    {
      name: "TAPME TAP YOU",
      description: "Cross-platform dating application built in Flutter with modern swipe-based matching.",
      category: "DATING APP",
      image: "/media/tapme.3b925f5b3fa7a2bb601e.png",
      delay: 8,
    },
    {
      name: "LUMINOUS GLORY",
      description: "MOBA game built in Unity3D with planned blockchain integration.",
      category: "GAMING",
      image: "/media/moba.c810019c30e52f310a9e.png",
      delay: 9,
    },
    {
      name: "PAPS FOOD DELIVERY",
      description: "Local food delivery application for Filipinos, made by Filipinos.",
      category: "FOOD DELIVERY",
      image: "/media/paps.750bdb5bb446b165d11e.png",
      delay: 10,
    },
  ]

  return (
    <div className="projects">
      <p className="projects-intro">some of my recent works</p>
      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-grid">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  )
}
