import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 10px;
    color: var(--text-primary-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 250px; 
`

export const Icon = styled(FontAwesomeIcon)`
    cursor:pointer;
    transition: color 0.2s ease-in-out;
    color: var(--text-primary-color);

    &:hover {
        color: var(--text-secondary-color);
    }

`