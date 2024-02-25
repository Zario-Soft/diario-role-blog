import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #1a1919;
    transition: all 0.2s ease-in-out;
    height: 600px;
    padding: 10px 16px;
    color: #f1f1f1;
    align-items: center;
    justify-content: space-between;

    a:hover {
    color: var(--text-secondary);
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
    display:flex;
    max-width: 600px;
`

export const DevFooter = styled.div`    
    display:flex;
    align-items: center;
    font-weight: 700;

`