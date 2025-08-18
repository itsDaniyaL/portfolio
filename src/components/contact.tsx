import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import CheckIcon from "@mui/icons-material/Check";

import contacts from "../data/contacts.json";
import { useEffect, useState } from "react";
import { useThemeMode } from "../theme/themeContext";

export default function Contact() {
  const theme = useTheme();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const { setPage } = useThemeMode();

  useEffect(() => {
    setPage("contact");
  }, [setPage]);

  const getIcon = (title: string) => {
    switch (title) {
      case "Email":
        return (
          <EmailOutlinedIcon sx={{ fontSize: "32px", marginRight: "10px" }} />
        );
      case "Phone":
        return (
          <PhoneOutlinedIcon sx={{ fontSize: "32px", marginRight: "10px" }} />
        );
      case "LinkedIn":
        return <LinkedInIcon sx={{ fontSize: "32px", marginRight: "10px" }} />;
      case "GitHub":
        return <GitHubIcon sx={{ fontSize: "32px", marginRight: "10px" }} />;
      default:
        return null;
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Box
      sx={{
        margin: "10px",
        display: "grid",
        gap: 2,
        marginTop: "75px",
        overflow: "auto",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
      }}
    >
      {contacts.map((contact, index) => (
        <Box
          key={index}
          sx={{
            transition: "flex 0.4s ease",
            minWidth: "150px",
            maxHeight: "200px",
            background: theme.palette.background.paper,
            borderRadius: "25px",
            display: "flex",
            padding: "20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {getIcon(contact.title)}
              <Typography sx={{ fontSize: "20px" }}>{contact.title}</Typography>
            </Box>
            <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => handleCopy(contact.data, index)}
              >
                {contact.data}
              </Typography>
              {copiedIndex === index && (
                <>
                  <CheckIcon
                    sx={{
                      fontSize: "18px",
                      color: "lightgreen",
                      marginLeft: "10px",
                    }}
                  />
                  <Typography>Copied</Typography>
                </>
              )}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                href={contact.link}
                target={
                  contact.title === "Email" || contact.title === "Phone"
                    ? "_self"
                    : "_blank"
                }
                sx={{
                  background: "#301C2C",
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
                    Go to
                  </p>
                  <EastIcon sx={{ fontSize: "15px" }} />
                </Box>
                <p style={{ color: "#E6E1E3", fontWeight: "bold" }}>
                  {contact.title}
                </p>
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
