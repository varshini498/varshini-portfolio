import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Platforms from './components/Platforms'
import Contact from './components/Contact'

const sectionIds = [
  'home',
  'about',
  'projects',
  'education',
  'experience',
  'certificates',
  'platforms',
  'contact',
]

const portfolioData = {
  name: '[Your Name]',
  email: '[Your Email]',
  phone: '+91 98765 43210',
  dob: '01 January 2000',
  address: 'Chennai, Tamil Nadu, India',
  resumeLink: '#',
  projectsCompleted: '[Your Projects]',
  intro:
    'I build thoughtful digital experiences with a strong foundation in development, design, and problem solving. I enjoy creating clean interfaces, writing efficient code, and turning ideas into polished products.',
  about:
    'I am a motivated developer with a growing interest in full-stack engineering, UI/UX design, and competitive programming. I enjoy learning new technologies, collaborating on real-world projects, and building experiences that feel intuitive and modern.',
  roles: ['Frontend Developer', 'UI/UX Enthusiast', 'Problem Solver'],
  education: [
    {
      title: 'Bachelor of Engineering in Computer Science',
      place: 'Your College Name',
      duration: '2021 - 2025',
      score: 'CGPA: 8.9/10',
      description:
        'Focused on software engineering, database systems, web development, and hands-on project work.',
    },
    {
      title: 'Higher Secondary Education',
      place: 'Your School Name',
      duration: '2019 - 2021',
      score: '12th Score: 92%',
      description:
        'Built a strong academic base in mathematics, computer science, and analytical thinking.',
    },
    {
      title: 'Secondary School Education',
      place: 'Your School Name',
      duration: '2018 - 2019',
      score: '10th Score: 94%',
      description:
        'Developed strong fundamentals and consistent academic performance across core subjects.',
    },
  ],
  experiences: [
    {
      role: 'Web Development Intern',
      company: 'Innovative Tech Studio',
      duration: 'Jun 2024 - Aug 2024',
      description:
        'Designed responsive interfaces, improved page performance, and collaborated with mentors to ship polished UI components.',
    },
    {
      role: 'UI/UX Project Contributor',
      company: 'Campus Design Cell',
      duration: 'Jan 2024 - May 2024',
      description:
        'Created wireframes, interaction flows, and visual systems for student-focused digital products.',
    },
  ],
  certificates: [
    {
      title: 'Python for Everybody',
      issuer: 'Coursera',
      link: '#',
    },
    {
      title: 'SQL and Relational Databases',
      issuer: 'IBM SkillsBuild',
      link: '#',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      link: '#',
    },
  ],
  platforms: [
    {
      name: 'CodeChef',
      description: 'Explore coding contest participation and problem-solving progress.',
      link: '#',
    },
    {
      name: 'HackerRank',
      description: 'View verified skill badges and practice milestones across domains.',
      link: '#',
    },
    {
      name: 'LeetCode',
      description: 'See consistency in data structures, algorithms, and interview prep.',
      link: '#',
    },
    {
      name: 'LinkedIn',
      description: 'Connect for professional updates, networking, and project highlights.',
      link: '#',
    },
    {
      name: 'GitHub',
      description: 'Browse repositories, experiments, and hands-on development work.',
      link: '#',
    },
  ],
  skills: [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 82 },
    { name: 'SQL', level: 86 },
    { name: 'C++', level: 78 },
    { name: 'HTML', level: 92 },
    { name: 'UI/UX', level: 84 },
    { name: 'C', level: 75 },
  ],
  personalDetails: [
    { label: 'Name', value: '[Your Name]' },
    { label: 'DOB', value: '01 January 2000' },
    { label: 'Address', value: 'Chennai, Tamil Nadu, India' },
    { label: 'Email', value: '[Your Email]' },
    { label: 'Phone', value: '+91 98765 43210' },
  ],
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

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
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'experience', label: 'Experience' },
      { id: 'certificates', label: 'Certificates' },
      { id: 'platforms', label: 'Platforms' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

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
          />
          <main>
            <Hero data={portfolioData} />
            <About data={portfolioData} />
            <Skills skills={portfolioData.skills} />
            <Education items={portfolioData.education} />
            <Experience items={portfolioData.experiences} />
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
