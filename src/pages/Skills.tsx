import { BadgeInfo, Code2, Database, SquareTerminal, ServerCog } from 'lucide-react'
import './Pages.css'

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: ServerCog,
    items: ['Node.js', 'Express', 'Python', 'REST APIs'],
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

function Skills() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <span className="page-kicker">
          <BadgeInfo size={14} /> Skills
        </span>
        <h1>Technologies I Use</h1>
        <p>
          I work across the stack with a practical mix of frontend, backend, and data tools.
          The goal is to keep the tech lean while still building features that feel complete.
        </p>
      </header>

      <section className="page-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon

          return (
            <article key={group.title} className="page-card page-card--side stack">
              <h3>
                <Icon size={16} /> {group.title}
              </h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span key={item} className="chip chip-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Skills