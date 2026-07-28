import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Eye,
  Layers3,
  MonitorSmartphone,
} from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'
import './ProjectDetail.css'

function ProjectPreview({
  label,
  index,
  title,
}: {
  label: string
  index: number
  title: string
}) {
  return (
    <div className={`product-shot product-shot--${index + 1}`}>
      <div className="shot-bar">
        <span />
        <span />
        <span />
        <small>{title}</small>
      </div>
      <div className="shot-body">
        <aside>
          <i />
          <i />
          <i />
          <i />
        </aside>
        <div className="shot-content">
          <div className="shot-heading">
            <span />
            <b />
          </div>
          <div className="shot-stats">
            <i />
            <i />
            <i />
          </div>
          <div className="shot-chart">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <strong>{label}</strong>
    </div>
  )
}

function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/projects" replace />

  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main
      className="project-detail"
      style={{ '--project-accent': project.accent } as React.CSSProperties}
    >
      <Link className="project-back" to="/projects">
        <ArrowLeft size={17} /> All projects
      </Link>

      <header className="project-detail-hero">
        <div>
          <div className="project-eyebrow">
            <span>{project.category}</span>
            <span className="status-badge">{project.status}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="project-tagline">{project.shortTitle}</p>
          <p className="project-summary">{project.summary}</p>
          <div className="project-hero-actions">
            {project.liveUrl ? (
              <a
                className="button button-primary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live demo <ExternalLink size={16} />
              </a>
            ) : (
              <span className="button button-disabled" aria-disabled="true">
                Live demo — coming soon
              </span>
            )}
            <a className="button button-secondary" href="#preview">
              View preview <Eye size={16} />
            </a>
          </div>
        </div>

        <div className="hero-product-card" aria-label={`${project.title} product preview`}>
          <div className="hero-product-topline">
            <MonitorSmartphone size={19} />
            <span>{project.platforms.join(' + ')}</span>
          </div>
          <div className="hero-product-logo">{project.title.charAt(0)}</div>
          <strong>{project.title}</strong>
          <small>{project.shortTitle}</small>
          <div className="hero-product-pills">
            {project.platforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>
        </div>
      </header>

      <section className="project-content-grid">
        <article className="project-copy">
          <span className="section-label">Introduction</span>
          <h2>Built around a real problem</h2>
          {project.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <aside className="project-tech-card">
          <div className="section-label">
            <Layers3 size={15} /> Languages & frameworks
          </div>
          <div className="tech-grid">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="feature-section">
        <span className="section-label">Core capabilities</span>
        <h2>What the product includes</h2>
        <div className="feature-grid">
          {project.features.map((feature) => (
            <div key={feature}>
              <span>
                <Check size={15} />
              </span>
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="preview-section" id="preview">
        <div className="preview-heading">
          <div>
            <span className="section-label">Product preview</span>
            <h2>A closer look at the experience</h2>
          </div>
          <p>Concept previews representing the product&apos;s primary screens and workflows.</p>
        </div>
        <div className="preview-grid">
          {project.previewLabels.map((label, index) => (
            <ProjectPreview key={label} label={label} index={index} title={project.title} />
          ))}
        </div>
      </section>

      <Link className="next-project" to={`/projects/${nextProject.slug}`}>
        <span>
          <small>Next project</small>
          <strong>{nextProject.title}</strong>
        </span>
        <ArrowRight size={22} />
      </Link>
    </main>
  )
}

export default ProjectDetail
