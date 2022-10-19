import styled from "styled-components";

export const Container = styled.div`
    width: 234px;
    height: 242px;
    background-color: #034078;
    border-radius: 12px;
    margin-bottom: 20px;
    display: flex;
    align-items: left;
    justify-content: space-around;
    flex-direction: column;
    .info-card{
        margin:  0 0 0 30px;
        h3{
            color: #ffffff;
            margin: 5px 0;
        }
    }
    .btns{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        button{
            width: 132px;
            height: 40px;
            color: #ffffff;
            border-radius: 10px;
            box-shadow: 4px 4px 15px rgba(255, 255, 255, 0.1);
            border: none;
            cursor: pointer;
            margin: 3px 0;
            text-transform: uppercase;
        }
        .btn-update{
            background-color: #001F54;
        }
        .btn-delete{
            background-color: #DA3737;
        }
    }
`;  