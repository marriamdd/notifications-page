

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Outfit:wght@100..900&family=Overpass+Mono:wght@300..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
   
  }

  body {
    background: var(--9---White, #FFF);
    min-height: 100vh;
    display: flex;
    justify-content: center;
  
    font-family: "Plus Jakarta Sans", sans-serif;
  
  }
`;
