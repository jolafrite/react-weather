import { createGlobalStyle } from "styled-components";
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,600&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap');

  ${styledNormalize}

  body {
    overflow: hidden;
    font-family: "Work Sans", sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: Raleway, sans-serif;
  }

  a {
    cursor: pointer;
  }

  a:hover {
    text-decoration: none;
  }
`;

export default GlobalStyle;
