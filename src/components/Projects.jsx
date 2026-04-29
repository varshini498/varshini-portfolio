import { motion } from 'framer-motion'

function Projects({ items }) {
  return (
    <section id="projects" className="section compact-section">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2>Deployed products built with problem solving and practical impact.</h2>
          <p className="section-copy">
            These projects reflect a blend of machine learning, backend logic,
            workflow automation, and user-focused interface design.
          </p>
        </div>

        <div className="project-grid project-grid-featured">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className="project-card card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="project-image">
                <img src={item.image} alt={item.title} />
              </div>
              <span className="project-chip">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                className="inline-btn btn"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
