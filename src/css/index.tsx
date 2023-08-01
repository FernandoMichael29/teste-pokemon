import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@700&display=swap');

  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, Verdana, Tahoma, sans-serif;
  }

  body{
    overflow-x: hidden;
  }
`;