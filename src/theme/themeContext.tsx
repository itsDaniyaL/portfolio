import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const contactThemes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#874B7A" },
      secondary: { main: "#DEC4D8" },
      background: { default: "#FFE9FA", paper: "#DEC4D8" },
      text: { primary: "#301C2C", secondary: "#5D3C56" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#9D6FFF" },
      secondary: { main: "#874B7A" },
      background: { default: "#301C2C", paper: "#4A2B45" },
      text: { primary: "#E6E1E3", secondary: "#DEC4D8" },
    },
  }),
};

export const overviewThemes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0F766E" },
      background: { default: "#F0EFE6", paper: "#FFFFFF" },
      text: { primary: "#1A1A1A", secondary: "#4A4A4A" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#34D399" },
      background: { default: "#141314", paper: "#1C1B1D" },
      text: { primary: "#E6E1E3", secondary: "#A09A9D" },
    },
  }),
};

// paper = card background, default = inner panel / page bg
export const projectsThemes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0F766E" },
      background: { default: "#E8F5E9", paper: "#C8E6C9" },
      text: { primary: "#1B5E20", secondary: "#388E3C" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#34D399" },
      background: { default: "#1D221D", paper: "#384739" },
      text: { primary: "#E6E1E3", secondary: "#6EE7B7" },
    },
  }),
};

// paper = card background, default = inner panel / page bg
export const experienceThemes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0F766E" },
      background: { default: "#DDF7FF", paper: "#A8DFF0" },
      text: { primary: "#004D5A", secondary: "#006B7E" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#34D399" },
      background: { default: "#1C2B30", paper: "#2A444C" },
      text: { primary: "#E6E1E3", secondary: "#B2EBF2" },
    },
  }),
};

export const privacyThemes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0F766E" },
      background: { default: "#F5F5F5", paper: "#FFFFFF" },
      text: { primary: "#1A1A1A", secondary: "#4A4A4A" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#34D399" },
      background: { default: "#171719", paper: "#1E1E21" },
      text: { primary: "#E6E1E3", secondary: "#A09A9D" },
    },
  }),
};

const ThemeModeContext = createContext({
  mode: "light" as "light" | "dark",
  page: "overview" as Page,
  toggleTheme: () => {},
  setPage: (page: Page) => {},
});

type Page =
  | "contact"
  | "overview"
  | "projects"
  | "experience"
  | "privacy-policy";

export const useThemeMode = () => useContext(ThemeModeContext);

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [page, setPage] = useState<Page>("overview");

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", next);
      return next;
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem("themeMode");
    if (saved === "light" || saved === "dark") setMode(saved);
  }, []);

  // Keep Tailwind's dark class in sync so dark: variants work on pages like Privacy Policy
  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const theme = useMemo(() => {
    switch (page) {
      case "contact":
        return contactThemes[mode];
      case "overview":
        return overviewThemes[mode];
      case "projects":
        return projectsThemes[mode];
      case "experience":
        return experienceThemes[mode];
      case "privacy-policy":
        return privacyThemes[mode];
      default:
        return overviewThemes[mode];
    }
  }, [mode, page]);

  return (
    <ThemeModeContext.Provider value={{ mode, page, toggleTheme, setPage }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
