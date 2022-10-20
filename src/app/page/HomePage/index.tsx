import { useState } from "react"
import { AllExpenses } from "../../components/allExpenses"
import { CardExpense } from "../../components/cardExpense"
import { Form } from "../../components/form"
import { Header } from "../../components/header"
import { useApi } from "../../hooks/apiHook"
import { Container } from "./styled"

export const HomePage = () =>{
    const[espense, setExpense] = useState()
    const data = useApi()

    const testeApi = async() =>{
        const dados = await data.getAllExpense()
        setExpense(dados)
    }
    return(
        <Container>
            <Header />
            <Form />
            <AllExpenses />
            <CardExpense />
            <button type="button" onClick={testeApi}>teste da api</button>
        </Container>
    )
}