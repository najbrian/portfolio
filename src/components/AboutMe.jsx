import * as React from "react";
import { useState } from "react";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(false);

  const toggleAboutMe = () => {
    setAboutMe((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center items-center relative m-5">
        <div
          className={`relative z-10 p-6 transition-all duration-300 rounded-xl ${
            aboutMe ? "bg-white shadow-lg" : "bg-none"
          } lg:w-1/2 mx-auto bg-opacity-80 cursor-pointer`}
          onClick={toggleAboutMe}
        >
          <img
            className="xs:w-20 md:w-30 lg:w-40 my-auto mx-auto rounded-full opacity-85"
            src="https://i.imgur.com/NogPFAa.jpeg"
            alt="Brian"
          />
          {aboutMe ? (
            <h1 className="text-center mb-4 text-[#345678] font-bold xs:text-sm md:text-lg lg:text-2xl">About Me</h1>
          ) : (
            <h1 className="text-center mb-4 text-[#345678] font-bold xs:text-sm md:text-lg lg:text-2xl">Learn About Me!</h1>
          )}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              aboutMe ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div id="about-me-desc" className="p-2">
              <p className="mb-2 xs:text-sm md: text-base">
                Hello! I'm Brian, and I am a full-stack software developer. Why
                full stack? Because I enjoy frontend development just as much as
                backend development! I love solving problems, and each solution
                is like adding a Lego piece to the final product.
              </p>
              <p className="mb-2 xs:text-sm md: text-base">
                I started my career as a project/program manager in various
                industries, including e-discovery, e-commerce, and tech
                companies such as LinkedIn. During my time as a PM, I acquired
                many skills that are transferable to the world of coding. With
                my experience on the business side, I understand how crucial
                turnaround time is, how to have meaningful and efficient
                conversations about jobs to be done, and how to communicate
                effectively with both technical and non-technical stakeholders.
              </p>
              <p className="mb-2 xs:text-sm md: text-base">
                After my years in program management, I realized that I truly
                have a passion for creativity and problem-solving. I enjoy being
                challenged, testing my limits, and constantly learning. I love
                experimenting, discovering what works and what doesn’t, learning
                from my peers, and witnessing how their creativity shines.
              </p>
              <p className="mb-2 xs:text-sm md: text-base">
                This realization led me to invest in myself by enrolling in
                General Assembly's three-month immersive software engineering
                bootcamp. I successfully graduated and am now looking to start
                my journey as a software developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
