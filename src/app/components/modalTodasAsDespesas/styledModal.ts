import styled from "styled-components";

export const ContainerModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`;
export const ModalDespesas = styled.div`
    width: 750px;
    height: 600px;
    background-color: #111111;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: baseline;
    flex-direction: column;
    overflow: auto;
    margin: 10px 0;
    button{
        width: 180px;
        height: 50px;
        color: red;
        margin: 10px 0;
    }
`;