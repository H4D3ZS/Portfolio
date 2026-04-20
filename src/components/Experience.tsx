import { motion } from 'framer-motion'

interface ExperienceProps {
  onNext: () => void
  onPrev: () => void
}

export default function Experience({ onNext, onPrev }: ExperienceProps) {
  const experiences = [
    {
      role: "iOS SOFTWARE ENGINEER",
      company: "Dance Vision",
      period: "2024 — MAR 2026",
      description: [
        "Architected iOS applications using Swift and Flutter for cross-platform deployment",
        "Implemented real-time computer vision pipelines for dance analysis using PyTorch Mobile",
        "Optimized model inference for edge deployment with quantization and Core ML integration",
        "Led integration of AMD ROCm acceleration for backend training workflows",
        "Developed Flutter-based cross-platform solutions for unified codebase efficiency",
      ],
      technologies: ["Swift", "Flutter", "PyTorch", "Core ML", "AMD ROCm", "Python", "Firebase"],
    },
    {
      role: "PYTORCH PHILIPPINES AMBASSADOR",
      company: "PyTorch Foundation",
      period: "2023 — PRESENT",
      description: [
        "Represent PyTorch in the Philippines developer community",
        "Conduct workshops and training sessions on deep learning best practices",
        "Contribute to open-source PyTorch projects and documentation",
        "Bridge the gap between Meta AI and local AI research communities",
        "Advocate for AI education and responsible AI development practices",
      ],
      technologies: ["PyTorch", "TorchVision", "TorchAudio", "ONNX", "Python", "Transformers"],
    },
    {
      role: "KERNEL RESEARCH ENGINEER",
      company: "Independent Research",
      period: "2022 — PRESENT",
      description: [
        "Research on Linux kernel optimization for AI workloads",
        "Development of eBPF-based routing mechanisms for low-latency systems",
        "Design of Neural VFS for efficient model file management",
        "Open-source contributions to kernel subsystems",
        "Exploration of Rust in kernel development for memory safety",
      ],
      technologies: ["Linux Kernel", "eBPF", "C", "Rust", "BPF Compiler", "QEMU"],
    },
    {
      role: "HACKATHON PROJECTS",
      company: "GitHub / GitLab",
      period: "2024 — 2025",
      description: [
        "Developed Cyber-Ifrit autonomous AI auditor using GitHub Labs Duo Agent",
        "Built GitLab CI/CD integration for automated security vulnerability scanning",
        "Created AI-powered pipelines for quantized model deployment",
        "Demonstrated practical applications of AI in DevSecOps workflows",
      ],
      technologies: ["GitHub Labs Duo", "GitLab CI", "Python", "Transformers", "Security", "Docker"],
    },
  ]

  return (
    <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center py-4">
      <div className="text-center mb-6">
        <div className="section-badge">
          <span className="badge-dot" />
          Professional Timeline
        </div>
        
        <h2 className="section-title">
          <span className="text-gradient">WORK</span> <span className="text-white"> </span> <span className="text-gradient-alt">HISTORY</span>
        </h2>
        
        <p className="section-subtitle">
          Building intelligent systems across industry, research, and open-source communities.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline w-full max-w-4xl mb-6 scroll-content">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="timeline-item"
          >
            <div className="card ml-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[var(--accent-primary)] mb-1">{exp.role}</h3>
                  <p className="text-secondary text-sm">{exp.company}</p>
                </div>
                <div className="badge whitespace-nowrap">{exp.period}</div>
              </div>

              {/* Description */}
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-secondary text-sm">
                    <span className="text-[var(--accent-primary)] mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--border-color)]">
                {exp.technologies.map((tech, j) => (
                  <span key={j} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <motion.button onClick={onPrev} className="btn btn-secondary">← Previous</motion.button>
        <motion.button onClick={onNext} className="btn btn-primary">Next: About →</motion.button>
      </div>
    </div>
  )
}
