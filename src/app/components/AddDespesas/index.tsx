import { useState } from "react";
import { Container } from "./AddDespesasStyled";
import { Input } from "./inputs";

interface IAddDespesas{
    labelTitulo:string,
    labelValor:string,
    despesasAdicionadas:(valor:{})=> void
}

export const AdicionarDespesas: React.FC<IAddDespesas> = (props) =>{

    const[tituloDespesa, setTituloDespesas] = useState("");
    const[valorDespesa, setValorDespesa] = useState("");

    const adicionar = ()=>{
        props.despesasAdicionadas({
            tituloDespesa,
            valorDespesa,
        })

        setTituloDespesas("")
        setValorDespesa("")
    }
    return(
        <Container>
            <Input 
                label={props.labelTitulo} 
                inputType="text"
                value={tituloDespesa}
                onChange={(valor)=>{setTituloDespesas(valor)}}
            />
            <Input 
                label={props.labelValor} 
                inputType="text"
                value={valorDespesa}
                onChange={(valor)=>{setValorDespesa(valor)}}
            />

            <button onClick={adicionar}>Adicionar</button>
        </Container>
    )
}