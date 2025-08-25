import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useProjects } from "../theme/projectsContext";
import projectsData from "../data/projects.json";

export default function Projects() {
  const theme = useTheme();
  const { activeIndex, setActiveIndex } = useProjects();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

          return (
            <Box
              key={index}
              {...(activeIndex !== index && {
                onClick: () => setActiveIndex(index),
              })}
              sx={{
                flex: activeIndex === index ? 4 : 1,
                transition: "flex 0.4s ease",
                minWidth: activeIndex === index ? "auto" : "150px",
                margin: "10px",
                background: "#384739",
                borderRadius: "25px",
                display: "flex",
                cursor: activeIndex === index ? "auto" : "pointer",
              }}
            >
              {/* Left side (content) */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  margin: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex" }}>
                      <img
                        src={`/assets/${project.icon}`}
                        alt={`${project.name} icon`}
                        style={{ height: "50px" }}
                      />
                      <h1
                        style={{
                          fontSize: "18px",
                          color: "#E6E1E3",
                          marginLeft: "20px",
                          fontWeight: "bold",
                          alignContent: "center",
                        }}
                      >
                        {project.name}
                      </h1>
                    </Box>
                    {activeIndex === index ? (
                      <h1 style={{ color: "#E6E1E3", margin: "20px 0" }}>
                        {project.description}
                      </h1>
                    ) : null}
                  </Box>
                  {activeIndex === index ? (
                    <Box>
                      <Button
                        href={project.readMoreLink}
                        target="_blank"
                        variant="contained"
                        sx={{
                          background: "#1D221D",
                          width: "150px",
                          height: "50px",
                          borderRadius: "15px",
                          display: "flex",
                          flexDirection: "column",
                          textTransform: "none",
                          alignItems: "flex-start",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <p
                            style={{
                              fontSize: "10px",
                              marginRight: "5px",
                              color: "#E6E1E3",
                            }}
                          >
                            Read more
                          </p>
                          <EastIcon sx={{ fontSize: "15px" }} />
                        </Box>
                        <p style={{ color: "#E6E1E3", fontWeight: "bold" }}>
                          Project Details
                        </p>
                      </Button>
                    </Box>
                  ) : null}
                </Box>
              </Box>

              {activeIndex === index ? (
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    background: "#1D221D",
                    borderRadius: "15px",
                    margin: "20px 20px 20px 10px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <img
                    src={project.images[0]}
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
              ) : null}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
