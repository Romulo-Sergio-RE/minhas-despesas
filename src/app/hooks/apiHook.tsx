import axios from 'axios';

const api = axios.create({
    baseURL: "http:/localhost:5000"
})

export const useApi = ()=> ({
    getAllExpense: async ()=>{
        const response = await api.get("/expense")
        return response.data
    },
    getExpenseById: async (id:string)=>{
        const response = await api.get(`/expense/${id}`)
        return response.data
    }
})
