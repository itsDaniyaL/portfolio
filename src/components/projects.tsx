import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const items = [
  { id: 1, title: "Item 1", bg: "#FF5733" },
  { id: 2, title: "Item 2", bg: "#33B5FF" },
  { id: 3, title: "Item 3", bg: "#9B59B6" },
  { id: 4, title: "Item 4", bg: "#2ECC71" },
  { id: 5, title: "Item 5", bg: "#FFC300" },
];

export default function Projects() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Box sx={{ margin: "75px 10px 0 10px" }}>
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
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Box
          sx={{
            flex: 4,
            margin: "10px",
            background: "#384739",
            borderRadius: "25px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              borderRadius: "15px",
              margin: "20px 10px 20px 20px",
            }}
          >
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
                }}
              >
                Khata at Home
              </h1>
            </Box>
            <h1 style={{ color: "#E6E1E3" }}>
              Take control of your Khata, take control of your life.
            </h1>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              background: "#1D221D",
              borderRadius: "15px",
              margin: "20px 20px 20px 10px",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            margin: "10px",
            background: "#384739",
            borderRadius: "25px",
          }}
        >
          <Box></Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            margin: "10px",
            background: "#384739",
            borderRadius: "25px",
          }}
        >
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}
