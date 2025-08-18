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
      text: { primary: "#E6E1E3", secondary: "#301C2C" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#9D6FFF" },
      secondary: { main: "#874B7A" },
      background: { default: "#301C2C", paper: "#874B7A" },
      text: { primary: "#301C2C", secondary: "#E6E1E3" },
    },
  }),
};

export const overviewThemes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0F766E" },
      background: { default: "#ECFDF5", paper: "#D1FAE5" },
      text: { primary: "#064E3B", secondary: "#047857" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#34D399" },
      background: { default: "#064E3B", paper: "#022C22" },
      text: { primary: "#D1FAE5", secondary: "#6EE7B7" },
    },
  }),
};

export const projectsThemes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0F766E" },
      background: { default: "#ECFDF5", paper: "#D1FAE5" },
      text: { primary: "#064E3B", secondary: "#047857" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#34D399" },
      background: { default: "#064E3B", paper: "#022C22" },
      text: { primary: "#D1FAE5", secondary: "#6EE7B7" },
    },
  }),
};

export const experienceThemes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0F766E" },
      background: { default: "#ECFDF5", paper: "#D1FAE5" },
      text: { primary: "#064E3B", secondary: "#047857" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#34D399" },
      background: { default: "#064E3B", paper: "#022C22" },
      text: { primary: "#D1FAE5", secondary: "#6EE7B7" },
    },
  }),
};

const ThemeModeContext = createContext({
  mode: "light" as "light" | "dark",
  page: "overview" as Page,
  toggleTheme: () => {},
  setPage: (page: Page) => {},
});

type Page = "contact" | "overview" | "projects" | "experience";

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
      default:
        return createTheme();
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
