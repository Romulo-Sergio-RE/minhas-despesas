import styled from "styled-components";

export const Container = styled.div`      
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-direction: column;
    margin: 1.25rem 0;
    h3{
        font-size: 1.5rem;
        color: #252525;
    }
    @media only screen and (min-width: 565px) {
        width: 29.375rem;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        h3{
            font-size: 1.375rem;
        }
        button{
            font-size: 1.0625rem;
        }
    }
`;
