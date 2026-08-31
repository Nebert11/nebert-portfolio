import React from "react";
import { FaFigma, FaGithub, FaLaravel, FaPhp, FaReact } from "react-icons/fa6";
import { SiFlutter, SiJavascript, SiMysql, SiNextdotjs, SiPwa, SiStrapi, SiTailwindcss, SiTypescript } from "react-icons/si";

const stacks = [
  { label: "Frontend", icons: [FaReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss], technologies: "React, Next.js, JavaScript, TypeScript, Tailwind CSS" },
  { label: "Backend", icons: [FaPhp, FaLaravel], technologies: "PHP, Laravel, Lumen, REST APIs" },
  { label: "Mobile & CMS", icons: [SiFlutter, SiPwa, SiStrapi], technologies: "Flutter, PWA, Strapi" },
  { label: "Data & tools", icons: [SiMysql, FaGithub, FaFigma], technologies: "MySQL, Git, GitHub, Figma" },
];

const StackPreview = () => <section className="home-preview stack-preview"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">Engineering stack <span className="eyebrow-line" /></p><h2>The tools<br /><em>behind the work.</em></h2></div><a className="text-link" href="/about">See full toolkit <span>↗</span></a></div><div className="stack-columns">{stacks.map(({ label, icons, technologies }) => <div key={label}><span>{label}</span><div className="stack-brand-icons" aria-label={technologies}>{icons.map((Icon, index) => <Icon key={index} aria-hidden="true" />)}</div><strong>{technologies}</strong></div>)}</div></div></section>;

export default StackPreview;