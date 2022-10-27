import { useContext } from "react"
import { ApiDataContext } from "../../context/apiContext"
import { Container } from "./styled"

interface CardProps {
    id: string,
    title: string,
    value: string,
    date: string,
    reloding: () => void,
    getID: (id: string) => void
    formExchange: (value: boolean) => void
}
export const CardExpense: React.FC<CardProps> = (props)=>{

    const {deleteExpense} = useContext(ApiDataContext)

    const buttonDelete = () =>{
        deleteExpense(props.id)
        props.reloding()
    }
    const buttonUpdate = () =>{
        props.getID(props.id)
        props.formExchange(false)
    }

    return(
        <Container>
            <div className="info-card">
                <h3>Titulo: {props.title}</h3>
                <h3>Valor: {props.value}</h3>
                <h3>Data: {props.date}</h3>
            </div>
            <div className="btns">
                <button 
                    onClick={buttonUpdate}
                    type="button"
                    className="btn-update"
                >Alterar</button>
                <button 
                    onClick={buttonDelete}
                    type="button"
                    className="btn-delete"
                >Excluir</button>
            </div>
        </Container>
    )
}