import { BadgeInfo, Mail, Phone, MapPin, Globe } from 'lucide-react'
import './Pages.css'

function Contact() {
  return (
    <main className="page-shell">
      <header className="page-hero">
        <span className="page-kicker">
          <BadgeInfo size={14} /> Contact
        </span>
        <h1>Let&apos;s Work Together</h1>
        <p>
          If you have a project, internship, or idea that needs a developer, reach out and
          I&apos;ll respond as soon as I can.
        </p>
      </header>

      <section className="page-grid">
        <article className="page-card page-card--wide stack">
          <h2>Direct Contact</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <small>
                <Mail size={12} /> Email
              </small>
              <a href="mailto:dushansenura@gmail.com">dushansenura@gmail.com</a>
            </div>
            <div className="contact-item">
              <small>
                <Phone size={12} /> Phone
              </small>
              <a href="tel:+94764125944">+94 76 412 5944</a>
            </div>
            <div className="contact-item">
              <small>
                <MapPin size={12} /> Location
              </small>
              <strong>Sri Lanka</strong>
            </div>
            <div className="contact-item">
              <small>
                <Globe size={12} /> Social
              </small>
              <a href="https://github.com">GitHub / LinkedIn</a>
            </div>
          </div>
        </article>

        <aside className="page-card page-card--side stack">
          <h3>Best Way To Reach Me</h3>
          <p>
            Email is usually the fastest route for project discussions. For quick introductions
            or networking, LinkedIn and GitHub are also useful.
          </p>
          <div className="page-actions">
            <a className="button button-primary" href="mailto:dushansenura@gmail.com">
              Send Email <Mail size={16} />
            </a>
            <a className="button button-secondary" href="https://linkedin.com">
              LinkedIn <Globe size={16} />
            </a>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Contact