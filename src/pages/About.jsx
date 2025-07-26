import React from "react";

const About = () => {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center px-4">
            <h1 className="text-gray-200 font-bold text-3xl">About Me</h1>
            <h3 className="text-gray-300 font-semibold text-2xl">Full Stack Developer based in Kenya</h3>
            <p className="mt-4 max-w-2xl text-center text-gray-600">I am a passionate IT Support Specialist and Full Stack Web developer with a love creating impactful digital solutions. 
                Skilled in IT software and network support with 2 years experience gained through attachment, and an internship. Also skilled in MERN
                stack development, I aim  to build user friendly and efficient websites and web applications.
            </p>

            <div className="flex space-x-4">
                <p className="text-white">
                    <strong className="text-black">Name: </strong> 
                    Nebert Ngari
                </p>
                <p className="text-white">
                    <strong className="text-black">Email: </strong> 
                    ngarinebert2020@gmail.com
                </p>
            </div>

            <div className="flex space-x-4">
                <p className="text-white">
                    <strong className="text-black">Phone: </strong> 
                    0769232512
                </p>
                <p className="text-white">
                    <strong className="text-black">Linkedln: </strong> 
                    ngarinebert2020@gmail.com
                </p>
            </div>
        </div>
    )
}

export default About;