import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #EDF6F9;
    width: 25rem;
    height: 20.625rem;
    border-radius: 0.938rem;
    box-shadow: 0 0.625rem 1.25rem rgba(255, 255, 255, 0.15); 
    button{
        width: 20.625rem;
        height: 3.125rem;
        font-size: 1.125rem;
        font-weight: bold;
        border-radius: 0.625rem;
        border: none;
        background-color: rgba(0, 109, 119, 1);
        color: #FFFFFF;
        padding: 0.875rem;
        box-shadow: 0 0.375rem  0.938rem rgba(0, 0, 0, 0.15);
        cursor: pointer;
        :hover{
            background-color: rgba(0, 109, 119, 0.9);
        }
    }
    .CancelarDespesa{
        background-color: rgba(250, 35, 35, 1);
        :hover{
            background-color: rgba(250, 35, 35, 0.9);
        }
    }
    
`;