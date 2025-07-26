import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 sm:px-8 text-center sm:text-left">
      <h1 className="text-gray-200 font-bold text-2xl sm:text-3xl mb-2">About Me</h1>
      <h3 className="text-gray-300 font-semibold text-xl sm:text-2xl mb-4">
        Full Stack Developer based in Kenya
      </h3>
      <p className="max-w-2xl text-gray-300 text-sm sm:text-base leading-relaxed">
        I am a passionate IT Support Specialist and Full Stack Web developer with a love for creating impactful digital
        solutions. Skilled in IT software and network support with 2 years of experience gained through attachment and
        internship. Also skilled in MERN stack development, I aim to build user-friendly and efficient websites and
        web applications.
      </p>

      <div className="mt-6 space-y-4 w-full max-w-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="text-white text-sm sm:text-base">
            <strong className="text-gray-400">Name:</strong> Nebert Ngari
          </p>
          <p className="text-white text-sm sm:text-base">
            <strong className="text-gray-400">Email:</strong> ngarinebert2020@gmail.com
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="text-white text-sm sm:text-base">
            <strong className="text-gray-400">Phone:</strong> +254769232512
          </p>
          <p className="text-white text-sm sm:text-base">
            <strong className="text-gray-400">LinkedIn:</strong> ngarinebert2020@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
