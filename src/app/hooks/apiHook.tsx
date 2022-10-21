import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/"
})

export const UseApi = ()=> ({
    getAllExpense: async ()=>{
        const response = await api.get("expense")
        return response.data
    },
    getExpenseById: async (id:string)=>{
        const response = await api.get(`expense/${id}`)
        return response.data
    },
    postExpense: async (title: string, value:string)=>{
        const response = await api.post("expense",{
            "title":title,
            "value":value,
        })
        return response.data
    },
    updateExpense: async (id:string, title:string, value:string)=>{
        const response = await api.put(`expense/${id}`,{
            "title":title,
            "value":value,
        })
        return response.data
    },
    deleteExpense: async (id:string)=>{
        const response = await api.delete(`expense/${id}`)
        return response.data
    }
})
