import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: 1.4rem;
 
  background: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.font.color.primary};
  
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
html,
body,
#root {
  height: 100%;
}
html {
  scroll-behavior: smooth;
  @media (prefers-reduced-motion: reduce) {
	  scroll-behavior:auto;
  }
}
`;

export default GlobalStyle;
