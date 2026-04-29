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
    <section ref={sectionRef} className="section">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2>Technical strengths shaped through hands-on learning.</h2>
          <p className="section-copy">
            A balanced mix of programming, web development, and interface
            design skills with room to keep growing.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="skill-head">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-track">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
