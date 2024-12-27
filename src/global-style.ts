import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
*{     
  padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

:root {
    --background: white;
    --text-primary: black;
    --text-secondary: #f78da7;
    --text-tertiary: #4f6ee4;
    --accent: purple;
    
  }
  [data-theme='dark'] {
    --background: black;
    --text-primary: white;
    --text-secondary: grey;
    --accent: darkred;
  }

  a, a:hover, a:focus, a:active {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;
  } 

  hr {
    height: 5PX;
    color: black;
    fill: black;
    width: 200px;
    border-color: black;
    background: black;
    border-radius: 5px;
    margin: 10px;
  }

  .txt-box-small {
    width: 20%;
  }

  .txt-box-medium {
    width: 48%;
  }

  .txt-box-large {
    width: 70%;
  }

  .form-control {
    min-width: 150px;
  }

  .general-input,
  .txt-box,
  .txt-box-small,
  .txt-box-large {
    margin-bottom: 15px !important;
  }
`

export default GlobalStyle;