import React from "react";
import { ArrowUpRight } from "lucide-react";
import image1 from '../assets/image/image1.JPG';
import image2 from '../assets/image/image2.JPG';
import image3 from '../assets/image/image3.JPG';
import quickImage from "../assets/image/quick.jpg";
import travelImage from '../assets/image/travelbuddies.JPG';
import plantImage from "../assets/image/plantend.jpg";

const projects = [
  { number: "01", title: "MindEase", description: "A more reachable path to mental health support for people facing distance or financial barriers.", role: "Product & frontend", stack: "React / AI chatbot / Vercel", image: image1, href: "https://mindease-two-iota.vercel.app/", label: "Live product" },
  { number: "02", title: "Germinia School", description: "An online learning module system designed around flexible German study and scheduled tutor sessions.", role: "Web application", stack: "Web platform / Learning experience", image: image2, href: "#", label: "View case study" },
  { number: "03", title: "FoodEx", description: "A home-delivery experience that makes ordering meat, vegetables, and fruit feel straightforward.", role: "Web experience", stack: "E-commerce / Ordering flow", image: image3, href: "#", label: "View case study" },
  { number: "04", title: "Security & networking", description: "Surveyed, designed, and installed cable tracks and CCTV infrastructure for a new security camp at Ol Pejeta Conservancy.", role: "ICT infrastructure", stack: "Network design / CCTV / Installation", image: plantImage, href: "#", label: "View project" },
  { number: "05", title: "Travel Buddies", description: "A social travel platform connecting travelers with local guides, trip planning, group chat, and recommendations.", role: "Product concept", stack: "Travel / Social / Planning", image: travelImage, href: "#", label: "View project" },
  { number: "06", title: "Quick and Quality", description: "A fast, reliable service platform built to meet a broad range of customer needs.", role: "Web platform", stack: "Services / Customer experience", image: quickImage, href: "#", label: "View project" },
];

const Projects = () => <div className="projects section-wrap section-pad">
  <div className="section-heading" data-aos="fade-up"><div><p className="eyebrow">Selected work <span className="eyebrow-line" /></p><h2>Ideas made <em>useful.</em></h2></div><p className="section-intro">A selection of products and systems I’ve shaped, from accessible digital experiences to real-world infrastructure.</p></div>
  <div className="project-list">{projects.map((project, index) => <article className="project-story" key={project.title} data-aos="fade-up" data-aos-delay={index * 60}>
    <a className="project-image" href={project.href} aria-label={`Open ${project.title}`}><img src={project.image} alt={`${project.title} project preview`} loading="lazy" /><span className="project-index">{project.number}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></a>
    <div className="project-detail"><p className="project-kicker">{project.role} <span>·</span> {project.stack}</p><h3>{project.title}</h3><p>{project.description}</p><a className="text-link" href={project.href}>{project.label} <ArrowUpRight size={15} /></a></div>
  </article>)}</div>
</div>;

export default Projects;
