
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { ApiDataContext } from '../../context/apiContext';
import { Container } from "./styled"

interface FormData  {
    title: string,
    value: string,
    date: string,
}
const schema = yup.object({
    title: yup.string().required("titulo obrigatorio"),
    value: yup.string().required("valor obrigatorio"),
    date: yup.string().required("data obrigatoria"),
}).required();
export const Form = () =>{

    const {postExpense} = useContext(ApiDataContext)
    
    const { register, handleSubmit, formState: {errors}  } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        const date = data.date.split('-').reverse().join('/')
        postExpense(data.title,data.value,date)
    };
    //mudar o formato da data = data.date.split('-').reverse().join('/')
    // fazer o card segundario height 420px
    return(
        <Container onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Titulo:</label>
                <input type="text" {...register("title")} />
                <p>{errors.title?.message}</p>
            </div>
            <div>
                <label>Valor:</label>
                <input type="number" {...register("value")} />
                <p>{errors.value?.message}</p>
            </div>
            <div>
                <label>Data:</label>
                <input type="date"{...register("date")} />
                <p>{errors.date?.message}</p>
            </div>
            <button type="submit">Cadastrar Despesa</button>
        </Container>
    )
}