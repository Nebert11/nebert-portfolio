import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const sections = ['home', 'projects', 'about', 'contact'];
        const scrollY = window.scrollY + 200;

        for (let id of sections) {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
                setActiveSection(id);
                break;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {id: 'home', label: 'Home'},
        {id: 'projects', label: 'Projects'},
        {id: 'about', label: 'About'},
        {id: 'portfolio', label: 'Portfolio'},
        {id: 'contact', label: 'Contact'},
    ];
    return(
        <nav className="fixed top-0 w-full text-white shadow-md z-50 bg-[#01574e]">
            <div className=" flex mx-auto justify-between items-center py-4 px-6">
                <h1 className="text-lg font-bold ml-5">nebert</h1>
                <div className="bg-black-500">
                    <ul className="flex space-x-4 mr-5 sc">
                        {navItems.map((item) => (
                            <li key={item.id}> 
                                <a href={`#${item.id}`} className={`hover:text-blue-600 ${activeSection === item.id ? "text-blue-600 font-semibold" : ""}`}>
                                {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
)
}

export default Navbar;