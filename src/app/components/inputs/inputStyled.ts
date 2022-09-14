import styled from "styled-components";

export const Container = styled.div`
    label{
        display: block;
        font-size: 1.125rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        color: rgba(0, 109, 119, 1);
        margin-bottom: 0.5rem;
    }
    input{
        font-size: 1.125rem;
        border-radius: 0.625rem;
        border: 0.125rem solid rgba(0, 109, 119, 0.7);
        width: 20.625rem;
        height: 3.125rem;
        padding: 0.625rem;
        ::placeholder{
            font-size: 1rem;
        }
    }
`;