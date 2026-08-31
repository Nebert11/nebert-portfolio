import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Projects from './pages/Projects';
import ProjectsIndex from './pages/ProjectsIndex';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import AboutPage from './pages/AboutPage';
import Experience from './pages/Experience';
import ContactPage from './pages/ContactPage';
import { projects } from './data/projects';
import Footer from './components/Footer';

function App() {
  const path = (window.location.pathname.replace(/\/$/, '') || '/').replace(/^\/home$/, '/');
  const projectSlug = path.startsWith('/projects/') ? path.split('/')[2] : null;
  const page = path === '/' ? <><Home /><Projects /><section className="home-preview about-preview"><div className="section-wrap"><p className="eyebrow">The short version <span className="eyebrow-line" /></p><h2>Software engineer with<br /><em>a product mindset.</em></h2><p>Building web applications, enterprise platforms, dashboards, internal tools, APIs, and mobile/PWA experiences.</p><a className="text-link" href="/about">Read more about me <span>↗</span></a></div></section><section className="home-preview stack-preview"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">Engineering stack <span className="eyebrow-line" /></p><h2>The tools<br /><em>behind the work.</em></h2></div><a className="text-link" href="/about">See full toolkit <span>↗</span></a></div><div className="stack-columns"><div><span>Frontend</span><strong>React · Next.js · JavaScript · TypeScript · Tailwind CSS</strong></div><div><span>Backend</span><strong>PHP · Laravel · Lumen · REST APIs</strong></div><div><span>Mobile & CMS</span><strong>Flutter · PWA · Strapi</strong></div><div><span>Data & tools</span><strong>MySQL · Git · GitHub · Figma</strong></div></div></div></section><section className="home-preview experience-preview"><div className="section-wrap"><div><p className="eyebrow">Experience <span className="eyebrow-line" /></p><h2>Growing through<br /><em>real products.</em></h2></div><div><p className="project-kicker">WPP Scan Group / Ogilvy · 2026</p><h3>Software Engineer / Frontend Engineer</h3><p>Contributing across frontend engineering, backend development, dashboards, APIs, CMS, mobile/PWA, reporting, deployment, and debugging.</p><a className="text-link" href="/experience">View full experience <span>↗</span></a></div></div></section><section className="home-preview personal-preview"><div className="section-wrap"><p className="eyebrow">Personal work <span className="eyebrow-line" /></p><div><div><h2>Akiba</h2><p>Personal Finance Management Platform</p></div><a className="button button-primary" href={`/projects/${projects.find((project) => project.slug === 'akiba').slug}`}>View project <span>↗</span></a></div></div></section><ContactPage /></> : path === '/projects' ? <ProjectsIndex /> : projectSlug ? <ProjectCaseStudy slug={projectSlug} /> : path === '/about' ? <AboutPage /> : path === '/experience' ? <Experience /> : path === '/contact' ? <ContactPage /> : <Home />;

  return (
    <div className='site-shell'>
      <Navbar />
      {page}

      <Footer />
    </div>
  );
}

export default App;