import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [consoleLogs, setConsoleLogs] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setConsoleLogs([])
    
    // Simulate terminal transmission sequence
    const logs = [
      "&gt; INITIALIZING SECURE PACKET HANDSHAKE...",
      `&gt; CLIENT ID: client_${Math.random().toString(36).substr(2, 5)}@hades.core`,
      "&gt; PORT SPEC: SECURE_SSL_TLS_443",
      `&gt; PACKET ENCRYPTED [SHA-256]: SUCCESS`,
      "&gt; UPLOADING METADATA MATRIX TO ROLANDO CORE...",
      `&gt; SUBJECT BOUND: [${formData.subject.toUpperCase()}]`,
      "&gt; RETRANSMITTING DATA STREAM... STATUS [200 OK]",
      "&gt; TRANSMISSION COMPLETE. DISPATCH SUCCESSFUL."
    ]

    let i = 0
    const interval = setInterval(() => {
      if (i < logs.length) {
        setConsoleLogs(prev => [...prev, logs[i]])
        i++
      } else {
        clearInterval(interval)
        setIsSubmitting(false)
        // Clear Form
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    }, 450)
  }

  return (
    <div className="section-wrapper">
      <div className="text-center mb-10">
        <div className="status-badge-2055 mb-2">COMMUNICATION PORT</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
          SECURE CHANNEL
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Open a cryptographically secure socket connection. Send systems architecture requests or full-stack proposals.
        </p>
      </div>

      <div className="contact-pane-grid">
        {/* Left Side: Connection Nodes */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-card-sidebar"
        >
          {/* Location */}
          <div className="contact-item-link">
            <span className="contact-item-icon">📍</span>
            <div className="contact-item-content">
              <span className="contact-item-label">PHYSICAL LOCATION</span>
              <span className="contact-item-value">Gen. Santos City, Cotabato, PH</span>
            </div>
          </div>

          {/* Email */}
          <a href="mailto:ferrer.rolando2001@gmail.com" className="contact-item-link">
            <span className="contact-item-icon">📧</span>
            <div className="contact-item-content">
              <span className="contact-item-label">DIRECT EMAIL</span>
              <span className="contact-item-value">ferrer.rolando2001@gmail.com</span>
            </div>
          </a>

          {/* Mobile */}
          <a href="tel:+639761270346" className="contact-item-link">
            <span className="contact-item-icon">📱</span>
            <div className="contact-item-content">
              <span className="contact-item-label">PORTABLE PHONE</span>
              <span className="contact-item-value">+63-976-127-0346</span>
            </div>
          </a>

          {/* Ambassador */}
          <div className="contact-item-link">
            <span className="contact-item-icon">🔥</span>
            <div className="contact-item-content">
              <span className="contact-item-label">AI COMMUNITY SOCKET</span>
              <span className="contact-item-value">PyTorch Philippines Ambassador</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form & Transmission Logs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="holo-panel p-6 md:p-8" style={{ border: '1px solid rgba(0, 245, 255, 0.15)' }}>
            <AnimatePresence mode="wait">
              {consoleLogs.length > 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="cyber-terminal p-4 min-h-[300px] flex flex-col justify-between"
                >
                  <div className="terminal-header mb-3 pb-2 border-b border-gray-800">
                    <span className="text-[10px] text-gray-500 font-tech">TRANSMISSION_STATUS</span>
                    <span className="text-[10px] text-[var(--nebula-cyan)] font-tech">SECURE_SSL</span>
                  </div>
                  
                  <div className="terminal-content flex-grow font-tech text-[11px] space-y-1.5 custom-scrollbar max-h-[220px]">
                    {consoleLogs.map((log, idx) => (
                      <div key={idx} className="text-[var(--nebula-cyan)]" dangerouslySetInnerHTML={{ __html: log }} />
                    ))}
                  </div>

                  {!isSubmitting && (
                    <button 
                      onClick={() => setConsoleLogs([])} 
                      className="btn-2055 btn-2055-primary w-full text-center mt-4"
                    >
                      Open New Socket Connection
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label-cyber">Name / Identity</label>
                      <input
                        type="text"
                        className="form-input-cyber"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label-cyber">Secure Return Email</label>
                      <input
                        type="email"
                        className="form-input-cyber"
                        placeholder="name@server.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label-cyber">Transmission Subject</label>
                    <input
                      type="text"
                      className="form-input-cyber"
                      placeholder="Systems Core Partnership"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label-cyber">Message Payload</label>
                    <textarea
                      className="form-input-cyber form-textarea-cyber"
                      placeholder="Input message content..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-2055 btn-2055-primary w-full cursor-pointer">
                    Initiate Handshake & Send Packet
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
