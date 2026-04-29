import { motion } from 'framer-motion'

function About({ data }) {
  const { about, personalDetails, projectsCompleted, resumeLink } = data

  return (
    <>
      <section id="about" className="section">
        <motion.div
          className="section-inner about-grid"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <span className="section-tag">About Me</span>
            <h2>Turning intelligent ideas into practical digital systems.</h2>
            <p className="section-copy">{about}</p>
          </div>

          <div className="glass-card">
            <div className="details-grid">
              {personalDetails.map((detail) => (
                <div key={detail.label} className="detail-item">
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}
            </div>
            <div className="about-actions">
              <div className="metric-card">
                <span>Projects Completed</span>
                <strong>{projectsCompleted}</strong>
              </div>
              <a
                className="secondary-btn"
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default About
