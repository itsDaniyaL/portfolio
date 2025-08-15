import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";

const items = [
  { id: 1, title: "Item 1", bg: "#FF5733" },
  { id: 2, title: "Item 2", bg: "#33B5FF" },
  { id: 3, title: "Item 3", bg: "#9B59B6" },
  { id: 4, title: "Item 4", bg: "#2ECC71" },
  { id: 5, title: "Item 5", bg: "#FFC300" },
];

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
      <Box
        sx={{
          margin: "75px 10px 0 10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            sx: { borderRadius: "25px" },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <p
          style={{ color: "#E6E1E3", fontSize: "24px", alignContent: "center" }}
        >
          10 Projects
        </p>
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
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
                }}
              >
                <img
                  src={require("../assets/khata-app-1.png")}
                  alt="Khata App"
                  style={{
                    width: "90%",
                    height: "90%",
                    objectFit: "contain",
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
