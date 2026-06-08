import { Box, Button, Chip, useMediaQuery, useTheme } from "@mui/material";
import { useProjects } from "../theme/projectsContext";
import projectsData from "../data/projects.json";
import "./swiperCustom.css";
import { useEffect } from "react";
import { useThemeMode } from "../theme/themeContext";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Projects() {
  const theme = useTheme();
  const { activeIndex, setActiveIndex } = useProjects();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { setPage } = useThemeMode();

  useEffect(() => {
    setPage("projects");
  }, [setPage]);

  const boxes = projectsData.map((_, i) => i);

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
          const project = projectsData[index];
          const isActive = activeIndex === index;
          const hasImage = project.images && project.images.length > 0;

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
                    <Box sx={{ display: "flex", alignItems: "center", minWidth: 0 }}>
                      {project.icon ? (
                        <img
                          src={`${process.env.PUBLIC_URL}${project.icon}`}
                          alt={project.name}
                          style={{ height: "50px", width: "50px", flexShrink: 0, borderRadius: "12px", objectFit: "cover" }}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: "50px",
                            width: "50px",
                            flexShrink: 0,
                            borderRadius: "12px",
                            backgroundColor: theme.palette.primary.main,
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "22px",
                            fontWeight: "bold",
                          }}
                        >
                          {project.name.charAt(0)}
                        </Box>
                      )}
                      <h1
                        style={{
                          fontSize: "18px",
                          color: theme.palette.text.primary,
                          marginLeft: "20px",
                          fontWeight: "bold",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          minWidth: 0,
                        }}
                      >
                        {project.name}
                      </h1>
                    </Box>

                    {/* Tagline + meta — shown on collapsed cards so each one is self-explanatory */}
                    {!isActive && (
                      <p
                        style={{
                          color: theme.palette.text.secondary,
                          marginTop: "12px",
                          fontSize: "13px",
                          lineHeight: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.tagline}
                      </p>
                    )}

                    {isActive && (
                      <Box sx={{ overflow: "auto", flex: 1, mt: "4px" }}>
                        <p style={{ color: theme.palette.primary.main, margin: "10px 0 0", fontSize: "13px", fontWeight: 600 }}>
                          {project.role} · {project.year}
                        </p>
                        <p style={{ color: theme.palette.text.primary, margin: "12px 0", lineHeight: 1.7, fontSize: "15px", whiteSpace: "pre-line" }}>
                          {project.description}
                        </p>

                        {project.stack && project.stack.length > 0 && (
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mt: 1 }}>
                            {project.stack.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: theme.palette.background.default,
                                  color: theme.palette.text.secondary,
                                  fontSize: "12px",
                                  textTransform: "capitalize",
                                }}
                              />
                            ))}
                          </Box>
                        )}
                      </Box>
                    )}
                  </Box>

                  {isActive && (project.liveUrl || project.githubUrl) && (
                    <Box sx={{ display: "flex", gap: "12px", flexShrink: 0, pt: "16px" }}>
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          startIcon={<OpenInNewIcon />}
                          sx={{
                            background: theme.palette.primary.main,
                            borderRadius: "12px",
                            textTransform: "none",
                          }}
                        >
                          Live
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          startIcon={<GitHubIcon />}
                          sx={{
                            borderColor: theme.palette.text.secondary,
                            color: theme.palette.text.primary,
                            borderRadius: "12px",
                            textTransform: "none",
                          }}
                        >
                          Code
                        </Button>
                      )}
                    </Box>
                  )}
                </Box>
              </Box>

              {isActive && hasImage && (
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    background: theme.palette.background.default,
                    borderRadius: "15px",
                    margin: "20px 20px 20px 10px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}${project.images[0]}`}
                    alt={project.name}
                    style={{
                      maxWidth: "330px",
                      maxHeight: "85%",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
