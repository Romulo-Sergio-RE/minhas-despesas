import { BrowserRouter, Routes, Route} from "react-router-dom"
import { ApiDataProvider } from "../context/ApiDataContext"
import { HomePage } from "../page/HomePage"

export const Rotas =({children}:any)=>{
    return (
        <BrowserRouter>
            {children}
            <ApiDataProvider>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </ApiDataProvider>
        </BrowserRouter>
    )
}