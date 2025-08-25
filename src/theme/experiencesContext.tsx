import { createContext, useContext, useState } from "react";

type ExperiencesContextType = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  next: () => void;
  prev: () => void;
};

const ExperiencesContext = createContext<ExperiencesContextType | null>(null);

export const ExperiencesProvider = ({
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
    <ExperiencesContext.Provider
      value={{ activeIndex, setActiveIndex, next, prev }}
    >
      {children}
    </ExperiencesContext.Provider>
  );
};

export const useExperiences = () => {
  const ctx = useContext(ExperiencesContext);
  if (!ctx)
    throw new Error("useExperiences must be used inside ExperiencesProvider");
  return ctx;
};
