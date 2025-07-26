import React from "react";
import userImage from "../assets/image/user.png";
import laurenceImage from "../assets/image/laurence.JPG";

const Testimonials = () => {

    return(
        <section>
            <h1 className="text-gray-200 font-bold text-center">Testimonials</h1>
            <div className="flex space-x-4 w-[950px] items-center overflow-hidden mx-auto mb-4 mt-4">
                <div className="flex bg-[#01574e] shadow-md rounded-lg w-120">
                    <img src={laurenceImage} className="w-8 h-9 rounded-full m-2" />
                    <p className=" text-gray-300 m-2">It is my pleasure to recommend Nebert Ngari, a dedicated and resourceful ICT professional with significant exposure to 
                        systems and network administration, user support, and IT service management. 
                        <br />
                        <span className="text-gray-900 text-sm">Laurence Asitwa-Senior Oficer-ICT Support <br/>Ol Pejeta Conservancy</span>
                    </p>
                    
                </div>

                <div className="flex bg-[#01574e] shadow-md rounded-lg w-120">
                    <img src={userImage} className="w-8 h-9 rounded-full m-2" />
                    <p className="text-gray-300 m-2">Nebert is a proactive team player with excelent communication skills, making him a valuable collaborator on any project. 
                        His ability to build strong relationships with colleagues and provide support where needed has enhanced our team's effectiveness.
                        <br />
                        <span className="text-gray-900 text-sm">Alex Kariuki-ICT Manager <br/>Nyahururu County Referral Hospital</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;