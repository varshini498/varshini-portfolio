import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Navbar({ name, navItems, activeSection, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  useEffect(() => {
    const handleScrollState = () => setIsScrolled(window.scrollY > 16)
    handleScrollState()
    window.addEventListener('scroll', handleScrollState)
    return () => window.removeEventListener('scroll', handleScrollState)
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
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <button className="brand" onClick={() => handleScroll('home')}>
          {name}
        </button>

        <button
          className={`hamburger ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-actions">
          <div className="nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <motion.button
                  key={item.id}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => handleScroll(item.id)}
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <span className="nav-link-line" />
                  {isActive ? <motion.span className="nav-indicator" layoutId="nav-indicator" /> : null}
                </motion.button>
              )
            })}
          </div>

          <motion.button
            onClick={toggleTheme}
            className="theme-btn"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="mobile-menu-inner">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id

                  return (
                    <motion.button
                      key={item.id}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => handleScroll(item.id)}
                      type="button"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  )
                })}

                <motion.button
                  onClick={toggleTheme}
                  className="theme-btn mobile-theme-btn"
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                </motion.button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}

export default Navbar
