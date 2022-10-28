
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { ApiDataContext } from '../../context/apiContext';
import { Container, ContainerUpdate } from "./styled"

interface FormData  {
    title: string,
    value: string,
    date: string,
}
interface FormProp {
    id: string,
    formType: boolean,
    reloding: () => void
    setFormtype: ()=> void
}

const schema = yup.object({
    title: yup.string().required("titulo obrigatorio"),
    value: yup.string().required("valor obrigatorio"),
    date: yup.string().required("data obrigatoria"),
}).required();

export const Form:React.FC<FormProp> = (props) =>{

    const {postExpense,updateExpense} = useContext(ApiDataContext)
    
    const { register, handleSubmit, formState: {errors}  } = useForm<FormData>({
        resolver: yupResolver(schema),
    });


    const onSubmitPost = (data: FormData) => {
        const date = data.date.split('-').reverse().join('/')
        postExpense(data.title,data.value,date)
        props.reloding()
    };
    
    const onSubmitUpdate = (data: FormData) => {
        const date = data.date.split('-').reverse().join('/')
        updateExpense(props.id,data.title,data.value,date)
        props.reloding()
    };

    return(
        <>
        {props.formType === true ?
            <Container onSubmit={handleSubmit(onSubmitPost)}>
                <div className='container-input'>
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
                </div>
                <button type="submit" >Cadastrar Despesa</button>
            </Container>
            :
            <ContainerUpdate onSubmit={handleSubmit(onSubmitUpdate)}>
                <div className='container-input'>
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
                </div>
                <div className='container-btns'>
                    <button type="submit" className='btnSave'>Salvar Alteracao</button>
                    <button type="submit" onClick={props.setFormtype}className='btnUpdate'>Cancelar Alteracao</button>
                </div>
            </ContainerUpdate>
        }
        </>
    )
}