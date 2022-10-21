import { useContext } from "react"
import { AllExpenses } from "../../components/allExpenses"
import { CardExpense } from "../../components/cardExpense"
import { Form } from "../../components/form"
import { Header } from "../../components/header"
import { ApiDataContext } from "../../context/apiContext"

import { Container } from "./styled"

export const HomePage = () =>{
    const{
        deleteExpense,
        getAllExpenseById,
        getAllExpense,
        postExpense,
        updateExpense,
        message,
        allExpense,
        expenseById
    } = useContext(ApiDataContext);
    console.log(allExpense)
    console.log(message)
    return(
        <Container>
            <Form />
            <button type="button" onClick={()=> updateExpense("63519a0e435376818a49913e", "carro", "60000","20/02/2000")}>teste da api</button>
            <button type="button" onClick={getAllExpense}>pegar todos os dados</button>
        </Container>
    )
}