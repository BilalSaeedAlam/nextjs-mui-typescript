import { amber, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
const themeMode = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
export default themeMode;
