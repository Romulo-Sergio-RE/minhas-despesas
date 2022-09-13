import { CardDespesas } from "../CardDespesas"
import { ContainerModal,ModalDespesas, } from "./styledModal"
interface ImodalProps{
    onClose?: ()=> void,
    arrayDespesas: any[]
}
export const ModalDespesa:React.FC<ImodalProps> = (props)=>{
    return(
        <ContainerModal>
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
                                />
                            )
                        })
                    }
                </div>
            </ModalDespesas>
        </ContainerModal>
    )
}