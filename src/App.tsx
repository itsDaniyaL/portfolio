import { create } from "domain";
import "./App.css";
import TheHeader from "./components/header";
import Overview from "./components/overview";
import { createTheme, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Projects from "./components/projects";
import Experiences from "./components/experiences";
import Contact from "./components/contact";
import { ExperiencesProvider } from "./theme/experiencesContext";
import { ProjectsProvider } from "./theme/projectsContext";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6715B9",
    },
  },
});

export default function App() {
  const [mode, setMode] = useState("dark");

  // Memoize the theme to prevent unnecessary re-renders
  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );

  return (
    <ExperiencesProvider>
      <ProjectsProvider>
        <ThemeProvider theme={theme} defaultMode="system">
          <div className="main-page">
            <BrowserRouter>
              <TheHeader />
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="overview" element={<Overview />}></Route>
                <Route path="projects" element={<Projects />}></Route>
                <Route path="experience" element={<Experiences />}></Route>
                <Route path="contact" element={<Contact />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </ProjectsProvider>
    </ExperiencesProvider>
  );
}
