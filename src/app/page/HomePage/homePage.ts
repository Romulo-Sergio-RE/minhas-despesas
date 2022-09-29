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
    @media only screen and (max-width: 530px){
        .ConteinerDosCards{
            .swiper-button-prev{
                padding-left: 60px;
            }
            .swiper-button-next{
                padding-right: 60px;
            }
        }
        .TodasDepesas{
            width: 155px;
            height: 50px;
            font-size: 1rem;
        }
    }
    @media only screen and (max-width: 600px){
        align-items: center;
        flex-direction: column;
        .ConteinerDosCards{
            width: 31.5rem;
            .swiper{
                width: 31.5rem;
            }
        }
        .InfoDespesa{
            align-items: center;
        }
        .TodasDepesas{
            margin-top: 20px;
            margin-right: 3rem;
        }
    }
    @media only screen and (min-width: 600px) and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
        .TodasDepesas{
            margin-right: 3rem;
        }
        .InfoDespesa{
            align-items: center;
        }
        .ConteinerDosCards{
            width: 34rem;
            .swiper{
                width: 34rem;
            }
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        align-items: center;
        flex-direction: column;
        .TodasDepesas{
            margin-top: 25px;
            margin-right: 4.2rem;
        }
        .InfoDespesa{
            align-items: center;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1200px) {
        .ConteinerDosCards{
            width: 38rem;
            .swiper{
                width: 38rem;
            }
        }
        .TodasDepesas{
            margin-right: 3rem;
        }
    }
`;