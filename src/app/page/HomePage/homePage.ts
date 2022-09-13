import styled from "styled-components";

export const ContainerHomePage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;  
    h1{
        color: #FFFFFF;
        margin: 1.25rem 0;
    }
`;
export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    .InfoDespesa{
        display: flex;
        align-items: left;
        justify-content: space-between;
        flex-direction: column;
        margin: 1.25rem 0 0 0;
        h2{
            color: #FFFFFF;
            margin-bottom: 0.625rem;
        }
    }
    .CardAdicionarUmaDespesa{
        margin-top: 0.938rem;
    }
    .ConteinerDosCards{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        width: 40.625rem;
        .swiper{
            width: 40.625rem;
            padding: 1.25rem;
        }
        .swiper-slide{
            display: flex;
            justify-content: center;
            margin: 1.25rem 0;
        }
        .swiper-button-prev{
            color: #EDF6F9;
        }
        .swiper-button-next{
            color: #EDF6F9;
        }
        .swiper-pagination-bullet{
            width: 1.25rem;
            height: 0.625rem;
            border-radius: 0.313rem;
        }
        .swiper-pagination-bullet-active{
            width: 1.25rem;
            height: 0.625rem;
            border-radius: 0.313rem;
            background-color: #EDF6F9;
        }
    }
    .TodasDepesas{
        width: 11.063rem;
        height: 3.125rem;
        background-color: #EDF6F9;
        border-radius: 0.75rem;
        margin-right: 2.625rem;
        border: none;
        cursor: pointer;
        color: #006D77;
        font-size: 1.125rem;
        font-weight: bold;
    }
`;