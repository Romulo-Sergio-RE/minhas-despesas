import { useEffect, useState } from "react";
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

export const HomePage = () =>{
    const [despesas, setDespesas] = useState<any[]>([]);
    const [inputAlterar, setInputAlterar] = useState(false);
    const [despesasAlteradaID, setDespesasAlteradaID] = useState({})
    const [tituloDespesa, setTituloDespesa] = useState("")
    const [valorDespesa, setValorDespesa] = useState("")

    const valorTotalDespesas = (valorTotal: any[])=>{
        let somaDespesas = 0;
        // eslint-disable-next-line array-callback-return
        valorTotal.map((valor) => {
            somaDespesas += parseInt(valor.despesasAdicionadas.valorDespesa);
        })
        return somaDespesas
    }
    //salber os dados no banco de dados
    const salvarDadosNoDataBase = (despesasAdicionadas: any)=>{
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            despesasAdicionadas,
            uuid,  
        });
        
    }
    // hook para poder ler os dados no banco de dados
    useEffect(()=>{
        onValue(ref(db), snapshot =>{
            const data = snapshot.val();
            setDespesas([])
            if(data != null){
                // eslint-disable-next-line array-callback-return
                Object.values(data).map((val)=>{
                    setDespesas(despesas => [...despesas,val])
                });
            }
        })
    },[])
    // funcao para poder deletar os dados do bando
    const deletarDados = (des: any)=>{
        remove(ref(db,`/${des.uuid}`))
        if(inputAlterar){
            setInputAlterar(false)
        }
    }
    // funcao para poder alterar os dados do bando
    const alterarDados = (despesaAlterada:any) =>{
        update(ref(db, `/${despesasAlteradaID}`),{
            despesasAdicionadas:despesaAlterada,
            uuid:despesasAlteradaID,
        })
        setInputAlterar(false)
    }
    // funcao para poder pegar o id do meu dado que quero alterar
    const IdDespesasAlterada = (des: any)=>{
        setInputAlterar(true)
        setDespesasAlteradaID(des.uuid)
        setTituloDespesa(des.despesasAdicionadas.tituloDespesa)
        setValorDespesa(des.despesasAdicionadas.valorDespesa)
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