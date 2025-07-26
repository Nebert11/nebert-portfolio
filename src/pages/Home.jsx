import React from "react";
import Typical from "react-typical"
import nebImage from "../assets/image/neb.jpg";

const Home = () => {
    return(
        <div id="home" className="h-screen flex flex-col md:flex-row justify-between items-center bg-[#023a18] px-6 md:px-16 pt-24 text-left px-4">
            {/*Left Text*/}
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn" data-aos="fade-right" data-aos-duration="1200">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-200">Hi, I'm <span className="text-blue-800">Nebert Kuria</span></h1>
                <h2 className="text-xl md:text-2xl text-blue-600 mb-4">
                    <Typical 
                        steps={[
                            "ICT Professional", 5000,
                            "Full Stack Developer", 5000,
                            "Web designer", 5000
                        ]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h2> 
                <p className="mt-4 text-lg text-gray-400 mb-6">I build clean, responsive websites and web apps using modern tech. Let''s turn your ideas into elegant digital solutions.</p>
                <a href="#projects" className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300">View my work</a>
                <a href="#" className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md ml-5 hover:bg-blue-600 hover:text-white transition-all duration-300">Download CV</a>
            </div>

            {/*Image Section*/}
            <div className="flex justify-center animate-fadeIn" data-aos="fade-left" data-aos-duration="1200">
                <img src={nebImage} className="w-64 md:w-96 mr-20 object-contain rounded-full shadow-lg" />
            </div>
        </div>
    )
}

export default Home;