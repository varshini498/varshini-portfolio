import { motion } from 'framer-motion'

function Contact({ data }) {
  return (
    <section id="contact" className="section">
      <motion.div
        className="section-inner contact-wrap"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>Let's connect and build something meaningful.</h2>
          <p className="section-copy">
            Reach out for internships, collaborations, project opportunities,
            or a quick conversation about building impactful products.
          </p>
        </div>

        <div className="contact-grid">
          <a className="contact-card" href={`tel:${data.phone.replace(/\s+/g, '')}`}>
            <span>Phone</span>
            <strong>{data.phone}</strong>
          </a>
          <a className="contact-card" href={`mailto:${data.email}`}>
            <span>Email</span>
            <strong>{data.email}</strong>
          </a>
          <a
            className="contact-card"
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>Visit LinkedIn Profile</strong>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
