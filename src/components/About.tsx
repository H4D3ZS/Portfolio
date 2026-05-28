import { motion } from 'framer-motion'
import { useState } from 'react'

interface AboutProps {
  onNext: () => void
}

export default function About({ onNext }: AboutProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const professionalExperience = [
    {
      year: "APR 2025 — MAR 2026",
      role: "iOS SOFTWARE DEVELOPER",
      company: "Dance Vision",
      details: [
        "Engineered Dance Vision iOS app using Swift/SwiftUI with Firebase authentication and real-time analytics.",
        "Integrated PostgreSQL backend via REST APIs for syllabus synchronization and data caching.",
        "Optimized cross-platform synchronization between Flutter modules and native iOS components."
      ],
      technologies: ["Swift", "SwiftUI", "Firebase", "PostgreSQL", "REST APIs", "Flutter"]
    },
    {
      year: "MAR 2026 — PRESENT",
      role: "PYTORCH PHILIPPINES AMBASSADOR",
      company: "PyTorch Foundation",
      details: [
        "Represent PyTorch in the regional developer community.",
        "Conduct workshops and technical sessions on deep learning optimization and edge deployments.",
        "Bridge local researchers with open-source Meta AI projects and developer teams."
      ],
      technologies: ["PyTorch", "Python", "Deep Learning", "AI Education"]
    },
    {
      year: "DEC 2021 — JAN 2025",
      role: "SR. WEB3 BLOCKCHAIN DEVELOPER",
      company: "Success Academy Learning Solutions LLC",
      details: [
        "Architected Solidity smart contracts and Solana API integrations for NFT-based learning platforms.",
        "Developed Web3 components and integrated Unreal/Unity games with native React Native mobile wallets.",
        "Led security audits of high-volume contracts to prevent reentrancy and integer overflow attacks."
      ],
      technologies: ["Solidity", "Solana", "Unreal Engine", "Unity3D", "React Native", "Web3"]
    },
    {
      year: "OCT 2020 — OCT 2021",
      role: "SOFTWARE ENGINEER",
      company: "URCLASSROOM COMMUNITY CORP",
      details: [
        "Built native Android applications using Java/Android Studio and cross-platform apps with Flutter/Dart.",
        "Integrated real-time database synchronization features using Firebase for concurrent classroom participants."
      ],
      technologies: ["Java", "Android Studio", "Flutter", "Dart", "Firebase"]
    },
    {
      year: "FEB 2020 — JUN 2020",
      role: "ETHICAL HACKER",
      company: "BOXTYPD TECHNOLOGIES",
      details: [
        "Conducted pen-testing on critical Web3 web and mobile properties.",
        "Developed exploit scripts to test memory vulnerabilities in low-level applications.",
        "Delivered audited remediation roadmaps and patch reports for secure stabilization."
      ],
      technologies: ["Penetration Testing", "Exploit Development", "Security Auditing"]
    }
  ]

  const skillsData = [
    {
      category: "Languages",
      skills: ['Rust', 'C++', 'Swift', 'Dart', 'Java', 'Solidity', 'Python', 'SQL']
    },
    {
      category: "AI/ML Infrastructure",
      skills: ['PyTorch', 'ROCm 6.1+', 'Ollama', 'Z3', 'Neural VFS', 'Edge AI', 'Transformers']
    },
    {
      category: "Systems & Security",
      skills: ['Linux Kernel', 'eBPF', 'QEMU', 'Apple Virtualization', 'XNU Kernel', 'Pen-Testing']
    },
    {
      category: "Frameworks & Apps",
      skills: ['Flutter', 'SwiftUI', 'React Native', 'React.js', 'Laravel', 'Unity3D', 'Firebase']
    }
  ]

  return (
    <div className="section-wrapper">
      {/* Intro Profile Grid */}
      <div className="about-pane-grid mb-16">
        {/* Left Side: Summary */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="status-badge-2055">
              <span className="status-dot-2055" />
              BIOGRAPHY MATRIX
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
            Systems & Full-stack Architect
          </h2>

          <p className="font-tech text-xs text-[var(--nebula-magenta)] font-bold mb-6 uppercase tracking-wider">
            General Santos City, South Cotabato | ferrer.rolando2001@gmail.com
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Hi, I'm Rolando. I specialize in bridging low-level kernel infrastructure, autonomous edge AI, and high-performance cross-platform applications. My workflow centers on performance optimization, secure cryptography, and memory safety.
          </p>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
            As a PyTorch Philippines Ambassador, I advocate for local AI ecosystems and on-device model architectures, aiming for data sovereignty and latency reduction.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={onNext} className="btn-2055 btn-2055-primary">
              Launch Projects
            </button>
            <a href="mailto:ferrer.rolando2001@gmail.com" className="btn-2055 btn-2055-secondary">
              Contact Matrix
            </a>
          </div>
        </motion.div>

        {/* Right Side: Virtual Profile Render */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="holo-panel p-3 max-w-[420px] w-full" style={{ border: '1px solid rgba(185,131,255,0.15)' }}>
            <div className="overflow-hidden rounded-xl border border-gray-800">
              <img 
                src="media/about-sec-img.e7ef78810f9e765f342a.png" 
                alt="Profile Matrix" 
                className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <div className="pt-4 px-2 pb-2 text-center">
              <div className="font-tech text-[10px] text-gray-500 tracking-wider">BIOLOGICAL ID: ROLANDO_FERRER_JR</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Matrix Category Show */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <div className="status-badge-2055 mb-2">TECHNICAL INDEX</div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white">SKILL CLUSTERS</h3>
        </div>

        <div className="cyber-grid-4">
          {skillsData.map((cluster, i) => (
            <motion.div
              key={cluster.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="skills-cluster-card"
            >
              <h4 className="skills-cluster-title">
                {cluster.category}
              </h4>
              <div className="tags-flex-container">
                {cluster.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="skill-tag-cyber"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accordion Professional Experience */}
      <div>
        <div className="text-center mb-8">
          <div className="status-badge-2055 mb-2">TEMPORAL REGISTRY</div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white">WORK HISTORY</h3>
        </div>

        <div className="accordion-container max-w-4xl mx-auto w-full">
          {professionalExperience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`accordion-item ${expandedIndex === i ? 'active' : ''}`}
            >
              <div 
                className="accordion-header"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="font-tech text-[10px] text-gray-500 tracking-wider min-w-[150px]">{exp.year}</span>
                  <span className="accordion-header-title text-sm">{exp.role} @ {exp.company}</span>
                </div>
                <span className="accordion-icon font-tech text-[9px] bg-[rgba(0,245,255,0.06)] px-2.5 py-1 rounded border border-[rgba(0,245,255,0.15)] text-[var(--nebula-cyan)] select-none">
                  {expandedIndex === i ? '[ COLLAPSE - ]' : '[ EXPAND + ]'}
                </span>
              </div>

              {expandedIndex === i && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="accordion-body"
                >
                  <ul className="space-y-3 mb-5 pl-2">
                    {exp.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300">
                        <span className="text-[var(--nebula-cyan)] mt-0.5">&gt;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tags-flex-container pt-3 border-t border-[rgba(255,255,255,0.03)]">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag text-[10px] font-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
