import { Container,ContainerIcons, Icons } from "./CardStyled";
import { FaTimes, FaPen } from "react-icons/fa";

interface ICardDespesas{
    nome:string,
    valor:string,
    deleteDespesas?: () => void
    alterarDespesas?: () => void
    fecharModal?: () => void
}

export const CardDespesas: React.FC<ICardDespesas> = (props)=>{
    return(
        <Container>
            <h4>Titulo: {props.nome}</h4>
            <h4>Valor: R${props.valor}</h4>

            <ContainerIcons >
                <Icons className="icon-Alterar" backColor={"rgba(59, 189, 39, 0.9)"} onClick={props.alterarDespesas}>
                    <FaPen size={20} onClick={props.fecharModal}/>
                </Icons>

                <Icons className="icon-Deletar" backColor={"rgba(250, 35, 35, 1)"}>
                    <FaTimes  size={23} onClick={props.deleteDespesas}/>
                </Icons>  
            </ContainerIcons>
        </Container>
    )
}
