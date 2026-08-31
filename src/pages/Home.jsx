import React from "react";
import nebImage from "../assets/image/neb.jpg";
import { ArrowDownRight, ArrowUpRight, Code2, Database, Download, Figma, GitBranch, Layers3, MapPin, Radio, Smartphone, Zap } from "lucide-react";

const Home = () => {
    return(
        <div className="hero section-wrap">
            <div className="hero-copy" data-aos="fade-up">
                <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
                <h1>Hi, I’m <em>Nebert</em><br />Software Engineer</h1>
                <p className="hero-lede">I build modern, responsive and accessible web applications that solve real problems and create exceptional experiences.</p>
                <div className="hero-actions">
                    <a className="button button-primary" href="/projects">View my work <ArrowUpRight size={16} /></a>
                    <a className="button button-outline" href="/assets/NEBERT_KURIA_Frontend_CV.pdf">Download CV <Download size={15} /></a>
                </div>
                <div className="hero-stack"><span>Tech stack</span><div className="stack-icons"><span title="React"><Layers3 size={19} /></span><span title="Next.js"><Code2 size={18} /></span><span title="TypeScript"><GitBranch size={18} /></span><span title="Tailwind CSS"><Zap size={18} /></span><span title="JavaScript"><span className="js-mark">JS</span></span><span title="PHP"><span className="php-mark">php</span></span><span title="Laravel"><Figma size={18} /></span><span title="MySQL"><Database size={18} /></span></div></div>
            </div>
            <div className="hero-visual" data-aos="fade-left" data-aos-delay="150">
                <div className="visual-grid" />
                <div className="portrait-frame"><img src={nebImage} alt="Nebert Kuria" /></div>
                <div className="capability-card capability-code"><Code2 size={19} /><strong>Clean Code</strong><span>Scalable<br />Maintainable<br />Performance Focused</span></div>
                <div className="capability-card capability-mobile"><Smartphone size={17} /><strong>Mobile First</strong><span>Responsive<br />Accessible<br />User Centered</span></div>
                <div className="capability-card capability-performance"><Zap size={18} /><strong>Performance</strong><span>Optimized<br />Fast Loading<br />Best Practices</span></div>
                <div className="capability-card capability-solver"><Layers3 size={17} /><strong>Problem Solver</strong><span>Analytical<br />Creative<br />Detail Oriented</span></div>
                <div className="location-chip"><MapPin size={14} /> Nairobi, KE</div>
                <div className="signal-chip"><Radio size={13} /> open to build</div>
            </div>
            <a href="/projects" className="scroll-cue" aria-label="View projects">Explore the work <ArrowDownRight size={17} /></a>
        </div>
    )
}

export default Home;
