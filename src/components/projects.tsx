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
      <Box sx={{ margin: "10px 10px 0 10px" }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            sx: { borderRadius: "15px" },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          margin: "10px",
          background: "#384739",
          borderRadius: "15px",
        }}
      >
        <Box></Box>
      </Box>
    </Box>
  );
}
