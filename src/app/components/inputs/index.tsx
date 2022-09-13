import * as S from "./inputStyled"
interface IInput{
    label: string
    inputType: string
    value: string
    placeholder:string
    onChange: (novoValor:string)=> void
    tipoInput?:string
}

export const Input: React.FC<IInput> = (props) =>{
    
    return(
        <>
            {props.tipoInput === "titulo"?
                <S.Container>
                    <label>{props.label}</label>
                    <input 
                        type={props.inputType}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={(e)=> props.onChange(e.target.value)}
                        required
                    />
                </S.Container>
                :
                <S.Container>
                    <label>{props.label}</label>
                    <input 
                        type={props.inputType}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={(e)=> props.onChange(e.target.value)}
                        required
                    />
                </S.Container>
            }

        </>
    )
}   