import { ArrowRight, BadgeInfo, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Pages.css'

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
          <article
            key={project.title}
            className="page-card page-card--side stack project-list-card"
            style={{ '--project-accent': project.accent } as React.CSSProperties}
          >
            <div className="project-card-meta">
              <p className="muted">{project.category}</p>
              <span className="status-badge">{project.status}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="chip-row">
              {project.platforms.map((tag) => (
                <span key={tag} className="chip chip-muted">
                  {tag}
                </span>
              ))}
            </div>
            <div className="page-actions">
              <Link className="button button-primary" to={`/projects/${project.slug}`}>
                Explore project <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}

        <article className="page-card page-card--full stack">
          <h3>What Drives My Project Work</h3>
          <div className="chip-row">
            <span className="chip">
              <Layers3 size={14} /> Useful product ideas
            </span>
            <span className="chip">
              <ArrowRight size={14} /> Clear user experiences
            </span>
            <span className="chip">Clean implementation</span>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Projects
