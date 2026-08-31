import React, { useState } from "react";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import ContactPreview from "./Contact";

const ContactPage = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	if (["/", "/home"].includes(window.location.pathname.replace(/\/$/, "") || "/")) {
		return <ContactPreview />;
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
		const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
		window.location.href = `mailto:ngarinebert2020@gmail.com?subject=${subject}&body=${body}`;
	};

	return <main className="contact-page"><div className="section-wrap section-pad contact-layout"><div className="contact-inner"><p className="eyebrow">Start a conversation <span className="eyebrow-line" /></p><h1>Have something<br /><em>worth building?</em></h1><p>Tell me what you’re working on. I’m interested in thoughtful products, useful systems, and teams that care about the details.</p><div className="contact-links"><a href="mailto:ngarinebert2020@gmail.com"><Mail size={16} /> ngarinebert2020@gmail.com</a><a href="https://www.linkedin.com/in/nebert-ngari-3b946a234/"><Linkedin size={16} /> LinkedIn</a></div></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Your name</label><input id="name" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" autoComplete="name" required /><label htmlFor="email">Your email</label><input id="email" name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" autoComplete="email" required /><label htmlFor="message">Your message</label><textarea id="message" name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me about your project" required /><button className="button button-primary" type="submit">Send message <ArrowUpRight size={16} /></button></form></div></main>;
};
export default ContactPage;
