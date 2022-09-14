import { useContext, useEffect, useState } from "react";
import { AdicionarDespesas } from "../../components/AddDespesas";
import { CardDespesas } from "../../components/CardDespesas";
import { Container, ContainerHomePage } from "./homePage";
import { db } from   "../../service/firebase";
import { uid } from "uid";
import { onValue, ref, remove, set, update } from "firebase/database";
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ModalDespesa } from "../../components/modalTodasAsDespesas";
import { ApiDataContext } from "../../context/ApiDataContext";

export const HomePage = () =>{
    const[isModalAberto, setIsModalAberto] = useState(false)

    const {salvarDadosNoDataBase,deletarDados,alterarDados,IdDespesasAlterada} = useContext(ApiDataContext)
    const {tituloDespesa,valorDespesa,despesas,inputAlterar,} = useContext(ApiDataContext)

    const valorTotalDespesas = (valorTotal: any[])=>{
        let somaDespesas = 0;
        // eslint-disable-next-line array-callback-return
        valorTotal.map((valor) => {
            somaDespesas += parseInt(valor.despesasAdicionadas.valorDespesa);
        })
        return somaDespesas
    }

    return(
        <ContainerHomePage>
            <h1>Minhas Despesas</h1>

            <Container>
                <div className="CardAdicionarUmaDespesa">
                    {inputAlterar ?
                        <AdicionarDespesas 
                            labelTitulo={"Alterar Titulo: " + tituloDespesa}
                            labelValor={"Alterar Valor: R$ " + valorDespesa}
                            despesasAdicionadas={
                                (despesaAlterada)=> alterarDados(despesaAlterada)
                            }
                        /> 
                        :
                        <AdicionarDespesas 
                            labelTitulo="Titulo da Despesa:"
                            labelValor="Valor da Despesa:"
                            despesasAdicionadas={
                                (novasDespesas)=> salvarDadosNoDataBase(novasDespesas)
                            }
                        /> 
                    }
                    <div className="InfoDespesa">
                        <h2>Quantidade de Despesas: {despesas.length}</h2>
                        <h2>Soma das Despesas: R$ {valorTotalDespesas(despesas)}</h2>
                    </div>
                </div>
                
                <div className="ConteinerDosCards">
                {isModalAberto?
                    <ModalDespesa 
                        onClose={() => { setIsModalAberto(false)} } 
                        arrayDespesas={despesas}
                    />
                    : 
                    null
                }
                    <button className="TodasDepesas" onClick={() => setIsModalAberto(true)}> 
                        Todas as Depesas
                    </button>
                    
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                       
                    {
                        despesas.map((e)=>{
                            return(
                                <SwiperSlide>
                                    <CardDespesas 
                                        key={e.despesasAdicionadas.tituloDespesa}
                                        nome={e.despesasAdicionadas.tituloDespesa}
                                        valor={e.despesasAdicionadas.valorDespesa} 
                                        deleteDespesas={() => deletarDados(e)}    
                                        alterarDespesas={() => IdDespesasAlterada(e)}               
                                    />
                                    </SwiperSlide>
                                )
                        })
                    }
                    </Swiper>
                </div>
            </Container>
        </ContainerHomePage>
    )
}