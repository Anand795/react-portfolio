import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, h6 {
    display: inline-block;
    font-family: 'Josefin Sans', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    // TODO: Write font family 
    font-family: 'Architects Daughter', cursive;
}

`;

export default GlobalStyle;
