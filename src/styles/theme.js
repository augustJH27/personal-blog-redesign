// import { createMuiTheme } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'

const mainBlack = "#000";
const mainWhite = "#fff";
const blue = "#225949";

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
      fontFamily: "Raleway, sans-serif",
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: '1.7',
    },
    p: {
      fontFamily: "Cardo, serif",
    },
    h3: {
      fontFamily: "Raleway, sans-serif",
      fontSize: "44px",
      fontWeight: 500,
      '@media (max-width:480px)': {
        fontSize: '32px',
        lineHeight: '1.5',
      },
    },
    subheading: {
      fontFamily: "Cardo, serif",
      fontSize: "44px",
      fontWeight: 500,
      '@media (max-width:480px)': {
        fontSize: '32px',
        lineHeight: '1.5',
      },
    },
    a: {
      fontFamily: "Raleway, sans-serif",
      color: mainBlack,
    },
  },
});

export default theme;
