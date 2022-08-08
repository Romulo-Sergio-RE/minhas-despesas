import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 800px;
    height: 120px;
    font-size: 24px;
    font-weight: 600;
    background-color: #EDF6F9;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
    margin: 15px 0 0 0;
`;
export const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    width: 100px;
    .icon-Deletar{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        color: #FFFFFF;
        background-color: #FA2323;
        border-radius: 15px;
        cursor: pointer;
    }
    .icon-Alterar{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        color: #FFFFFF;
        background-color: #62D450;
        border-radius: 15px;
        cursor: pointer;
    }
`;