import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ffd100",
    background: "black",
  },

  fonts: {
    primaryFamily: "Montserrat, sans-serif;",
    primaryColor: "white",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
