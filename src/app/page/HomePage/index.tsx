import { useContext, useEffect, useState } from "react"
import { AllExpenses } from "../../components/allExpenses"
import { Form } from "../../components/form"
import { Header } from "../../components/header"
import { ApiDataContext } from "../../context/apiContext"
import { Container } from "./styled"
import { Carousel } from "../../components/carousel";

export const HomePage = () =>{

    const[loading, setLoading] = useState(false)
    const[getIdExpense, setGetIdExpense] = useState("")
    const[FormExchange, setFormExchange] = useState(true)

    const[spaceBetweenSwiper,setSpaceBetweenSwiper] = useState(0)
    const[slidePerView,setSlidePerView] = useState(0)

    const dataSwiper = () =>{
        if(window.screen.width <= 570){
            setSpaceBetweenSwiper(3)
            setSlidePerView(1)
        }else{
            setSpaceBetweenSwiper(2)
            setSlidePerView(2)
        }
    }

    const{getAllExpense} = useContext(ApiDataContext);

    useEffect(()=>{
        getAllExpense()
        dataSwiper()
        if(loading){
            window.location.reload()
            getAllExpense()
        }
    },[loading])

    return(
        <Container>
            <Header />
            <Form 
                reloding={() => setLoading(!loading)}
                id={getIdExpense}
                formType={FormExchange}
                setFormtype={()=>setFormExchange(!FormExchange)}
            />
            <AllExpenses />
            <Carousel 
                spaceBetweenSwiper={spaceBetweenSwiper}
                slidePerView={slidePerView}
                reloding={() => setLoading(!loading)}
                getID={setGetIdExpense}
                formExchange={setFormExchange}
            />
        </Container>
    )
}