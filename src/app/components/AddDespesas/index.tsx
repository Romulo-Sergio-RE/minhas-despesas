import { FormEvent, useState } from "react";
import { Container } from "./AddDespesasStyled";
import { Input } from "../inputs";
import { useForm } from "react-hook-form";

interface IAddDespesas{
    labelTitulo:string,
    labelValor:string,
    despesasAdicionadas:(valor:{})=> void
}

export const AdicionarDespesas: React.FC<IAddDespesas> = (props) =>{

    const[tituloDespesa, setTituloDespesas] = useState("");
    const[valorDespesa, setValorDespesa] = useState("");

    const adicionar = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        props.despesasAdicionadas({
            tituloDespesa,
            valorDespesa,
        })

        setTituloDespesas("")
        setValorDespesa("")
    }
    return(
        <Container onSubmit={(e)=>adicionar(e)}>   
            <Input 
                label={props.labelTitulo} 
                inputType="text"
                value={tituloDespesa}
                placeholder={"Digite um titulo para a despesa"}
                onChange={(valor)=>{setTituloDespesas(valor)}}
                tipoInput={"titulo"}
            />
            <Input 
                label={props.labelValor} 
                inputType="number"
                value={valorDespesa}
                placeholder={"Digite o valor da despesa"}
                onChange={(valor)=>{setValorDespesa(valor)}}
            />
            <button>Adicionar Despesa</button>
        </Container>
    )
}