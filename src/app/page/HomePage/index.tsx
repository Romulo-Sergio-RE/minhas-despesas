import { useState } from "react"
import { AllExpenses } from "../../components/allExpenses"
import { CardExpense } from "../../components/cardExpense"
import { Form } from "../../components/form"
import { Header } from "../../components/header"
import { useApi } from "../../hooks/apiHook"
import { Container } from "./styled"

export const HomePage = () =>{
    const[expense, setExpense] = useState([])
    const data = useApi()

    const testeApi = async () =>{
        const dados = await data.getAllExpense()
        setExpense(dados)
    }
    // const testeApi2 = async () =>{
    //     const dados = await data.getExpenseById("634eaba1820102b7ac655b45")
    //     setExpense(dados)
    // }
    // const testeApi2 = async () =>{
    //     const dados = await data.postExpense("carro","350")
    //     setExpense(dados)
    // }
    // const testeApi4 = async () =>{
    //     const dados = await data.deleteExpense("634eaba1820102b7ac655b45")
    //     setExpense(dados)
    // }
    // const testeApi5 = async () =>{
    //     const dados = await data.updateExpense("634f13a154708f9a2d9e8e47","internet","250")
    //     setExpense(dados)
    // }
    console.log(expense)
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