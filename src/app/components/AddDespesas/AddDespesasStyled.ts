import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #EDF6F9;
    width: 800px;
    height: 180px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15); 
    button{
        font-size: 18px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        background-color: #83C5BE;
        color: #FFFFFF;
        margin-top: 30px;
        padding: 14px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        :hover{
            background-color: #006D77;
        }
    }
    
`;