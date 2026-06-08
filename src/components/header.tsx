import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { alpha } from "@mui/material/styles";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useThemeMode } from "../theme/themeContext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useExperiences } from "../theme/experiencesContext";
import { useProjects } from "../theme/projectsContext";

const menuItems = [
  { label: "Overview", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Privacy & Policy", path: "/privacy-policy" },
];

function TheHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const { mode, toggleTheme, setPage } = useThemeMode();

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
            | "experience"
            | "privacy-policy");

    setPage(page);
    navigate(path);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
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
          background: theme.palette.background.paper,
          borderRadius: "15px",
          justifyContent: "space-between",
          padding: "5px",
          transition: "background 0.3s ease",
        }}
      >
        {/* Desktop nav */}
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
                  selected === item.path
                    ? alpha(theme.palette.text.primary, 0.15)
                    : "transparent",
                "&:hover": {
                  backgroundColor: alpha(theme.palette.text.primary, 0.08),
                },
                transition: "background-color 0.2s ease",
              }}
            >
              <Typography
                sx={{ color: theme.palette.text.primary, m: 0, px: 2 }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Mobile hamburger + dropdown */}
        <div className="md:hidden">
          <IconButton onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
          {menuOpen && (
            <div
              className="absolute left-[95px] -translate-x-1/2 mt-2 w-48 rounded-2xl shadow-lg z-50"
              style={{
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => {
                    handleNavigation(item.path);
                    setMenuOpen(false);
                  }}
                  sx={{
                    color: theme.palette.text.primary,
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.text.primary, 0.08),
                    },
                  }}
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
                    background: theme.palette.background.default,
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

        {/* Prev/Next arrows for projects and experience */}
        <Box sx={{ display: "flex" }}>
          {(isExperience || isProjects) && (
            <Box
              sx={{
                backgroundColor: alpha(theme.palette.text.primary, 0.1),
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
                  backgroundColor: alpha(theme.palette.text.primary, 0.15),
                  borderRadius: 3,
                  width: "40px",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.text.primary, 0.3),
                  },
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{ color: theme.palette.text.primary }}
                />
              </IconButton>

              <IconButton
                onClick={next}
                sx={{
                  backgroundColor: alpha(theme.palette.text.primary, 0.15),
                  borderRadius: 3,
                  width: "40px",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.text.primary, 0.3),
                  },
                }}
              >
                <ArrowForwardIosIcon
                  sx={{ color: theme.palette.text.primary }}
                />
              </IconButton>
            </Box>
          )}
        </Box>
      </div>

      {/* Theme toggle button (desktop) */}
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
            background: theme.palette.background.default,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5px",
            transition: "background 0.3s ease",
          }}
        >
          {mode === "dark" ? (
            <LightModeOutlinedIcon sx={{ color: theme.palette.text.primary }} />
          ) : (
            <DarkModeOutlinedIcon sx={{ color: theme.palette.text.primary }} />
          )}
        </Button>
      </div>
    </motion.header>
  );
}

export default TheHeader;
