import { EXPERIENCES } from "../resume.js";
import { useState } from "react";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleClick = (position) => {
    const experience = EXPERIENCES.find((exp) => exp.short_position === position);
    setSelectedExperience(experience);
  };

  return (
    <div className="flex-col justify-center items-center relative m-5 font-inter">

      <div className="relative z-10 p-6 rounded-lg w-1/2 mx-auto bg-white bg-opacity-60 transition-all duration-300 shadow-lg hover:bg-opacity-80 max-w-screen-lg">
        <Section title="" id="experiences">
          <TabButton
            placeholder="Experiences"
            buttonColor="default"
            options={EXPERIENCES.map((experience) => experience.short_position)}
            onClick={handleClick}
          />

          {!selectedExperience && (
            <p className="mt-5">Select a previous role to learn more.</p>
          )}
          {selectedExperience && (
            <div id="tab-content" className="flex justify-center gap-2 mt-5">
              <div>
                <h3 className="mb-1">Role:</h3>
                <div>
                  <p className="mb-5 text-base">
                    <span className='italic'>{selectedExperience.position}</span>
                    {" "}at{" "}
                    <span className="font-bold">
                      {selectedExperience.company}
                    </span>
                  </p>
                </div>
                <p className="absolute text-xs">
                  {selectedExperience.start_date} -{" "}
                  {selectedExperience.end_date}
                </p>
              </div>
              <div>
                <h3>Responsibilities:</h3>
                <ul>
                  <li className="m-2">{selectedExperience.description1}</li>
                  <li className="m-2">{selectedExperience.description2}</li>
                  <li className="m-2">{selectedExperience.description3}</li>
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
