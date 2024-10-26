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
          } mx-auto cursor-pointer xs:w-full md:w-3/4`}
          onClick={toggleAboutMe}
        >
          <img
            className="xs:w-20 md:w-30 lg:w-40 my-auto mx-auto rounded-full opacity-85"
            src="https://i.imgur.com/NogPFAa.jpeg"
            alt="Brian"
          />
          {aboutMe ? (
            <h1 className="text-center mb-4 text-[#345678] font-bold xs:text-sm md:text-lg lg:text-2xl">
              About Me
            </h1>
          ) : (
            <h1 className="text-center mb-4 text-[#345678] font-bold xs:text-sm md:text-lg lg:text-2xl underline">
              Learn About Me!
            </h1>
          )}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              aboutMe ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div id="about-me-desc" className="p-2">
              <p className="text-center mb-2 xs:text-sm md:text-base">
                Hi! I’m Brian, a full-stack software developer who enjoys both
                frontend and backend development. I love solving problems, with
                each solution feeling like a Lego piece added to a final
                product.
              </p>
              <p className="text-center mb-2 xs:text-sm md:text-base">
                I began my career as a project manager across various
                industries, including e-discovery, e-commerce, and tech
                companies like LinkedIn. This experience helped me develop
                transferable skills, allowing me to effectively communicate with
                both technical and non-technical stakeholders while
                understanding the importance of turnaround times.
              </p>
              <p className="text-center mb-2 xs:text-sm md:text-base">
                My passion for creativity and problem-solving led me to enroll
                in General Assembly’s immersive software engineering bootcamp,
                where I honed my skills and graduated ready to embark on my
                journey as a software developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
