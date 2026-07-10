import { BadgeInfo, CheckCircle2, MapPin, UserRound } from 'lucide-react'
import './Pages.css'

const highlights = [
  'Clean, maintainable code with a focus on practical delivery.',
  'Responsive interfaces that feel polished on desktop and mobile.',
  'Comfortable working across frontend, backend, and databases.',
  'Always learning and improving through new tools and projects.',
]

function About() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <span className="page-kicker">
          <BadgeInfo size={14} /> About
        </span>
        <h1>About Me</h1>
        <p>
          I am a Computer Science undergraduate and full stack developer who enjoys turning
          ideas into practical digital products. I like building systems that are simple to
          use, easy to maintain, and ready to grow.
        </p>
      </header>

      <section className="page-grid">
        <article className="page-card page-card--wide stack">
          <h2>What I Care About</h2>
          <p className="muted">
            My work usually sits at the intersection of product thinking and technical
            execution. I pay attention to the details that improve usability, performance,
            and long-term maintainability.
          </p>
          <ul className="page-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <aside className="page-card page-card--side stack">
          <h3>Quick Facts</h3>
          <div className="contact-grid">
            <div className="contact-item">
              <small>
                <UserRound size={12} /> Name
              </small>
              <strong>Dushan</strong>
            </div>
            <div className="contact-item">
              <small>
                <MapPin size={12} /> Location
              </small>
              <strong>Sri Lanka</strong>
            </div>
          </div>
          <p>
            Open to internships, freelance work, and collaborative projects that need a
            reliable developer who can move across the stack.
          </p>
        </aside>

        <article className="page-card page-card--full stack">
          <h3>Working Style</h3>
          <div className="chip-row">
            <span className="chip">
              <CheckCircle2 size={14} /> Problem solving
            </span>
            <span className="chip">
              <CheckCircle2 size={14} /> Clear communication
            </span>
            <span className="chip">
              <CheckCircle2 size={14} /> Team collaboration
            </span>
            <span className="chip">
              <CheckCircle2 size={14} /> Fast learning
            </span>
          </div>
        </article>
      </section>
    </main>
  )
}

export default About