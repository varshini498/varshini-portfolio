import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function Skills({ skills }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-header">
          <span className="section-tag">Technical Skills</span>
          <h2>Technical strengths across development, frontend, frameworks, and tools.</h2>
          <p className="section-copy">
            A practical toolkit built through coursework, hands-on projects,
            and continuous problem solving.
          </p>
        </div>

        <div className="skills-grid skill-category-grid">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              className="skill-card skill-category-card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="skill-head">
                <h3>{group.category}</h3>
              </div>
              <div className="skill-chip-wrap">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
