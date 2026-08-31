import React from "react";
import { ArrowUpRight } from "lucide-react";
import { selectedProjects } from "../data/projects";

const Projects = () => <div className="projects section-wrap section-pad">
  <div className="section-heading" data-aos="fade-up"><div><p className="eyebrow">Selected work <span className="eyebrow-line" /></p><h2>Ideas made <em>useful.</em></h2></div><p className="section-intro">A selection of products, platforms, and systems I’ve contributed to building.</p></div>
  <div className="project-list">{selectedProjects.map((project, index) => <article className="project-story" key={project.slug} data-aos="fade-up" data-aos-delay={index * 60}>
    <a className="project-image" href={`/projects/${project.slug}`} aria-label={`Open ${project.title}`}><img src={project.image} alt={`${project.title} project preview`} loading="lazy" /><span className="project-index">{project.number}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></a>
    <div className="project-detail"><p className="project-kicker">{project.category} <span>·</span> {project.status}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a className="text-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={15} /></a></div>
  </article>)}</div><a className="button button-dark" href="/projects">View all projects <ArrowUpRight size={16} /></a>
</div>;

export default Projects;
