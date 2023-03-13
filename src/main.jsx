import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <Routes />
      <GlobalStyles />
    </Theme>
  </React.StrictMode>
);
