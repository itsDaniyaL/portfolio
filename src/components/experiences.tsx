import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useExperiences } from "../theme/experiencesContext";

export default function Experiences() {
  const theme = useTheme();
  const { activeIndex, setActiveIndex } = useExperiences();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const boxes = [0, 1, 2];

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
              background: "#2A444C",
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
                    <h1
                      style={{
                        fontSize: "24px",
                        color: "#E6E1E3",
                        fontWeight: "bold",
                        alignContent: "center",
                      }}
                    >
                      Stackfinity
                    </h1>
                  </Box>
                  <h1 style={{ color: "#E6E1E3" }}>
                    Senior Frontend Software Engineer
                  </h1>
                  {activeIndex === index ? (
                    <h1
                      style={{
                        color: "#E6E1E3",
                        marginTop: "30px",
                        whiteSpace: "pre-line",
                      }}
                    >
                      • Built modular, cloud-based UI components for Oye Cab,
                      Speaking Buddy, and My Walking App—improving scalability,
                      integration readiness, and user engagement by 30–40%.
                      <br />• Used Flutter to ensure consistent cross-platform
                      behavior; collaborated with .NET/PostgreSQL teams for
                      seamless API integration and secure data handling.
                      <br />• Designed integration-friendly frontend flows in
                      Oye Cab, including real-time code verification and
                      Stripe-powered payments, enhancing both UX and developer
                      adoption.
                      <br />• Developed reusable UI modules in Speaking Buddy
                      for live booking, encrypted messaging, and subscriptions
                      with Stripe integration.
                      <br />• Created accessible, offline-capable components in
                      My Walking App, tailored for elderly users with a focus on
                      privacy and reliability.
                    </h1>
                  ) : null}
                </Box>
                {activeIndex === index ? (
                  <Box sx={{ display: "flex" }}>
                    <img
                      src={require("../assets/khata_icon.png")}
                      style={{ height: "50px", marginRight: "20px" }}
                    ></img>
                    <img
                      src={require("../assets/khata_icon.png")}
                      style={{ height: "50px", marginRight: "20px" }}
                    ></img>
                    <img
                      src={require("../assets/khata_icon.png")}
                      style={{ height: "50px", marginRight: "20px" }}
                    ></img>
                  </Box>
                ) : null}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
