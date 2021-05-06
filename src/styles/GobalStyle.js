import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize};

body {
    box-sizing: border-box;
    font-size: 16px;
    min-height: 100vh;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    background-color: #000000;
};
`;

export default GlobalStyle;
