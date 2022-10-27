import { useContext, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { AllExpenses } from "../../components/allExpenses"
import { CardExpense } from "../../components/cardExpense"
import { Form } from "../../components/form"
import { Header } from "../../components/header"
import { ApiDataContext } from "../../context/apiContext"


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Container } from "./styled"

export const HomePage = () =>{

    const[loading, setLoading] = useState(false)
    const[getIdExpense, setGetIdExpense] = useState("")
    const[FormExchange, setFormExchange] = useState(true)

    const{getAllExpense,allExpense} = useContext(ApiDataContext);

    useEffect(()=>{
        getAllExpense()
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
            />
            <AllExpenses />
            <div className="carrossel">
                <Swiper
                    // spaceBetween={3}
                    // slidesPerView={1}
                    // width 330px
                    modules={[Navigation, Pagination,]}
                    spaceBetween={2}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        allExpense.map((expense)=>{
                            return(
                                <SwiperSlide>
                                <CardExpense 
                                    key={expense._id}
                                    id={expense._id}
                                    title={expense.title}
                                    value={expense.value}
                                    date={expense.date}
                                    reloding={() => setLoading(!loading)}
                                    getID={setGetIdExpense}
                                    formExchange={setFormExchange}
                                />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Container>
    )
}