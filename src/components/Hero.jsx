import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'

function Hero({ data }) {
  const { name, intro, tagline } = data

  return (
    <section id="home" className="section hero-section">
      <div className="section-inner hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Hi, Welcome!</span>
          <h1 className="hero-title">
            I am <span>{name}</span>
          </h1>
          <div className="hero-pill">{tagline}</div>
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
          <div className="profile-image">
            <img src={profileImg} alt="Varshini M" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
