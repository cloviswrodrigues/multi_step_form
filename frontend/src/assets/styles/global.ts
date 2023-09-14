import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu, sans serif;
    font-size: 10px;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;
