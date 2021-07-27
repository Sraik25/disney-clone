import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: #f9f9f9;
    background-color: #040714;
    font-family: Avenir-Roman, sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: #f9f9f9;
    text-decoration: none;
  }
`;
