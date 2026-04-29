import { motion } from 'framer-motion'

function Certificates({ items }) {
  return (
    <section id="certificates" className="section">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-header">
          <span className="section-tag">Certificates</span>
          <h2>Validated learning through recognized programs.</h2>
        </div>

        <div className="card-grid">
          {items.map((item) => (
            <article key={item.title} className="content-card">
              <div className="card-topline">
                <span>{item.issuer}</span>
              </div>
              <h3>{item.title}</h3>
              <a className="inline-btn" href={item.link}>
                View Certificate
              </a>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certificates
