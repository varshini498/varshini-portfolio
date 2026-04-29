import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const profileImage =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'

function Hero({ data }) {
  const { name, intro, roles } = data
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let charIndex = 0
    const typingTimer = window.setInterval(() => {
      charIndex += 1
      setTypedText(currentRole.slice(0, charIndex))

      if (charIndex === currentRole.length) {
        window.clearInterval(typingTimer)
        window.setTimeout(() => {
          setTypedText('')
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }, 1400)
      }
    }, 90)

    return () => window.clearInterval(typingTimer)
  }, [roleIndex, roles])

  return (
    <section id="home" className="section hero-section">
      <div className="section-inner hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Hi, Welcome!</span>
          <h1>
            I Am <span>{name}</span>
          </h1>
          <div className="typing-row">
            <span className="typing-label">Role</span>
            <span className="typing-text">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </div>
          <p>{intro}</p>
          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            Learn More About Me
          </button>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="image-frame">
            <img src={profileImage} alt={`${name} profile`} />
          </div>
          <div className="hero-badge">
            <strong>Creative Developer</strong>
            <span>Designing with code and clarity.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
