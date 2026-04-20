import { motion } from 'framer-motion'
import { useState } from 'react'

interface AboutProps {
  onNext: () => void
}

export default function About({ onNext }: AboutProps) {
  const [expandedProf, setExpandedProf] = useState<number | null>(null)
  const [expandedProj, setExpandedProj] = useState<number | null>(null)

  const professionalExperience = [
    {
      year: "APR 2025 — MAR 2026",
      role: "iOS SOFTWARE DEVELOPER at Dance Vision",
      details: [
        "Engineered Dance Vision iOS app using Swift/SwiftUI with Firebase authentication and real-time analytics",
        "Integrated PostgreSQL backend via REST APIs for seamless syllabus synchronization and optimized data flow",
        "Optimized cross-platform synchronization between Flutter modules and native iOS components",
      ],
      technologies: ["Swift", "SwiftUI", "Firebase", "PostgreSQL", "REST APIs", "Flutter"],
    },
    {
      year: "MAR 2026 — PRESENT",
      role: "PYTORCH PHILIPPINES AMBASSADOR at PyTorch Foundation",
      details: [
        "Represent PyTorch in the Philippines developer community",
        "Conduct workshops and training sessions on deep learning best practices",
        "Contribute to open-source PyTorch projects and documentation",
        "Bridge the gap between Meta AI and local AI research communities",
      ],
      technologies: ["PyTorch", "Python", "Deep Learning", "AI Education"],
    },
    {
      year: "DEC 2021 — JAN 2025",
      role: "SR. WEB3 BLOCKCHAIN DEVELOPER at Success Academy Learning Solutions LLC",
      details: [
        "Architected Solidity smart contracts and Solana API integrations for NFT-based learning platforms",
        "Developed NFT games using Unreal Engine and Unity3D with React Native bridges for mobile wallet integration",
        "Led security audits for Web3 applications to prevent reentrancy and overflow vulnerabilities",
      ],
      technologies: ["Solidity", "Solana", "Unreal Engine", "Unity3D", "React Native", "Web3"],
    },
    {
      year: "OCT 2020 — OCT 2021",
      role: "SOFTWARE ENGINEER at URCLASSROOM COMMUNITY CORP",
      details: [
        "Built native Android applications using Java/Android Studio and cross-platform solutions with Flutter/Dart",
        "Integrated real-time collaboration features with Firebase to support large-scale concurrent user bases",
      ],
      technologies: ["Java", "Android Studio", "Flutter", "Dart", "Firebase"],
    },
    {
      year: "FEB 2020 — JUN 2020",
      role: "ETHICAL HACKER at BOXTYPD TECHNOLOGIES",
      details: [
        "Conducted penetration testing on web and mobile applications",
        "Identified and remediated critical vulnerabilities through exploit development",
        "Delivered security re-stabilization reports and prioritized remediation roadmaps",
      ],
      technologies: ["Penetration Testing", "Exploit Development", "Security Auditing"],
    },
    {
      year: "DEC 2019 — APR 2020",
      role: "CHIEF TECHNOLOGY OFFICER at Paytrixx",
      details: [
        "Directed development and stabilization of business-critical applications",
        "Managed huge, complex design projects",
        "Audited organizational security posture and maintained CI/CD security gates",
      ],
      technologies: ["Leadership", "Security", "CI/CD", "Project Management"],
    },
  ]

  const personalProjects = [
    {
      year: "MAR 2026 — PRESENT",
      role: "LEAD ARCHITECT - PROJECT HADES | Independent Research",
      details: [
        "Engineering a sub-1GB Linux 7.0 kernel substrate optimized for autonomous edge systems",
        "Implementing eBPF 'Reflex Arc' for real-time decision routing",
        "Designing 10MB Neural VFS (.aim) for weight-based knowledge distillation",
        "Achieving <50ms inference latency for on-device model adaptation",
        "Implementing formal verification protocols using Z3 for safety constraints",
      ],
      technologies: ["Linux Kernel", "eBPF", "Rust", "C", "Z3", "Neural VFS"],
    },
    {
      year: "MAR 2026 — PRESENT",
      role: "FOUNDER & LEAD DEVELOPER - ACHERON EMULATOR (Open Core)",
      details: [
        "Architecting iOS virtualization framework using Swift and Apple Virtualization.framework",
        "Targeting 99%+ boot stability on iOS 26.3.1 test builds",
        "Developing community research tool in Flutter for cross-platform AI model testing",
        "Building acheron-cli for firmware patching and boot-chain analysis",
        "Achieving 40% emulation overhead reduction versus QEMU baseline",
      ],
      technologies: ["Swift", "Apple Virtualization.framework", "Flutter", "C++", "QEMU"],
    },
    {
      year: "MAR 2026 — PRESENT",
      role: "XNU KERNEL VULNERABILITY RESEARCH",
      details: [
        "Researching XNU kernel vulnerabilities for iOS security",
        "Analyzing kernel-level exploit mechanisms",
        "Developing proof-of-concept exploits for security research",
      ],
      technologies: ["XNU", "iOS Security", "Kernel Exploits", "Reverse Engineering"],
    },
    {
      year: "MAR 2026",
      role: "CYBER-IFRIT | GitLab AI & AMD Developer Hackathon",
      details: [
        "Built 'The Shadow Auditor' - autonomous security agent using PyTorch for anomaly detection",
        "Integrated ROCm 6.1+ acceleration for AMD GPU-based threat analysis on MI300X",
        "Enabled real-time scanning of 10K+ code commits per hour",
        "Automated proof-of-concept exploit generation using GitLab Duo and Google Cloud",
      ],
      technologies: ["PyTorch", "ROCm 6.1+", "AMD MI300X", "GitLab Duo", "Security"],
    },
  ]

  return (
    <div className="about">
      <div className="about-container">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-intro">Hi, I am Rolando H Ferrer Jr</p>
          <h2 className="about-title">AI Systems Engineer & Fullstack Developer</h2>
          <p className="about-description">
            General Santos City, South Cotabato | +63-976-127-0346
          </p>
          <p className="about-description" style={{ marginTop: '20px' }}>
            AI Infrastructure Engineer transitioning from full-stack and Web3 development into autonomous systems, kernel-level optimization, and edge AI deployment.
          </p>
          <div className="about-buttons">
            <button onClick={onNext} className="hero-btn" style={{ background: 'var(--bg-card)' }}>
              Works
            </button>
            <a href="mailto:ferrer.rolando2001@gmail.com" className="hero-btn" style={{ background: 'transparent' }}>
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/media/about-sec-img.e7ef78810f9e765f342a.png" 
            alt="Profile" 
            className="about-image"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <div className="skills-grid">
          <div className="skill-category">Languages</div>
          <div className="skill-tags">
            {['Rust', 'C++', 'Swift', 'Dart', 'Java', 'Solidity', 'Python', 'SQL'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">AI/ML Infrastructure</div>
          <div className="skill-tags">
            {['PyTorch', 'ROCm 6.1+', 'Ollama', 'Z3', 'Neural VFS', 'Edge AI', 'Knowledge Distillation'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">Systems & Security</div>
          <div className="skill-tags">
            {['Linux Kernel', 'eBPF', 'QEMU', 'Apple Virtualization.framework', 'XNU', 'Penetration Testing', 'Smart Contract Auditing'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">Frameworks</div>
          <div className="skill-tags">
            {['Flutter', 'SwiftUI', 'React Native', 'Laravel', 'Unreal Engine', 'Unity3D', 'Firebase'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="experience-section">
        <h3 className="experience-title">PROFESSIONAL EXPERIENCE</h3>
        
        <div className="experiences-list">
          {professionalExperience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="experience-item-expanded"
              onClick={() => setExpandedProf(expandedProf === i ? null : i)}
            >
              <div className="experience-content">
                <div className="experience-year">{exp.year}</div>
                <div className="experience-role">{exp.role}</div>
                {expandedProf === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="experience-details"
                  >
                    <ul>
                      {exp.details.map((detail, j) => (
                        <li key={j}>{detail}</li>
                      ))}
                    </ul>
                    <div className="experience-tech">
                      {exp.technologies.map((tech, j) => (
                        <span key={j} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
                <div className="expand-hint">
                  {expandedProf === i ? '▲ Click to collapse' : '▼ Click to expand'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div className="experience-section" style={{ paddingTop: '40px' }}>
        <h3 className="experience-title">PERSONAL PROJECTS & RESEARCH</h3>
        
        <div className="experiences-list">
          {personalProjects.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="experience-item-expanded"
              onClick={() => setExpandedProj(expandedProj === i ? null : i)}
            >
              <div className="experience-content">
                <div className="experience-year">{exp.year}</div>
                <div className="experience-role">{exp.role}</div>
                {expandedProj === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="experience-details"
                  >
                    <ul>
                      {exp.details.map((detail, j) => (
                        <li key={j}>{detail}</li>
                      ))}
                    </ul>
                    <div className="experience-tech">
                      {exp.technologies.map((tech, j) => (
                        <span key={j} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
                <div className="expand-hint">
                  {expandedProj === i ? '▲ Click to collapse' : '▼ Click to expand'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
