import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    padding: 0px 40px;
    background: var(--text-tertiary-color);
    color: var(--bg-color);
    font-weight: 700;
    border-radius: 40px;
    white-space: nowrap;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: var(--text-secondary-color);
    }

    h5 {
        margin: 15px 5px;
    }
`