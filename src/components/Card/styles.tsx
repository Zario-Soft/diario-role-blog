import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    padding: 0px 10px 10px 25px;
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    background-color: #000;
    color: white;
    max-height: 400px;

    transition: all .5s ease-in-out;

    animation: slideUp 0.5s ease-out;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

    img:hover {
        transform: scale(1.1);
    } 

    h2 {
        padding: 30px;
    }  
    
    @media (max-width: 1000px) {
        max-height: 900px;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    z-index: 2;
    color: white;    

    img:hover {
        transform: scale(1.1);
    }
`

export const MiddleContainer = styled(TitleContainer)`    
    @media (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: .5;
    z-index: 0;

    transition: all .2s ease-in-out; 
`