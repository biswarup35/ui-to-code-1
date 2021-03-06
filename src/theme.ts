import { createTheme } from "@mui/material/styles";
import { red, purple } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: purple.A400,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
