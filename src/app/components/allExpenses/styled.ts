import styled from "styled-components";

export const Container = styled.div`
    height: 5.5rem;
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-direction: column;
    margin: 1.875rem 0;
    h3{
        font-size: 1.25rem;
        color: #252525;

    }
    button{
        width: 14.625rem;
        height: 2.75rem;
        background-color: #034078;
        border-radius: 0.75rem;
        color: #ffffff;
        border: none;
        transition: all 2s;
        cursor: pointer;
        :hover{
            transform: scale(1.03);
        }
    }
`;
