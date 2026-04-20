import { useEffect, useState } from 'react'

export default function Background() {
  const [neuralNodes, setNeuralNodes] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const nodeCount = 30
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setNeuralNodes(nodes)

    const particleCount = 40
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <>
      <div className="quantum-grid" />
      
      <div className="neural-network">
        {neuralNodes.map((node) => (
          <div
            key={node.id}
            className="neural-node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.id * 0.15}s`,
            }}
          />
        ))}
      </div>

      <div className="hologram-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.id * 0.2}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
