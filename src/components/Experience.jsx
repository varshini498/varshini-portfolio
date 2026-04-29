import { motion } from 'framer-motion'

function Experience({ items }) {
  return (
    <section id="experience" className="section">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2>Where I applied design thinking and development skills.</h2>
        </div>

        <div className="card-grid">
          {items.map((item) => (
            <article key={item.role + item.company} className="content-card">
              <div className="card-topline">
                <span>{item.company}</span>
                <span>{item.duration}</span>
              </div>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
