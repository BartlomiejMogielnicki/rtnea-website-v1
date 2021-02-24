import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

body {
  font-family: 'Roboto';
}

li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyle;
