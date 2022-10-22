import { useCallback, useContext, useEffect } from "react"
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
        postExpense,
        getAllExpense,
        updateExpense,
        message,
        allExpense,
        expenseById
    } = useContext(ApiDataContext);

    return(
        <Container>
            <Form />
            {allExpense.map((expense)=>{
                return(
                    <CardExpense 
                        key={expense._id}
                        id={expense._id}
                        title={expense.title}
                        value={expense.value}
                        date={expense.date}
                    />
                )
            })}
        
            <button type="button" onClick={()=> updateExpense("63519a0e435376818a49913e", "carro", "60000","20/02/2000")}>teste da api</button>
            <button type="button" onClick={()=>{}}>pegar todos os dados</button>
        </Container>
    )
}