import { BadgeInfo, Award, GraduationCap, BookOpen } from 'lucide-react'
import './Pages.css'

const education = [
  {
    title: 'BSc (Hons) in Computer Science',
    place: 'Edith Cowan University',
    detail:
      'Focused on software development, systems thinking, databases, and practical project delivery.',
  },
  {
    title: 'Secondary Education',
    place: 'Schooling in Sri Lanka',
    detail:
      'Built a strong foundation in mathematics, computing, and analytical problem solving.',
  },
  {
    title: 'Continuous Learning',
    place: 'Projects, tutorials, and experimentation',
    detail:
      'I keep learning through hands-on work, technical reading, and building small tools that stretch my skills.',
  },
]

function Education() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <span className="page-kicker">
          <BadgeInfo size={14} /> Education
        </span>
        <h1>Academic Background</h1>
        <p>
          My education combines formal computer science study with continuous self-directed
          learning. I try to connect theory with the realities of shipping working software.
        </p>
      </header>

      <section className="page-grid">
        <article className="page-card page-card--wide stack">
          <h2>Learning Journey</h2>
          <ul className="timeline">
            {education.map((item) => (
              <li key={item.title} className="timeline-item">
                <strong>{item.title}</strong>
                <span>{item.place}</span>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </article>

        <aside className="page-card page-card--side stack">
          <h3>
            <Award size={16} /> Key Strengths
          </h3>
          <div className="chip-row">
            <span className="chip chip-muted">Software fundamentals</span>
            <span className="chip chip-muted">Database design</span>
            <span className="chip chip-muted">Web development</span>
            <span className="chip chip-muted">Problem solving</span>
          </div>
          <p>
            I use academic learning to build a broader understanding, then reinforce it by
            applying the same ideas in projects.
          </p>
          <p className="muted">
            <BookOpen size={14} /> Ongoing focus: architecture, backend systems, and modern
            frontend development.
          </p>
        </aside>

        <article className="page-card page-card--full stack">
          <h3>
            <GraduationCap size={16} /> Goal
          </h3>
          <p>
            To keep growing into a developer who can move confidently between product ideas,
            technical implementation, and collaborative delivery.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Education