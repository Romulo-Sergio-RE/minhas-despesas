import { useContext } from "react"
import { ApiDataContext } from "../../context/ApiDataContext"
import { CardDespesas } from "../CardDespesas"
import { ContainerModal,ModalDespesas, } from "./styledModal"
interface ImodalProps{
    onClose?: ()=> void,
    arrayDespesas: any[]
}
export const ModalDespesa:React.FC<ImodalProps> = (props)=>{
    const {deletarDados,IdDespesasAlterada} = useContext(ApiDataContext)
    return(
        <ContainerModal onClick={props.onClose}>
            <ModalDespesas>
                <button onClick={props.onClose}>Sair</button>
                <div>
                    {
                        props.arrayDespesas.map((e)=>{
                            return(
                                <CardDespesas 
                                    key={e.despesasAdicionadas.tituloDespesa}
                                    nome={e.despesasAdicionadas.tituloDespesa}
                                    valor={e.despesasAdicionadas.valorDespesa} 
                                    deleteDespesas={() => deletarDados(e)}    
                                    alterarDespesas={() => IdDespesasAlterada(e)}    
                                    fecharModal={props.onClose}           
                                />
                            )
                        })
                    }
                </div>
            </ModalDespesas>
        </ContainerModal>
    )
}