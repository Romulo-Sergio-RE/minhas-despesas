import styled from "styled-components";
interface ContainerProps{
    backColor:string
}
export const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-evenly;
    flex-direction: column;
    width: 16.25rem;
    height: 15.938rem;
    background-color: #EDF6F9;
    border-radius: 1.25rem;
    margin: 0.625rem 0.625rem;
    h4{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0 1.25rem;
    }
`;
export const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 8.125rem;
    margin-left: 4.063rem;
`;
export const Icons = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: #FFFFFF;
    background-color: ${(props) => props.backColor};
    border-radius: 0.938rem;
    cursor: pointer;
`;