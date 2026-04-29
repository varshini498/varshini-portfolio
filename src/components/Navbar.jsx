import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Navbar({ name, navItems, activeSection }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <button className="brand" onClick={() => handleScroll('home')}>
          {name}
        </button>

        <button
          className={`hamburger ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    className="nav-indicator"
                    layoutId="nav-indicator"
                  />
                ) : null}
              </button>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
