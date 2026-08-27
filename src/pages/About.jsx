import React from "react";
import { ArrowUpRight, Brackets, Server, Smartphone } from "lucide-react";

const About = () => <div className="about section-wrap section-pad">
  <div className="section-heading" data-aos="fade-up"><div><p className="eyebrow">A little context <span className="eyebrow-line" /></p><h2>Frontend instincts.<br /><em>Systems mindset.</em></h2></div><p className="section-intro">I like working where thoughtful interface design meets dependable technology.</p></div>
  <div className="about-grid" data-aos="fade-up"><div className="about-copy"><p>I’m a passionate IT Support Specialist and Frontend Web Developer based in Kenya. With experience in user support, network administration, and building with React and Tailwind CSS, I’m growing toward the kind of full-stack role where I can own problems end to end.</p><a className="text-link" href="mailto:ngarinebert2020@gmail.com">Start a conversation <ArrowUpRight size={15} /></a></div><div className="about-facts"><div><span>Based in</span><strong>Nairobi, Kenya</strong></div><div><span>Focus</span><strong>Frontend → Backend → Product</strong></div><div><span>Currently learning</span><strong>Better systems, better UX</strong></div></div></div>
  <div className="discipline-grid"><div><Brackets size={19} /><span>Interface craft</span><small>React, JavaScript, Tailwind CSS</small></div><div><Server size={19} /><span>Backend thinking</span><small>PHP, Laravel, Lumen, REST APIs</small></div><div><Smartphone size={19} /><span>Beyond the browser</span><small>Flutter, PWA, practical support</small></div></div>
</div>;
export default About;
