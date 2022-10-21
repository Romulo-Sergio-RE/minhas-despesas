import { createContext,ReactNode,useState } from "react";
import { UseApi } from "../hooks/apiHook";

type ExpenseContextProps = {
    children: ReactNode;
}
type ContextProps = { 
    allExpense: any[];
    message: {message: string};
    expenseById: {title: string,value: string};
    getAllExpense: () => Promise<void>;
    postExpense: (title:string, value:string,date:string) => Promise<void>;
    getAllExpenseById: (id: string) => Promise<void>;
    deleteExpense: (id: string) => Promise<void>;
    updateExpense: (id: string,title: string,value: string,date:string) => Promise<void>;
};
export const ApiDataContext = createContext<ContextProps>(null!);

export const ApiDataProvider = ({children}:ExpenseContextProps)=>{
    const[allExpense, setAllExpense] = useState<any[]>([]);
    const[expenseById, setExpenseById] = useState<any>({});
    const[message, setMessage] = useState<any>({});
    // hook para usar a Api
    const api = UseApi();

    const getAllExpense = async () =>{
        const dados = await api.getAllExpense()
        setAllExpense(dados)
    }
    const getAllExpenseById = async (id: string) =>{
        const dados = await api.getExpenseById(id)
        setExpenseById(dados)
    }
    const postExpense = async (title:string, value:string, date:string) =>{
        const dados = await api.postExpense(title, value, date)
        setMessage(dados)
    }
    const deleteExpense = async (id:string) =>{
        const dados = await api.deleteExpense(id)
        setMessage(dados)
    }
    const updateExpense = async (id: string,title: string,value: string, date:string) =>{
        const dados = await api.updateExpense(id, title, value , date)
        setMessage(dados)
    }
    return(
        <ApiDataContext.Provider 
            value={
                {
                    getAllExpense,
                    getAllExpenseById,
                    postExpense,
                    deleteExpense,
                    updateExpense,
                    allExpense,
                    expenseById,
                    message
                }
            }>
            { children }
        </ApiDataContext.Provider>
    )
}