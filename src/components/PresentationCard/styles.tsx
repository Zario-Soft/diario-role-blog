import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    padding: 40px;
    overflow: hidden;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    background-color: rgb(232,233,233);
    color: black;

    transition: all .5s ease-in-out;

    img:hover {
        transform: scale(1.1);
    } 

    @media (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const LeftPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 30px;

    @media (max-width: 1000px) {
        margin-right: 0px;
    }
`

export const RightPanel = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1000px) {
        align-items: center;
    }
`

export const Picture = styled.img`
    width: 250px;
    height: 250px;
    top: 0;
    left: 0;
    vertical-align: middle;
    border-radius: 50%;

    transition: all .2s ease-in-out; 
`