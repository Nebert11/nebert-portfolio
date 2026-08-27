import React from "react";
import nebImage from "../assets/image/neb.jpg";
import cvPdf from "../assets/NEBERT_KURIA_Frontend_CV.pdf";
import { ArrowDownRight, ArrowUpRight, Code2, MapPin, Radio } from "lucide-react";

const Home = () => {
    return(
        <div className="hero section-wrap">
            <div className="hero-copy" data-aos="fade-up">
                <p className="eyebrow"><span className="status-dot" /> Available for opportunities <span className="eyebrow-line" /></p>
                <h1>Software engineer building <em>digital products</em> people use.</h1>
                <p className="hero-lede">I’m Nebert Kuria, a Kenya-based engineer working across frontend, backend, and product development. I care about clear interfaces, useful systems, and the details that make software feel finished.</p>
                <div className="hero-actions">
                    <a className="button button-primary" href="#projects">View selected work <ArrowUpRight size={16} /></a>
                    <a className="text-link" href={cvPdf}>Download resume <ArrowDownRight size={16} /></a>
                </div>
            </div>
            <div className="hero-visual" data-aos="fade-left" data-aos-delay="150">
                <div className="visual-grid" />
                <div className="portrait-frame"><img src={nebImage} alt="Nebert Kuria" /></div>
                <div className="code-card"><div><Code2 size={14} /><span>build-log.js</span><span className="code-dots">•••</span></div><pre><code><span>const</span> focus = [<i>"UI"</i>, <i>"APIs"</i>, <i>"impact"</i>];{"\n"}<span>return</span> focus.map(build);</code></pre></div>
                <div className="location-chip"><MapPin size={14} /> Nairobi, KE</div>
                <div className="signal-chip"><Radio size={13} /> open to build</div>
            </div>
            <a href="#projects" className="scroll-cue" aria-label="Scroll to selected work">Scroll to explore <ArrowDownRight size={17} /></a>
        </div>
    )
}

export default Home;
