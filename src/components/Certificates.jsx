import { motion } from 'framer-motion'

function Certificates({ items }) {
  const certificates = items

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
          <h2>Certifications that reinforce continuous technical learning.</h2>
        </div>

        <div className="card-grid">
          {certificates.map((cert, index) => (
            <motion.article
              key={index}
              className="content-card card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{cert.title}</h3>
              <a
                className="inline-btn btn"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certificates
