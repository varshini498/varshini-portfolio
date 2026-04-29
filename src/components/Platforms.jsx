import { motion } from 'framer-motion'

function Platforms({ items }) {
  return (
    <section id="platforms" className="section">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-header">
          <span className="section-tag">Platforms</span>
          <h2>Profiles that reflect coding practice and professional presence.</h2>
        </div>

        <div className="card-grid platform-grid">
          {items.map((item) => (
            <article key={item.name} className="content-card platform-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a className="inline-btn" href={item.link}>
                Visit Profile
              </a>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Platforms
