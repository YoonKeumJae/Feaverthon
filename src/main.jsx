import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import notoSans from "@fontsource-variable/noto-sans-kr";
import App from "./App";
import primaryColor from "./common";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  typography: {
    fontFamily: "Noto Sans KR Variable",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Noto Sans KR Variable';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Noto Sans KR Variable'), local('Noto Sans KR Variable'), url(${notoSans}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
