import { createContext, ReactNode, useEffect, useState } from "react";
import { db } from   "../service/firebase";
import { uid } from "uid";
import { onValue, ref, remove, set, update } from "firebase/database";

type ApiDataContextProps = {
    children: ReactNode;
}

type ContextProps = { 
    despesas: any[];
    tituloDespesa:string;
    valorDespesa:string;
    inputAlterar: boolean
    deletarDados: (des: any) => void
    alterarDados: (despesaAlterada: any) => void
    IdDespesasAlterada: (des: any) => void
    salvarDadosNoDataBase: (despesasAdicionadas: any) => void
};

export const ApiDataContext = createContext<ContextProps>(null!)

export const ApiDataProvider = ({children}:ApiDataContextProps) => {
    
    const [despesas, setDespesas] = useState<any[]>([]);
    const [inputAlterar, setInputAlterar] = useState(false);
    const [despesasAlteradaID, setDespesasAlteradaID] = useState({})
    const [tituloDespesa, setTituloDespesa] = useState("")
    const [valorDespesa, setValorDespesa] = useState("")
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
    //salber os dados no banco de dados
    const salvarDadosNoDataBase = (despesasAdicionadas: any)=>{
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            despesasAdicionadas,
            uuid,  
        });
        
    }
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
    const IdDespesasAlterada = (des: any)=>{
        setInputAlterar(true)
        setDespesasAlteradaID(des.uuid)
        setTituloDespesa(des.despesasAdicionadas.tituloDespesa)
        setValorDespesa(des.despesasAdicionadas.valorDespesa)
    }
    return(
        <ApiDataContext.Provider value={{inputAlterar,IdDespesasAlterada,valorDespesa,tituloDespesa,alterarDados,deletarDados,salvarDadosNoDataBase, despesas,}}>
            {children}
        </ApiDataContext.Provider>
    )
}