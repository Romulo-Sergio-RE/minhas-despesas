import { Container } from "./styled"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useContext, useState } from "react";
import { ApiDataContext } from "../../context/apiContext";
import { CardExpense } from "../cardExpense";


interface propsCarousel {
    spaceBetweenSwiper: number
    slidePerView: number
    reloding: () => void,
    getID: (id: string) => void
    formExchange: (value: boolean) => void
}
export const Carousel:React.FC<propsCarousel> = (props) =>{

    const{allExpense} = useContext(ApiDataContext);

    return(
        <Container>
            <Swiper
                modules={[Navigation, Pagination,]}
                spaceBetween={props.spaceBetweenSwiper}
                slidesPerView={props.slidePerView}
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
                                    reloding={props.reloding}
                                    getID={props.getID}
                                    formExchange={props.formExchange}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Container>
    )
}