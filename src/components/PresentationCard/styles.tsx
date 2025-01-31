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
    animation: slideUp 0.5s ease-out;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    img:hover {
        transform: scale(1.1);
    } 

    @media (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: center;
        padding: 40px 10px 40px 10px;
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

interface PictureProps {
    $width?: string,
    $height?: string,
    $round?: string
}
export const Picture = styled.img<PictureProps>`
    width: ${props => `${props.$width ?? '250px'};`}
    height: ${props => `${props.$height ?? '250px'};`}
    top: 0;
    left: 0;
    vertical-align: middle;
    border-radius: ${props => `${props.$round ?? '0px'};`}

    transition: all .2s ease-in-out; 
`