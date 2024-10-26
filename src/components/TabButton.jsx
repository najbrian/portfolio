import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup"; // This will not be needed anymore
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // This can be removed
import Paper from "@mui/material/Paper"; // This will not be needed anymore
import ClickAwayListener from "@mui/material/ClickAwayListener"; // This will not be needed anymore

const TabButton = ({ options, onClick, placeholder, buttonColor = 'primary' }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    onClick(option);
  };

  return (
    <div className="flex space-x-2"> {/* Add space between buttons */}
      {options.map((option) => (
        <Button
          key={option}
          variant="contained"
          onClick={() => handleButtonClick(option)}
          className={selectedOption === option ? 'bg-opacity-80' : ''} // Optional: Change style for selected button
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default TabButton;
