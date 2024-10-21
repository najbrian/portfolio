import { EXPERIENCES } from "../resume.js";
import { useState } from "react";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import { Box, Typography, Paper } from "@mui/material";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleClick = (position) => {
    const experience = EXPERIENCES.find((exp) => exp.short_position === position);
    setSelectedExperience(experience);
  };

  return (
    <Box
      className="flex-col justify-center items-center relative"
      sx={{ m: 5, fontFamily: 'Inter' }}
    >
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          zIndex: 10,
          p: 6,
          borderRadius: '16px',
          width: {
            xs: '90%',   // Adjust for smaller screens
            sm: '75%',   // For small screens
            md: '50%',   // For medium screens
            lg: '40%',   // For large screens
          },
          mx: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // White with opacity
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          },
        }}
      >
        <Section title="" id="experiences">
          <TabButton
            placeholder="Experiences"
            buttonColor="default"
            options={EXPERIENCES.map((experience) => experience.short_position)}
            onClick={handleClick}
          />

          {!selectedExperience && (
            <Typography
              variant="body2"
              sx={{ mt: 5, fontSize: { xs: '0.875rem', md: '1rem' } }}
            >
              Select a previous role to learn more.
            </Typography>
          )}

          {selectedExperience && (
            <Box id="tab-content" display="flex" justifyContent="center" gap={2} sx={{ mt: 5 }}>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, fontSize: { xs: '0.875rem', md: '1rem' } }}
                >
                  Role:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 5, fontSize: { xs: '0.875rem', md: '1rem' } }}
                >
                  <span className='italic'>{selectedExperience.position}</span> at{" "}
                  <span className="fontBold">{selectedExperience.company}</span>
                </Typography>
                <Typography variant="caption" sx={{ position: 'absolute' }}>
                  {selectedExperience.start_date} - {selectedExperience.end_date}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">Responsibilities:</Typography>
                <ul>
                  <li>
                    <Typography sx={{ m: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                      {selectedExperience.description1}
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ m: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                      {selectedExperience.description2}
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ m: 2, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                      {selectedExperience.description3}
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
          )}
        </Section>
      </Paper>
    </Box>
  );
};

export default Experience;
