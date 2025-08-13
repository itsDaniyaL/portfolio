import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const menuItems = [
  { label: "Overview", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

function TheHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleNavigation = (path: string) => {
    setSelected(path);
    navigate(path);
  };

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header
      style={{
        display: "flex",
        margin: "5px 10px",
        position: "absolute",
        width: "-webkit-fill-available",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          background: "#100E0F",
          borderRadius: "15px",
          justifyContent: "space-between",
          padding: "5px",
          marginRight: "5px",
        }}
      >
        <Box className="hidden md:flex space-x-2">
          {menuItems.map((item) => (
            <Box
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor:
                  selected === item.path ? "#1C1B1D" : "transparent",
                "&:hover": {
                  backgroundColor: "#2C2B2D",
                },
              }}
            >
              <Typography sx={{ color: "#E6E1E3", m: 0, px: 2 }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>

        <div className="md:hidden">
          <IconButton onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon className="text-white" />
          </IconButton>
          {menuOpen && (
            <div className="absolute left-[106px] -translate-x-1/2 mt-2 w-48 bg-[#100E0F] text-[#E6E1E3] rounded-2xl shadow-lg z-50">
              <MenuItem
                onClick={() => setMenuOpen(false)}
                className="hover:bg-gray-700 p-2"
              >
                Overview
              </MenuItem>
              <MenuItem
                onClick={() => setMenuOpen(false)}
                className="hover:bg-gray-700 p-2"
              >
                Projects
              </MenuItem>
              <MenuItem
                onClick={() => setMenuOpen(false)}
                className="hover:bg-gray-700 p-2"
              >
                Experience
              </MenuItem>
              <MenuItem
                onClick={() => setMenuOpen(false)}
                className="hover:bg-gray-700 p-2"
              >
                Contact
              </MenuItem>
              <div className="flex justify-end m-2">
                <Button
                  variant="contained"
                  style={{
                    width: "49px",
                    height: "49px",
                    minWidth: "40px",
                    padding: "10px",
                    borderRadius: "15px",
                    background: "#1C1B1D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LightModeOutlinedIcon />
                </Button>
              </div>
            </div>
          )}
        </div>
        <Button
          variant="contained"
          style={{
            textTransform: "none",
            padding: "0 15px",
            borderRadius: "12px",
            background: "#6715B9",
          }}
        >
          Resume
        </Button>
      </div>
      <div className="hide-on-mobile">
        <Button
          variant="contained"
          style={{
            width: "49px",
            height: "49px",
            minWidth: "40px",
            padding: "10px",
            borderRadius: "15px",
            background: "#100E0F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LightModeOutlinedIcon />
        </Button>
      </div>
    </header>
  );
}

export default TheHeader;
