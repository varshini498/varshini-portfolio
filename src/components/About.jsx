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
            <h2>Building practical experiences with a strong visual edge.</h2>
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
              <a className="secondary-btn" href={resumeLink}>
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section compact-section">
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-header">
            <span className="section-tag">Projects</span>
            <h2>A quick snapshot of what I love building.</h2>
            <p className="section-copy">
              Replace these highlights with your real portfolio projects, case
              studies, or GitHub showcase items.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <span className="project-chip">Featured Project</span>
              <h3>Portfolio Experience</h3>
              <p>
                A modern personal site with smooth motion, responsive layouts,
                and a clean component-driven architecture.
              </p>
            </article>
            <article className="project-card">
              <span className="project-chip">UI/UX Case Study</span>
              <h3>Product Redesign Concept</h3>
              <p>
                A usability-focused redesign exploring layout clarity,
                accessibility, and stronger visual hierarchy.
              </p>
            </article>
            <article className="project-card">
              <span className="project-chip">Development Project</span>
              <h3>Data-Driven Web App</h3>
              <p>
                A full-stack concept combining frontend polish, API integration,
                and structured data workflows.
              </p>
            </article>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default About
