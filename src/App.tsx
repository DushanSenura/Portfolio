import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import CursorEffect from './components/CursorEffect'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'

function App() {
  return (
    <BrowserRouter>
      <CursorEffect />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
