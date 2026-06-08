import "./App.css";
import TheHeader from "./components/header";
import Overview from "./components/overview";
import { HashRouter, Route, Routes, useLocation } from "react-router";
import Projects from "./components/projects";
import Experiences from "./components/experiences";
import { ExperiencesProvider } from "./theme/experiencesContext";
import { ProjectsProvider } from "./theme/projectsContext";
import PrivacyPolicy from "./components/privacyPolicy";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Overview /></PageTransition>} />
        <Route path="overview" element={<PageTransition><Overview /></PageTransition>} />
        <Route path="projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="experience" element={<PageTransition><Experiences /></PageTransition>} />
        <Route path="privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ExperiencesProvider>
      <ProjectsProvider>
        <div className="main-page h-screen flex flex-col">
          <HashRouter>
            <TheHeader />
            <AnimatedRoutes />
          </HashRouter>
        </div>
      </ProjectsProvider>
    </ExperiencesProvider>
  );
}
