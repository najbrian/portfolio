import { PROJECTS } from "../projects";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <div className="flex-col justify-center font-inter projects xs:m-4 md:m-20">
      <div className="relative z-10 p-6 rounded-lg mx-auto flex justify-center">
        <h3 className="text-[#345678] font-bold xs:text-lg md:text-2xl">
          Projects
        </h3>
      </div>
      <div className="w-full">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="bg-white flex flex-col md:flex-row items-center gap-3 p-6 rounded-lg shadow-md transition-transform duration-300 transform mb-10"
          >
            {/* Project Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center pr-2">
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
                    className="text-white text-xs"
                  >
                    Go Live
                  </a>
                </Button>
                {project.github ? (
                  <Button
                    variant="contained"
                    sx={{ fontSize: { xs: "0.66rem", md: "1rem" } }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xs"
                    >
                      <GitHubIcon
                        className="mr-1"
                        sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}
                      />{" "}
                      Link
                    </a>
                  </Button>
                ) : (
                  <>
                    <Button variant="contained">
                      <a
                        href={project.frontend_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xs"
                      >
                        <GitHubIcon
                          className="mr-1"
                          sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}
                        />{" "}
                        Frontend
                      </a>
                    </Button>
                    <Button variant="contained">
                      <a
                        href={project.backend_github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-xs"
                      >
                        <GitHubIcon
                          className="mr-1"
                          sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}
                        />{" "}
                        Backend
                      </a>
                    </Button>
                  </>
                )}
              </Stack>
            </div>

            {/* Project Image */}
            <div className="md:w-1/2 h-72 mx-auto flex justify-center items-center xs:hidden md:block">
              <div
                className="w-full h-full bg-center bg-cover rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${project.project_img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
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
