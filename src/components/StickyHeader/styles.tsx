import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.2s ease-in-out;
 
  .header {
    padding: 10px 16px;
    background-color: #1a1919;
    color: #f1f1f1;
    width: 100%;
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

  a:hover {
    color: var(--text-secondary);
  }

  img {
    width: 100%;
    height: 500px;
  }
`