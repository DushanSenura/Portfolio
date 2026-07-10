import { BadgeInfo, ExternalLink, Globe } from 'lucide-react'
import './Pages.css'

const projects = [
  {
    title: 'SmartDine',
    category: 'Full Stack',
    description:
      'Restaurant management system with QR ordering, table booking, kitchen management, and analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'AI Resume Screener',
    category: 'AI / ML',
    description:
      'A smart screening system that ranks candidates against job requirements using NLP signals.',
    tags: ['Python', 'Scikit-learn', 'NLP'],
  },
  {
    title: 'Senior Residence System',
    category: 'Full Stack',
    description:
      'Residence management platform for senior care with staff, resident, and medication records.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Expense Tracker',
    category: 'Mobile App',
    description:
      'Cross-platform expense tracking app with charts, budgets, reports, and daily reminders.',
    tags: ['Flutter', 'Dart', 'SQLite'],
  },
]

function Projects() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <span className="page-kicker">
          <BadgeInfo size={14} /> Projects
        </span>
        <h1>Selected Work</h1>
        <p>
          These projects show the mix of product, engineering, and experimentation I enjoy.
          Each one focuses on solving a clear problem with a practical implementation.
        </p>
      </header>

      <section className="page-grid">
        {projects.map((project) => (
          <article key={project.title} className="page-card page-card--side stack">
            <p className="muted">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chip-row">
              {project.tags.map((tag) => (
                <span key={tag} className="chip chip-muted">
                  {tag}
                </span>
              ))}
            </div>
            <div className="page-actions">
              <a className="button button-primary" href="#contact">
                View Details <ExternalLink size={16} />
              </a>
              <a className="button button-secondary" href="https://github.com">
                Source <Globe size={16} />
              </a>
            </div>
          </article>
        ))}

        <article className="page-card page-card--full stack">
          <h3>What Drives My Project Work</h3>
          <div className="chip-row">
            <span className="chip">
              <Globe size={14} /> Useful product ideas
            </span>
            <span className="chip">
              <ExternalLink size={14} /> Clear user experiences
            </span>
            <span className="chip">Clean implementation</span>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Projects