import styled from "styled-components";
import { Centralized } from "../general-styles";

export const Container = styled.footer`
    ${Centralized}
    background-color: #1a1919;
    padding: 10px 16px;
    color: #f1f1f1;
    justify-content: space-between;
    
    a {
        color: var(--text-secondary-color);
        transition: all 0.2s ease-in-out;
    }

    h3 {
        color: gray;
        font-size: 30px;
    }
    @media (max-width: 1000px) {
        max-height: 600px;
    }    
`

export const Detail = styled.div`    
    ${Centralized}
    max-width: 300px;
`

export const DevFooter = styled.footer`    
    display:flex;
    align-items: center;
    font-weight: 700;

`