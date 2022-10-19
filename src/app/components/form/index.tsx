
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
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
    const [teste, setTeste] = useState(false);

    const { register, handleSubmit, formState: {errors}  } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        console.log(data)
        setTeste(true)
    };
    //mudar o formato da data = data.date.split('-').reverse().join('/')
    // fazer o card segundario height 420px
    return(
        <Container onSubmit={handleSubmit(onSubmit)}>
            {teste?
                <span>cadastrado com sucesso</span>
                :null
            }
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