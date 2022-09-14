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
    width: 37.5rem;
    height: 37.5rem;
    background-color: #006D77;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: baseline;
    flex-direction: column;
    overflow: auto;
    padding: 0.625rem;
    button{
        width: 6.25rem;
        margin: 0.625rem 0;
        padding: 0.313rem;
        background-color: #EDF6F9;
        border: none;
        cursor: pointer;
        color: #006D77;
        font-size: 1.125rem;
        border-radius: 0.75rem;
    }
    div{
        display: flex;
        flex-wrap: wrap;
    }

`;