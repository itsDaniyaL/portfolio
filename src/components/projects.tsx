import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const boxes = [0, 1, 2];

  const getVisibleBoxes = () => {
    if (boxes.length <= 3) {
      return boxes;
    }
    let start = Math.max(0, activeIndex - 1);
    let end = start + 3;

    if (end > boxes.length) {
      end = boxes.length;
      start = end - 3;
    }

    return boxes.slice(start, end);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1, display: "flex", marginTop: "50px" }}>
        {getVisibleBoxes().map((index) => (
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
                      src={require("../assets/khata_icon.png")}
                      style={{ height: "50px" }}
                    ></img>
                    <h1
                      style={{
                        fontSize: "18px",
                        color: "#E6E1E3",
                        marginLeft: "20px",
                        fontWeight: "bold",
                        alignContent: "center",
                      }}
                    >
                      Khata at Home
                    </h1>
                  </Box>
                  <h1 style={{ color: "#E6E1E3", margin: "20px 0" }}>
                    Take control of your Khata, take control of your life.
                  </h1>
                </Box>
                {activeIndex === index ? (
                  <Box>
                    <Button
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
                  src={require("../assets/khata-app-1.png")}
                  alt="Khata App"
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
        ))}
      </Box>
    </Box>
  );
}
