import { Container,ContainerIcons } from "./CardStyled";
import { FaTimes, FaPen } from "react-icons/fa";

interface ICardDespesas{
    nome:string,
    valor:string,
    deleteDespesas: () => void
    alterarDespesas: () => void
}

export const CardDespesas: React.FC<ICardDespesas> = (props)=>{
    return(
        <Container>
            <h4>Nome: {props.nome}</h4>
            <h4>Valor: R${props.valor}</h4>

            <ContainerIcons>
                <div className="icon-Alterar">
                    <FaPen size={20} onClick={props.alterarDespesas}/>
                </div>

                <div className="icon-Deletar">
                    <FaTimes  size={23} onClick={props.deleteDespesas}/>
                </div>  
            </ContainerIcons>
        </Container>
    )
}
