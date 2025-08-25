import { createContext, useContext, useState } from "react";

type ProjectsContextType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  next: () => void;
  prev: () => void;
};

const ProjectsContext = createContext<ProjectsContextType | null>(null);

export const ProjectsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const boxes = [0, 1, 2];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % boxes.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + boxes.length) % boxes.length);
  };

  return (
    <ProjectsContext.Provider
      value={{ activeIndex, setActiveIndex, next, prev }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error("useProjects must be used inside ProjectsProvider");
  return ctx;
};
