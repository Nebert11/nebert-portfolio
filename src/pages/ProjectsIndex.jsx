import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const ProjectsIndex = () => {
  const professional = projects.filter((project) => project.category === "Professional work");
  const personal = projects.filter((project) => project.category === "Personal project");
  return <main className="page projects-index section-pad"><div className="section-wrap"><div className="page-intro"><p className="eyebrow">The portfolio <span className="eyebrow-line" /></p><h1>Products, platforms,<br /><em>and systems.</em></h1><p>Selected work across frontend engineering, backend services, product interfaces, dashboards, and mobile-first experiences.</p></div><ProjectGroup title="Professional work" items={professional} /><ProjectGroup title="Personal work" items={personal} /></div></main>;
};

const ProjectGroup = ({ title, items }) => <section className="project-group"><div className="group-heading"><h2>{title}</h2><span>{String(items.length).padStart(2, "0")} projects</span></div><div className="index-projects">{items.map((project) => <article className="index-project" key={project.slug}><a className="index-image" href={`/projects/${project.slug}`}><img src={project.image} alt={`${project.title} preview`} loading="lazy" /><span>{project.number}</span></a><div><p className="project-kicker">{project.category} · {project.status}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a className="text-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={15} /></a></div></article>)}</div></section>;
export default ProjectsIndex;
