import { PROJECTS } from "../projects";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <div className="flex-col justify-center font-inter projects m-20">
      <div className="relative z-10 p-6 rounded-lg w-full mx-auto flex justify-center">
        <h3 className="text-[#345678] font-bold xs:text-sm md:text-lg lg:text-2xl">Projects</h3>
      </div>
      <div className="max-w-screen-lg mx-auto">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="bg-white flex justify-between items-center p-6 rounded-lg shadow-md h-auto transition-transform duration-300 transform hover:scale-105 group z-10 w-full mx-auto xs:bg-opacity-80 bg-opacity-60 hover:bg-opacity-80 mb-10"
          >
            {/* Left Section: Project Details */}
            <div className="xs:w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="xs:text-base md:text-xl font-bold text-gray-800">
                {project.name}
              </h3>
              <p className="mt-2 mr-2 xs:text-sm md:text-base text-gray-600">
                {project.description}
              </p>
              <p className="mt-2 mr-2 xs:text-sm md:text-base text-gray-600">
                {project.description_2}
              </p>
              <p className="mt-2 mr-2 xs:text-sm md:text-base text-gray-600">
                <strong>Technology Used: </strong>
                {project.tech_used}
              </p>
              <Stack spacing={2} direction="row" className="mt-4">
                <Button variant="contained" sx={{ background: "black" }}>
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Go Live
                  </a>
                </Button>

                {project.github ? (
                  <Button variant="contained">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <GitHubIcon className="mr-1" /> Link
                    </a>
                  </Button>
                ) : (
                  <>
                    <Button variant="contained">
                      <a
                        href={project.frontend_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <GitHubIcon className="mr-1" /> Frontend
                      </a>
                    </Button>
                    <Button variant="contained">
                      <a
                        href={project.backend_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <GitHubIcon className="mr-1" /> Backend
                      </a>
                    </Button>
                  </>
                )}
              </Stack>
            </div>

            {/* Right Section: Project Image */}
            <div className="md:w-1/2 h-64 flex justify-center items-center">
              <div
                className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${project.project_img})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
