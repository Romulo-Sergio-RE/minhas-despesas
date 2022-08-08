import { useEffect, useState } from "react";
import { AdicionarDespesas } from "../../components/AddDespesas";
import { CardDespesas } from "../../components/CardDespesas";
import { ContainerHomePage,ContainerInfo } from "./homePage";
import { db } from   "../../service/firebase";
import { uid } from "uid";
import { onValue, ref, remove, set, update } from "firebase/database";

export const HomePage = () =>{
    const [despesas, setDespesas] = useState<any[]>([]);
    const [inputAlterar, setInputAlterar] = useState(true);
    const [despesasAlteradaID, setDespesasAlteradaID] = useState({})

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
    }
    // funcao para poder alterar os dados do bando
    const alterarDados = (despesaAlterada:any) =>{
        update(ref(db, `/${despesasAlteradaID}`),{
            despesasAdicionadas:despesaAlterada,
            uuid:despesasAlteradaID,
        })
        setInputAlterar(true)
    }
    // funcao para poder pegar o id do meu dado que quero alterar
    const IdDespesasAlterada = (des: any)=>{
        setInputAlterar(false)
        setDespesasAlteradaID(des.uuid)
    }
    
    return(
        <ContainerHomePage>
            <h1>Minhas Despesas</h1>
            {inputAlterar ?
                <AdicionarDespesas 
                    labelTitulo="Titulo"
                    labelValor="Valor"
                    despesasAdicionadas={
                        (novasDespesas)=> salvarDadosNoDataBase(novasDespesas)
                    }
                /> 
                :
                <AdicionarDespesas 
                    labelTitulo="Alterar Titulo"
                    labelValor="Alterar Valor"
                    despesasAdicionadas={
                        (despesaAlterada)=> alterarDados(despesaAlterada)
                    }
                /> 
            }
            <ContainerInfo>
                <h2>Quantidade de Despesas: {despesas.length}</h2>
                <h2>Soma das Despesas: R$ {valorTotalDespesas(despesas)}</h2>
            </ContainerInfo>

            {
                despesas.map((e)=>{
                    return(
                        <CardDespesas 
                            key={e.despesasAdicionadas.tituloDespesa}
                            nome={e.despesasAdicionadas.tituloDespesa}
                            valor={e.despesasAdicionadas.valorDespesa} 
                            deleteDespesas={() => deletarDados(e)}    
                            alterarDespesas={() => IdDespesasAlterada(e)}               
                        />
                    )
                })
            }
            
        </ContainerHomePage>
    )
}