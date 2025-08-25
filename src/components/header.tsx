import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useThemeMode } from "../theme/themeContext";
import ResumeModal from "./resumeModal";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useExperiences } from "../theme/experiencesContext";
import { useProjects } from "../theme/projectsContext";

const menuItems = [
  { label: "Overview", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

function TheHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const { setPage } = useThemeMode();

  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const { prev: expPrev, next: expNext } = useExperiences();
  const { prev: projPrev, next: projNext } = useProjects();

  const isExperience = location.pathname === "/experience";
  const isProjects = location.pathname === "/projects";

  const prev = isExperience ? expPrev : isProjects ? projPrev : undefined;
  const next = isExperience ? expNext : isProjects ? projNext : undefined;

  const handleNavigation = (path: string) => {
    setSelected(path);
    const page =
      path === "/"
        ? "overview"
        : (path.replace("/", "") as
            | "contact"
            | "overview"
            | "projects"
            | "experience");

    setPage(page);
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
            <div className="absolute left-[95px] -translate-x-1/2 mt-2 w-48 bg-[#100E0F] text-[#E6E1E3] rounded-2xl shadow-lg z-50">
              {menuItems.map((item) => (
                <MenuItem
                  onClick={() => {
                    handleNavigation(item.path);
                    setMenuOpen(false);
                  }}
                  className="hover:bg-gray-700 p-2"
                >
                  {item.label}
                </MenuItem>
              ))}
              <div className="flex justify-end m-2">
                <Button
                  onClick={() => {
                    toggleTheme();
                    setMenuOpen(false);
                  }}
                  variant="contained"
                  style={{
                    width: "49px",
                    height: "49px",
                    minWidth: "40px",
                    padding: "10px",
                    borderRadius: "15px",
                    background: theme.palette.background.paper,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {mode === "dark" ? (
                    <LightModeOutlinedIcon
                      sx={{ color: theme.palette.text.primary }}
                    />
                  ) : (
                    <DarkModeOutlinedIcon
                      sx={{ color: theme.palette.text.primary }}
                    />
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
        <Box sx={{ display: "flex" }}>
          {(isExperience || isProjects) && (
            <Box
              sx={{
                backgroundColor: "#1C1B1D",
                borderRadius: 2,
                display: "flex",
                maxWidth: "100px",
                width: "100px",
                justifyContent: "space-between",
                marginRight: "10px",
              }}
            >
              <IconButton
                onClick={prev}
                sx={{
                  backgroundColor: "#3b3a3dff",
                  borderRadius: 3,
                  width: "40px",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: "#5a595cff",
                  },
                }}
              >
                <ArrowBackIosNewIcon sx={{ color: "#E6E1E3" }} />
              </IconButton>

              <IconButton
                onClick={next}
                sx={{
                  backgroundColor: "#3b3a3dff",
                  borderRadius: 3,
                  width: "40px",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: "#5a595cff",
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ color: "#E6E1E3" }} />
              </IconButton>
            </Box>
          )}

          <ResumeModal />
        </Box>
      </div>
      <div className="hide-on-mobile">
        <Button
          onClick={() => {
            toggleTheme();
            setMenuOpen(false);
          }}
          variant="contained"
          style={{
            width: "49px",
            height: "49px",
            minWidth: "40px",
            padding: "10px",
            borderRadius: "15px",
            background: theme.palette.background.paper,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5px",
          }}
        >
          {mode === "dark" ? (
            <LightModeOutlinedIcon sx={{ color: theme.palette.text.primary }} />
          ) : (
            <DarkModeOutlinedIcon sx={{ color: theme.palette.text.primary }} />
          )}
        </Button>
      </div>
    </header>
  );
}

export default TheHeader;
