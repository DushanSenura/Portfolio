import { BadgeInfo, BriefcaseBusiness, Mail, Search, Sparkles } from 'lucide-react'
import './Pages.css'

const strengths = [
  'Strong foundation in frontend, backend, and database basics.',
  'Projects built with React, TypeScript, Node.js, and modern UI patterns.',
  'Comfortable learning quickly and adapting to team workflows.',
  'Focused on writing clean code and shipping practical features.',
]

const internshipGoals = [
  'Contribute to real product features as a junior/intern developer.',
  'Learn professional development workflows, reviews, and deployment practices.',
  'Grow under mentorship while improving technical and communication skills.',
]

function Experience() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <span className="page-kicker">
          <BadgeInfo size={14} /> Experience
        </span>
        <h1>Experience & Internship Goal</h1>
        <p>
          I do not have formal industry experience yet, and I am actively looking for an
          internship opportunity where I can learn, contribute, and grow as a developer.
        </p>
      </header>

      <section className="page-grid">
        <article className="page-card page-card--wide stack">
          <h2>What I Bring Right Now</h2>
          <ul className="page-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <aside className="page-card page-card--side stack">
          <h3>
            <BriefcaseBusiness size={16} /> Seeking Internship
          </h3>
          <p>
            I am looking for an internship where I can join a team, gain real-world exposure,
            and build experience through meaningful work.
          </p>
          <div className="chip-row">
            <span className="chip chip-muted">Internship</span>
            <span className="chip chip-muted">Junior developer</span>
            <span className="chip chip-muted">Full stack</span>
          </div>
        </aside>

        <article className="page-card page-card--full stack">
          <h3>
            <Sparkles size={16} /> What I Want To Learn
          </h3>
          <ul className="page-list">
            {internshipGoals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="page-actions">
            <a className="button button-primary" href="mailto:dushansenura@gmail.com">
              Reach Out <Mail size={16} />
            </a>
            <a className="button button-secondary" href="/contact">
              Contact Page <Search size={16} />
            </a>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Experience