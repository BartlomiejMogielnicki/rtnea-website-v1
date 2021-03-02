import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

body {
  background-color: #000;
  font-family: 'Roboto';
}

li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

input:focus, textarea:focus, button:focus {
  outline: none;
}

input, textarea {
  border: none;
  font-family: 'Roboto'
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

// Audio player progress bar hide
.rhap_progress-section {
  display: none;
}

`;

export default GlobalStyle;
