import styled from "styled-components";

export const Container = styled.form`
    width: 17.5rem;
    height: 23.75rem;
    background-color: #0A1128;
    border-radius: 0.9375rem;
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .container-input{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    div{
        margin: 0.625rem 0;
    }
    label{
        display: block;
        color: #ffffff;
        font-size: 1.25rem;
    }
    input{
        width: 14.625rem;
        height: 2.5rem;
        margin: 0.1875rem 0;
        background-color: #034078;
        border: 0.0625rem solid #ffffff;
        border-radius: 0.75rem;
        padding: 0 0 0 0.625rem;
        color: #ffffff;
        :focus{
            border: none;
            outline: 0;
        }
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        padding: 0 0.625rem 0 0;
        filter: invert(1);
    }
    button{
        width: 14.625rem;
        height: 2.5rem;
        margin: 0.9375rem 0 0 0 ;
        background-color: #034078;
        border-radius: 0.75rem;
        color: #ffffff;
        box-shadow: 0.25rem 0.25rem 0.9375rem  rgba(255, 255, 255, 0.1);
        border: none;
        text-transform: uppercase;
        transition: all 2s;
        cursor: pointer;
        :hover{
            transform: scale(1.03);
        }
    }
    p{
        color: #DA3737;
        position: absolute;
        font-size: 1.125rem;
    }
    span{
        color: #ffffff;
    }
    @media only screen and (min-width: 565px) {
        width: 33.875rem;
        height: 18.75rem;
        padding: 0.9375rem;
        .container-input{
            align-items: center;
            justify-content: left;
            flex-direction: row;
            flex-wrap: wrap;
        }
        div{
            margin: 0.625rem 0.4375rem;
        }
    }
`;
export const ContainerUpdate = styled.form`
    width: 17.5rem;
    height: 26.875rem;
    background-color: #0A1128;
    border-radius: 0.9375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .container-input{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    div{
        margin: 0.625rem 0;
    }
    label{
        display: block;
        color: #ffffff;
        font-size: 1.25rem;
    }
    input{
        width: 14.625rem;
        height: 2.5rem;
        margin: 0.1875rem 0;
        background-color: #034078;
        border: 0.0625rem solid #ffffff;
        border-radius: 0.75rem;
        padding: 0 0 0 0.625rem;
        color: #ffffff;
        :focus{
            border: none;
            outline: 0;
        }
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        padding: 0 0.625rem 0 0;
        filter: invert(1);
    }
    button{
        width: 14.625rem;
        height: 2.5rem;
        margin: 0.9375rem 0 0 0 ;
        border-radius: 0.75rem;
        color: #ffffff;
        box-shadow: 0.25rem 0.25rem 0.9375rem  rgba(255, 255, 255, 0.1);
        border: none;
        text-transform: uppercase;
        transition: all 2s;
        cursor: pointer;
        :hover{
            transform: scale(1.03);
        }
    }
    .btnSave{
        background-color: #034078;
    }
    .btnUpdate{
        background-color: #DA3737;
    }
    p{
        color: #DA3737;
        position: absolute;
        font-size: 1.125rem;
    }
    @media only screen and (min-width: 565px) {
        width: 33.875rem;
        height: 18.75rem;
        padding: 0.9375rem;
        .container-input{
            align-items: center;
            justify-content: left;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .container-btns{
            width: 30rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

        }
        div{
            margin: 0.625rem 0.4375rem;
        }
    }
`;