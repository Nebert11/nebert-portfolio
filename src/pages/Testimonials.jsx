import React from "react";
import userImage from "../assets/image/user.png";
import laurenceImage from "../assets/image/laurence.JPG";

const Testimonials = () => {
  return (
    <section className="py-10">
      <h1 className="text-gray-200 font-bold text-2xl text-center mb-6">Testimonials</h1>
      
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 max-w-6xl mx-auto px-4">
        
        {/* Testimonial 1 */}
        <div className="flex bg-[#01574e] shadow-md rounded-lg p-4 w-full">
          <img src={laurenceImage} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" alt="Laurence" />
          <p className="text-gray-300 text-sm sm:text-base">
            It is my pleasure to recommend Nebert Ngari, a dedicated and resourceful ICT professional with significant exposure to 
            systems and network administration, user support, and IT service management.
            <br />
            <span className="text-gray-900 text-sm font-semibold block mt-2">
              Laurence Asitwa – Senior Officer, ICT Support <br />
              Ol Pejeta Conservancy
            </span>
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="flex bg-[#01574e] shadow-md rounded-lg p-4 w-full">
          <img src={userImage} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" alt="Alex" />
          <p className="text-gray-300 text-sm sm:text-base">
            Nebert is a proactive team player with excellent communication skills, making him a valuable collaborator on any project. 
            His ability to build strong relationships with colleagues and provide support where needed has enhanced our team's effectiveness.
            <br />
            <span className="text-gray-900 text-sm font-semibold block mt-2">
              Alex Kariuki – ICT Manager <br />
              Nyahururu County Referral Hospital
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
