import { motion } from 'framer-motion'

function Education({ items }) {
  return (
    <section id="education" className="section">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2>Academic milestones supporting a strong AI and systems foundation.</h2>
        </div>

        <div className="timeline">
          {items.map((item) => (
            <article key={item.title + item.duration} className="timeline-card">
              <span className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-top">
                  <h3>{item.title}</h3>
                  <span>{item.duration}</span>
                </div>
                <strong>{item.place}</strong>
                <p>{item.description}</p>
                <em>{item.score}</em>
                {item.secondaryScore ? (
                  <span className="timeline-subscore">{item.secondaryScore}</span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education
