import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import aiCareerImg from './assets/projects/ai-career.png'
import smartPortalImg from './assets/projects/smart-portal.png'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Platforms from './components/Platforms'
import Contact from './components/Contact'

const sectionIds = [
  'home',
  'projects',
  'skills',
  'education',
  'about',
  'certificates',
  'platforms',
  'contact',
]

const portfolioData = {
  name: 'Varshini M',
  email: 'varshini.m498@gmail.com',
  phone: '6379106242',
  dob: '21-10-2005',
  address: 'Tiruppur, Tamil Nadu, India',
  resumeLink: '/resume.pdf',
  projectsCompleted: '2+',
  intro:
    'AI & Machine Learning undergraduate with proficiency in Java, Python, SQL, and backend development. Experienced in building ML-powered web applications, REST APIs, data pipelines, and analytics dashboards. Passionate about scalable product development, problem-solving, and large-scale systems.',
  about:
    'AI & Machine Learning undergraduate passionate about building scalable systems and intelligent applications.',
  tagline: 'AI and ML Undergraduate',
  projects: [
    {
      title: 'AI Career Advisor',
      image: aiCareerImg,
      link: 'https://ai-career-advisor-9.onrender.com/',
      description: 'ML-based career guidance platform',
      badge: 'Deployed Project',
    },
    {
      title: 'Smart Change Request Portal',
      image: smartPortalImg,
      link: 'https://smart-change-request-portal-4.onrender.com/',
      description: 'Workflow-based system for managing change requests',
      badge: 'Full-Stack Build',
    },
  ],
  education: [
    {
      title: 'B.Tech AI & ML',
      place: 'Bannari Amman Institute of Technology',
      duration: '2023 - Present',
      score: 'CGPA: 8.25 / 10',
      description:
        'Pursuing a strong academic foundation in artificial intelligence, machine learning, software systems, and applied development.',
    },
    {
      title: 'Higher Secondary Certificate',
      place: 'AVP Trust National Matric Hr Sec School',
      duration: 'Completed',
      score: 'HSC - 94.67%',
      description:
        'Completed higher secondary studies with strong academic performance and a clear interest in technical fields.',
      secondaryScore: 'SSLC - 100%',
    },
  ],
  experiences: [
    {
      role: 'Machine Learning Intern',
      company: 'Elevate Labs',
      duration: 'Online | 45 days',
      description:
        'Worked on data preprocessing, machine learning models, and end-to-end workflow implementation. Improved problem-solving skills and understanding of analytics systems integration.',
    },
  ],
  certificates: [
    {
      title: 'Guideware Certificate',
      link: '/certificates/Guideware.pdf',
    },
    {
      title: 'Hackelevate Certificate',
      link: '/certificates/Hackelevate.pdf',
    },
    {
      title: 'Turbohaq Certificate',
      link: '/certificates/Turbohaq.pdf',
    },
  ],
  platforms: [
    {
      name: 'LinkedIn',
      description:
        'Connect for professional updates, academic milestones, and project highlights.',
      link: 'https://www.linkedin.com/in/varshini-m-695850300/',
    },
    {
      name: 'GitHub',
      description:
        'Browse repositories, deployed projects, and hands-on development work across the stack.',
      link: 'https://github.com/varshini498',
    },
    {
      name: 'LeetCode',
      description:
        'See consistency in data structures, algorithms, and interview-focused problem solving.',
      link: 'https://leetcode.com/u/Varshini_498/',
    },
    {
      name: 'HackerRank',
      description:
        'View coding practice, skill assessments, and progress across technical domains.',
      link: 'https://www.hackerrank.com/profile/varshini_m498',
    },
  ],
  skills: [
    {
      category: 'Programming',
      items: ['Python', 'Java', 'JavaScript', 'SQL', 'C'],
    },
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'Responsive Design'],
    },
    {
      category: 'Frameworks',
      items: ['React', 'Node.js', 'Flask'],
    },
    {
      category: 'Tools',
      items: ['GitHub', 'VS Code', 'Postman'],
    },
  ],
  personalDetails: [
    { label: 'Name', value: 'Varshini M' },
    { label: 'DOB', value: '21-10-2005' },
    { label: 'Address', value: 'Tiruppur, Tamil Nadu, India' },
    { label: 'Email', value: 'varshini.m498@gmail.com' },
    { label: 'Phone', value: '6379106242' },
  ],
  linkedin: 'https://www.linkedin.com/in/varshini-m-695850300/',
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.body.className = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observers = []
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        },
        {
          threshold: 0.45,
          rootMargin: '-10% 0px -35% 0px',
        },
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  const navItems = useMemo(
    () => [
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'education', label: 'Education' },
      { id: 'about', label: 'About' },
      { id: 'certificates', label: 'Certificates' },
      { id: 'platforms', label: 'Platforms' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loader-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
          >
            <motion.div
              className="loader-ring"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Loading portfolio...
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isLoading ? (
        <div className="app-shell">
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />
          <Navbar
            name={portfolioData.name}
            navItems={navItems}
            activeSection={activeSection}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <main>
            <Hero data={portfolioData} />
            <Projects items={portfolioData.projects} />
            <Skills skills={portfolioData.skills} />
            <Experience items={portfolioData.experiences} />
            <Education items={portfolioData.education} />
            <About data={portfolioData} />
            <Certificates items={portfolioData.certificates} />
            <Platforms items={portfolioData.platforms} />
            <Contact data={portfolioData} />
          </main>
        </div>
      ) : null}
    </>
  )
}

export default App
