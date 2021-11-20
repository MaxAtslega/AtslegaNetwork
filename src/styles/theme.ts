import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"
import { darkScrollbar } from "@mui/material"

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          background: "0px 0px/31px 31px #111217 radial-gradient(#24222a 6%, #111217 5%)",
        },
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 13,
    h1: {
      fontSize: "3.3333rem",
      fontWeight: 600,
      color: "#FFFFFF",
      letterSpacing: ".07em",
      marginBottom: "0.2rem",
    },
    h2: {
      fontSize: "28px",
      fontWeight: 600,
      color: "#FFFFFF",
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      color: "#9a9a9a",
      paddingTop: "10px",
      fontSize: "1.25rem",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#C9CACC",
    },
    secondary: {
      main: "#9a9a9a",
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
