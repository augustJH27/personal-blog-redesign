// import { createMuiTheme } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'

const mainBlack = "#000";
const mainWhite = "#fff";
const blue = "#225949";
// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: mainWhite,
    },
    secondary: {
      main: mainBlack,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Cardo, serif',
      fontSize: "52px",
      fontWeight: 500,
      '@media (max-width:480px)': {
        fontSize: '36px',
      },    
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: '1.7',
    },
    p: {
      fontFamily: 'Poppins, sans-serif',
    },
    h3: {
      fontFamily: 'Cardo, serif',
      fontSize: "44px",
      fontWeight: 500,
      '@media (max-width:480px)': {
        fontSize: '32px',
        lineHeight: '1.5',
      },
    },
    a: {
      fontFamily: 'Poppins, sans-serif',
      color: mainBlack,
    },
  },
});

export default theme;
