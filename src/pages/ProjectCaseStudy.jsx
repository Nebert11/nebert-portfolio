import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const ProjectCaseStudy = ({ slug }) => {
  const project = projects.find((item) => item.slug === slug) || projects[0];
  useEffect(() => {
    document.title = `${project.title} | Nebert Kuria`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", project.description);
    return () => {
      document.title = "Nebert Kuria | Software Engineer";
    };
  }, [project]);
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  return <main className="case-study"><div className="case-hero section-wrap section-pad"><a className="back-link" href="/projects"><ArrowLeft size={15} /> All projects</a><p className="eyebrow">{project.category} · {project.status}</p><h1>{project.title}</h1><p className="case-lede">{project.description}</p><div className="case-meta"><div><span>Role</span><strong>{project.role}</strong></div><div><span>Technologies</span><strong>{project.technologies.join(" · ")}</strong></div><div><span>Year</span><strong>{project.year}</strong></div></div><img className="case-image" src={project.image} alt={`${project.title} project visual`} /></div><div className="case-body section-wrap"><CaseBlock title="Overview"><p>{project.overview}</p></CaseBlock><CaseBlock title="The problem"><p>{project.problem}</p></CaseBlock><CaseBlock title="My contribution"><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></CaseBlock><CaseBlock title="Solution"><p>{project.solution}</p></CaseBlock><div className="engineering-block"><div><p className="eyebrow">Technical shape <span className="eyebrow-line" /></p><h2>How it<br /><em>comes together.</em></h2></div><div className="architecture"><div>Frontend</div><ArrowRight /><div>API boundary</div><ArrowRight /><div>Services & data</div></div><div className="engineering-tags">{project.engineering.map((item) => <span key={item}>{item}</span>)}</div></div><div className="case-columns"><CaseBlock title="Challenges"><ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></CaseBlock><CaseBlock title="Impact"><p>{project.impact}</p></CaseBlock></div></div><nav className="case-nav section-wrap"><a href={`/projects/${previous.slug}`}><ArrowLeft size={16} /><span>Previous<br /><strong>{previous.title}</strong></span></a><a href={`/projects/${next.slug}`}><span>Next<br /><strong>{next.title}</strong></span><ArrowUpRight size={16} /></a></nav></main>;
};
const CaseBlock = ({ title, children }) => <section className="case-block"><h2>{title}</h2><div>{children}</div></section>;
export default ProjectCaseStudy;
