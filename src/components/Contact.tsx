import { motion } from 'framer-motion'
import { useState } from 'react'

interface ContactProps {
}

export default function Contact({}: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">CONTACT</h2>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>
              ROLANDO H. FERRER JR.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
              AI Systems Engineer & Fullstack Developer
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '5px' }}>
              General Santos City, South Cotabato
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '5px' }}>
              +63-976-127-0346
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
              ferrer.rolando2001@gmail.com
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-input"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
