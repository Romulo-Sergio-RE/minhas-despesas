import { useContext } from "react"
import { ApiDataContext } from "../../context/apiContext"
import { Container } from "./styled"

export const AllExpenses = () =>{

    const{allExpense} = useContext(ApiDataContext)

    return(
        <Container>
            <h3>Total de Despesas: {allExpense.length}</h3>
            <button type="button">Mostrar Todas as Despesas</button>
        </Container>
    )
}