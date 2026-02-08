import styled from "styled-components";
import { Centralized } from "../general-styles";

export const Container = styled.header`
  ${Centralized}

  .header {
    padding: 10px 16px;
    background-color: #1a1919;
    color: var(--text-primary-color);
    width: 100.5%;
  }
  
  .content {
    padding: 16px;
  }
  
  .sticky {
    position: fixed;
    z-index: 4;
    top: 0;
    width: 100%;
  }
  
  .sticky + .content {
    padding-top: 102px;
  }

  nav {
    text-align: center;
  }

  a {
    color: white;
    &:hover {
      color: var(--text-secondary-color);
    }
  }  

  img {
    width: 1000px;
    height: 500px;
  }

  @media (max-width: 1000px) {
    img {
      width: 80%;
      height: 80%;
    }

    .header {
      width: 104%;
    }
}
`