import * as React from "react";
import { HashLink } from "react-router-hash-link";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import InfoIcon from "@mui/icons-material/Info";
import ConstructionIcon from "@mui/icons-material/Construction";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const actions = [
    { icon: <InfoIcon />, name: "About Me", path: "#about" },
    { icon: <ConstructionIcon />, name: "Projects", path: "#projects" },
    { icon: <ConnectWithoutContactIcon />, name: "Contact", path: "#contact" },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <SpeedDial
        ariaLabel="Navigation menu"
        sx={{ position: "absolute", top: 16, right: 16 }}
        icon={
          <Box
            sx={{
              transition: "transform 0.3s ease",
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </Box>
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            component={HashLink}
            smooth
            to={action.path}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default NavBar;
