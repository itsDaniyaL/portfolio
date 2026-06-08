import {
  Box,
  SvgIcon,
  SvgIconProps,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { useExperiences } from "../theme/experiencesContext";
import { useThemeMode } from "../theme/themeContext";
import experiencesData from "../data/experiences.json";
import { brandsFor, Brand } from "../data/iconRegistry";

// Small helper so every brand icon renders crisply via MUI
const BrandSvg: React.FC<{ brand: Brand } & Omit<SvgIconProps, "viewBox">> = ({
  brand,
  ...props
}) => (
  <SvgIcon
    viewBox="0 0 24 24"
    sx={{ fontSize: 44 }}
    htmlColor={`#${brand.hex}`}
    {...props}
  >
    <path d={brand.path} />
  </SvgIcon>
);

export default function Experiences() {
  const theme = useTheme();
  const { activeIndex, setActiveIndex } = useExperiences();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { setPage } = useThemeMode();

  useEffect(() => {
    setPage("experience");
  }, [setPage]);

  // Boxes are derived from your data now
  const boxes = React.useMemo(
    () => experiencesData.map((_, idx) => idx),
    []
  );

  const getVisibleBoxes = () => {
    const visibleCount = isMobile ? 1 : 3;
    if (boxes.length <= visibleCount) return boxes;

    let start = Math.max(0, activeIndex - Math.floor(visibleCount / 2));
    let end = start + visibleCount;

    if (end > boxes.length) {
      end = boxes.length;
      start = end - visibleCount;
    }
    return boxes.slice(start, end);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1, display: "flex", marginTop: "50px" }}>
        {getVisibleBoxes().map((index) => {
          const exp = experiencesData[index];
          const isActive = activeIndex === index;
          const icons = brandsFor(exp.stack);

          return (
            <Box
              key={index}
              {...(!isActive && { onClick: () => setActiveIndex(index) })}
              sx={{
                flex: isActive ? 4 : 1,
                transition: "flex 0.4s ease",
                minWidth: isActive ? "auto" : "150px",
                margin: "10px",
                background: theme.palette.background.paper,
                borderRadius: "25px",
                display: "flex",
                overflow: "hidden",
                cursor: isActive ? "auto" : "pointer",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  margin: "20px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ minWidth: 0, overflow: "hidden", display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Company — truncates on collapsed cards */}
                    <h1
                      style={{
                        fontSize: "24px",
                        color: theme.palette.text.primary,
                        fontWeight: "bold",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        minWidth: 0,
                        margin: 0,
                      }}
                    >
                      {exp.company}
                    </h1>

                    {/* Date range — always visible so the timeline reads at a glance */}
                    <p
                      style={{
                        color: theme.palette.primary.main,
                        marginTop: "4px",
                        fontSize: "12px",
                        fontWeight: 600,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.startDate} – {exp.endDate}
                    </p>

                    {isActive && (
                      <p style={{ color: theme.palette.text.secondary, marginTop: "6px", fontSize: "14px", fontWeight: 600 }}>
                        {exp.position} · {exp.location}
                      </p>
                    )}

                    {/* Description — scrollable so it never bleeds out */}
                    {isActive && (
                      <Box sx={{ overflow: "auto", flex: 1, mt: "16px" }}>
                        <p
                          style={{
                            color: theme.palette.text.primary,
                            whiteSpace: "pre-line",
                            lineHeight: 1.75,
                            fontSize: "14px",
                          }}
                        >
                          {exp.description}
                        </p>
                      </Box>
                    )}
                  </Box>

                  {isActive && icons.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        flexWrap: "wrap",
                        flexShrink: 0,
                        pt: "16px",
                      }}
                    >
                      {icons.map((brand) => (
                        <Tooltip key={brand.title} title={brand.title} arrow>
                          <span>
                            <BrandSvg brand={brand} />
                          </span>
                        </Tooltip>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
