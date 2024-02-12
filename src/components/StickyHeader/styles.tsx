import styled from "styled-components";

export const Container = styled.header`
    background-color: #f1f1f1;
    transition: all 0.2s ease-in-out;
 
  .header {
    padding: 10px 16px;
    background-color: #1a1919;
    color: #f1f1f1;
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
    text-align: right;
  }

  a:hover {
    color: var(--text-secondary);
  }
`