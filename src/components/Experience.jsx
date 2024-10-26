import { EXPERIENCES } from "../resume.js";
import { useState } from "react";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import TabButtonMobile from "./TabButton-Mobile.jsx";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleClick = (position) => {
    const experience = EXPERIENCES.find(
      (exp) => exp.short_position === position
    );
    setSelectedExperience(experience);
  };

  return (
    <div className="flex-col justify-center items-center relative m-5 font-inter">
      <div className="relative z-10 p-6 rounded-lg mx-auto xs:w-full md:w-3/4 bg-white bg-opacity-100 shadow-lg xs:mb-36">
        <Section title="" id="experiences">
          {/* <div className='xs:hidden md:block'>
            <TabButton
              placeholder="Experiences"
              buttonColor="default"
              options={EXPERIENCES.map(
                (experience) => experience.short_position
              )}
              onClick={handleClick}
            />
          </div> */}
          <div className=''>
            <TabButtonMobile
              placeholder="Experiences"
              buttonColor="default"
              options={EXPERIENCES.map(
                (experience) => experience.short_position
              )}
              onClick={handleClick}
            />
          </div>

          {!selectedExperience && (
            <p className="mt-5 xs:text-sm md:text-base">
              Select a previous role to learn more.
            </p>
          )}
          {selectedExperience && (
            <div id="tab-content" className="flex justify-center gap-2 mt-5">
              <div>
                <h3 className="mb-1 xs:text-xs md:text-base">Role:</h3>
                <div>
                  <p className="mb-5 xs:text-xs md:text-base">
                    <span className="italic">
                      {selectedExperience.position}
                    </span>{" "}
                    at{" "}
                    <span className="font-bold">
                      {selectedExperience.company}
                    </span>
                  </p>
                </div>
                <p className="absolute xs:hidden md:text-xs">
                  {selectedExperience.start_date} -{" "}
                  {selectedExperience.end_date}
                </p>
              </div>
              <div>
                <h3 className="mb-1 xs:text-sm md:text-base">Responsibilities:</h3>
                <ul>
                  <li className="m-2 xs:text-xs md:text-base">
                    {selectedExperience.description1}
                  </li>
                  <li className="m-2 xs:text-xs md:text-base">
                    {selectedExperience.description2}
                  </li>
                  <li className="m-2 xs:text-xs md:text-base">
                    {selectedExperience.description3}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Section>
      </div>
    </div>
  );
};

export default Experience;
