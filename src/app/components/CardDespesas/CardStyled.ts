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
    margin:  0.625rem 0.625rem;
    h4{
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0 1.25rem;
        color: rgba(0, 109, 119, 1);
    }
    
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        width: 220px;
        margin: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 210px;
    }
    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 210px;
    }
    @media only screen and (max-width: 600px){
        width: 190px;
        height: 230px;
        h4{
            font-size: 1.25rem;
        }
    }
    @media only screen and (max-width: 530px){
        width: 170px;
        height: 200px;
    }
`;
export const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 8.125rem;
    margin-left: 4.063rem;
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        margin-left: 2rem;
    }
    @media only screen and (min-width: 600px) and (max-width: 768px) {
        margin-left: 2rem;
    }
    @media only screen and (max-width: 600px){
        margin-left: 1.7rem;
    }
    @media only screen and (max-width: 425px){
        margin-left: 1.5rem;
    }
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