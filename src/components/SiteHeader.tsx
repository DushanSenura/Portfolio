import { Download } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import './SiteHeader.css'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
]

function SiteHeader() {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Dushan home">
        <span className="brand-mark">D</span>
        <span>
          <strong>Dushan</strong>
          <small>Developer</small>
        </span>
      </Link>

      <nav className="nav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} end={item.href === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link className="button button-primary" to="/contact">
        Contact <Download size={16} />
      </Link>
    </header>
  )
}

export default SiteHeader