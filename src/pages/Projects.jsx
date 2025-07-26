import React from "react";

const projects = [
    {
        title: "MindEase",
        description: "Mindease is a platform for people who want mental help but cannot access it due to distance or lack financial stability. It provides access to a mental health AI chatbot and easy access to therapists.",
        button:<a href="https://mindease-two-iota.vercel.app/">Explore</a>,
        delay:0,
    },
    {
        title: "Germinia School",
        description:"Germinia School is an online Learning Module System for learning german language. It offers an environment for studying as per the student's flexibility and  as per the tutors scheduled online classes.",        
        button:<a href="#">Explore</a>,
        delay:100,
    },
    {
        title: "FoodEx",
        description:"Foodex is a website that allows users to order meat, veggetables, and fruits at the comfort of their home. Foodex sends an order notification to the owners for delivery and the order is processed and delivered fast.",
        button:<a href="#">Explore</a>,
        delay:200,
    },
    {
        title: "Security & Networking",
        description: "Network infrastructure installation at Ol Pejeta Conservancy new security camp. I did a survey and designed the cable tracks and and the position of the CCTV cameras. I afterwards did the installations.",
        button:<a href="#">Explore</a>,
        delay:300,
    }
]

const Projects = () => {

    return (
        <div className="min-h-screen bg-gray-200 px-4 py-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">Projects</h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={project.delay}
                        className="bg-white shadow-md p-6 rounded-lg w-80 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <h3 className="text-xl font-semibold text-blue-700">{project.title}</h3>
                        <p className="mt-3 text-gray-600">{project.description}</p>
                        <button className=" p-2 bg-blue-500 rounded-lg font-bold text-white hover:bg-sky-400 cursor-pointer">{project.button}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;