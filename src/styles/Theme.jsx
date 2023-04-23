import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#ffd100",
    background: "black",
  },

  font: {
    family: {
      primary: "Montserrat, sans-serif",
    },
    color: {
      primary: "white",
    },
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
