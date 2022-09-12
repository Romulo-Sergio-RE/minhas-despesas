import { Container,ContainerIcons, Icons } from "./CardStyled";
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

            <ContainerIcons >
                <Icons className="icon-Alterar" backColor={"#62D450"}>
                    <FaPen size={20} onClick={props.alterarDespesas}/>
                </Icons>

                <Icons className="icon-Deletar" backColor={"#FA2323"}>
                    <FaTimes  size={23} onClick={props.deleteDespesas}/>
                </Icons>  
            </ContainerIcons>
        </Container>
    )
}
