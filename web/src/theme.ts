import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#9c27b0",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });

export const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });