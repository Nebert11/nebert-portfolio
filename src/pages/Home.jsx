import React from "react";
import Typical from "react-typical"
import nebImage from "../assets/image/neb.jpg";
import cvPdf from "../assets/NEBERT_KURIA_Frontend_CV.pdf";

const Home = () => {
    return(
        <div id="home" className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-[#023a18] px-4 sm:px-6 md:px-16 pt-24 text-left gap-10 md:gap-0">
            {/*Left Text*/}
            <div className="md:w-1/2 w-full animate-fadeIn" data-aos="fade-right" data-aos-duration="1200">
                <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-200">Hi, I'm <span className="text-blue-800">Nebert Kuria</span></h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-blue-600 mb-4">
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
                {/* inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 text-center */}
                <p className="text-base sm:text-lg text-gray-400 mb-6">I build clean, responsive websites and web apps using modern tech. Let's turn your ideas into elegant digital solutions.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                    <a href="#projects" className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 text-center">View my work</a>
                    <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 text-center">Download CV</a>
                </div>
                
            </div>

            {/*Image Section*/}
            <div className=" w-full flex justify-center animate-fadeIn" data-aos="fade-left" data-aos-duration="1200">
                <img src={nebImage} className="w-60 sm:w-80 md:w-90 lg:w-96 object-contain rounded-full shadow-lg" />
            </div>
        </div>
    )
}

export default Home;
