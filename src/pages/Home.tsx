import {
  ArrowRight,
  Award,
  BadgeInfo,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  LayoutGrid,
  Mail,
  Menu,
  MoonStar,
  ServerCog,
  X,
  SquareTerminal,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import heroImg from '../assets/Dushan-cutout.png'
import navacore from '../assets/NovaCore.png'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Home.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  {
    title: 'Frontend',
    icon: LayoutGrid,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    items: ['Python', 'Scikit-learn', 'NLP', 'FastAPI'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Tools & Others',
    icon: SquareTerminal,
    items: ['Git', 'Docker', 'VS Code', 'Figma'],
  },
]

const stats = [
  { value: '3+', label: 'Projects Completed', icon: Code2 },
  { value: 'Looking for internship', label: 'Years of Experience', icon: BriefcaseBusiness },
  { value: '3.0', label: 'GPA (Out of 4)', icon: Award },
  { value: 'Always', label: 'Learning', icon: MoonStar },
]

const socialLinks = [
  { icon: Code2, href: 'https://github.com/DushanSenura', label: 'GitHub' },
  { icon: X, href: 'https://x.com', label: 'X / Twitter' },
  { icon: Mail, href: 'mailto:dushansenura@gmail.com', label: 'Email' },
]

function Home() {
  const skillsGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = skillsGridRef.current
    if (!grid || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let isPaused = false
    let animationFrame = 0
    let previousTime = performance.now()

    const pause = () => {
      isPaused = true
    }

    const resume = () => {
      isPaused = false
    }

    const moveCarousel = (time: number) => {
      const elapsed = Math.min(time - previousTime, 40)
      previousTime = time
      const firstCard = grid.firstElementChild as HTMLElement | null
      const cardWidth = firstCard?.offsetWidth ?? grid.clientWidth / 4
      const gap = Number.parseFloat(getComputedStyle(grid).columnGap) || 16
      const loopWidth = (cardWidth + gap) * skills.length

      if (!isPaused && grid.scrollWidth > grid.clientWidth) {
        grid.scrollLeft += elapsed * 0.025
        if (grid.scrollLeft >= loopWidth) grid.scrollLeft -= loopWidth
      }

      animationFrame = requestAnimationFrame(moveCarousel)
    }

    grid.addEventListener('mouseenter', pause)
    grid.addEventListener('mouseleave', resume)
    grid.addEventListener('focusin', pause)
    grid.addEventListener('focusout', resume)
    animationFrame = requestAnimationFrame(moveCarousel)

    return () => {
      cancelAnimationFrame(animationFrame)
      grid.removeEventListener('mouseenter', pause)
      grid.removeEventListener('mouseleave', resume)
      grid.removeEventListener('focusin', pause)
      grid.removeEventListener('focusout', resume)
    }
  }, [])

  return (
    <main className="home-page" id="home">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Hello, I&apos;m</span>
          <h1>Dushan</h1>
          <p className="headline">Full Stack Developer</p>
          <p className="lede">
            I build modern, responsive, and user-friendly web applications that solve real
            problems. My focus is clean code, strong performance, and smooth user
            experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Work <ArrowRight size={16} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me <ExternalLink size={16} />
            </a>
          </div>

          <div className="social-row" aria-label="Social links">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} className="social-link" href={href} aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-ring" />
          <div className="hero-glow" />
          <img className="hero-image" src={heroImg} alt="" />
          <div className="floating-card floating-left">
            <Code2 size={18} />
          </div>
          <div className="floating-card floating-top-right">
            <SquareTerminal size={18} />
          </div>
          <div className="floating-card floating-bottom-right">
            <Database size={18} />
          </div>
        </div>
      </section>

      <section className="about-grid" id="about">
        <div className="panel panel-intro">
          <div className="section-kicker">
            <BadgeInfo size={14} /> About Me
          </div>
          <h2>Turning Ideas Into Digital Solutions</h2>
          <p>
            I&apos;m a Computer Science undergraduate with a passion for building scalable
            applications and practical systems. I enjoy solving problems, learning new
            technologies, and turning ideas into useful products.
          </p>

          <ul className="checklist">
            <li>Clean & maintainable code</li>
            <li>Problem solver</li>
            <li>Fast learner</li>
            <li>Team player</li>
          </ul>

          <a className="button button-secondary inline-cta" href="#contact">
            More About Me <ArrowRight size={16} />
          </a>
        </div>

        <div className="panel panel-details">
          <dl className="details-list">
            <div>
              <dt>Name</dt>
              <dd>Dushan Senura Suddrikku Abeywardana</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Sri Lanka</dd>
            </div>
            <div>
              <dt>Degree</dt>
              <dd>BSc (Hons) in Computer Science</dd>
            </div>
            <div>
              <dt>University</dt>
              <dd>Edith Cowan University</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>dushansenura@gmail.com</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd className="status">Open to Opportunities</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <span className="section-kicker">
            <Menu size={14} /> Skills
          </span>
          <h2>Technologies I Work With</h2>
        </div>

        <div
          ref={skillsGridRef}
          className="skills-grid"
          aria-label="Technology categories"
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon

            return (
              <article
                key={`${skill.title}-${index}`}
                className="panel skill-card"
                aria-hidden={index >= skills.length}
              >
                <div className="card-title">
                  <Icon size={16} />
                  <h3>{skill.title}</h3>
                </div>
                <div className="chip-row">
                  {skill.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading section-heading-row">
          <span className="section-kicker">
            <BriefcaseBusiness size={14} /> Projects
          </span>
          <Link className="text-link" to="/projects">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link key={project.title} className="project-card" to={`/projects/${project.slug}`}>
              <div className="project-visual">
                <span>{project.category}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="chip-row compact">
                  {project.platforms.map((tag) => (
                    <span key={tag} className="chip chip-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="stats-section" id="experience">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <div key={stat.label} className="stat-item">
              <Icon size={18} />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          )
        })}
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="section-kicker">
            <Mail size={14} /> Contact
          </span>
          <h2>Let&apos;s work together</h2>
          <p>
            Have a project in mind or want to say hello? Reach out and I&apos;ll get back to you.
          </p>
        </div>

        <div className="contact-actions">
          <a className="button button-primary" href="mailto:dushansenura@gmail.com">
            dushansenura@gmail.com <Mail size={16} />
          </a>
          <a className="button button-secondary" href="tel:+94764125944">
            +94 76 412 5944 <ExternalLink size={16} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <a className="brand brand-footer" href="#home">
            <img src={navacore} alt="NovaCore Tech" className="brand-icon" />
            <span>
              <strong>NovaCore</strong>
              <small>Tech</small>
            </span>
          </a>
          <p>I&apos;m always open to discussing new projects, ideas, or opportunities.</p>
        </div>

        <div className="footer-links">
          {navItems.slice(1).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div>
          <p className="footer-note">Designed & Built with heart by NovaCore Tech</p>
        </div>
      </footer>
    </main>
  )
}

export default Home
