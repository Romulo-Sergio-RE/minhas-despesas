import { AllExpenses } from "../../components/allExpenses"
import { CardExpense } from "../../components/cardExpense"
import { Form } from "../../components/form"
import { Header } from "../../components/header"
import { Container } from "./styled"

export const HomePage = () =>{
    return(
        <Container>
            <Header />
            <Form />
            <AllExpenses />
            <CardExpense />
        </Container>
    )
}