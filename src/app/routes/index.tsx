import { BrowserRouter, Routes, Route} from "react-router-dom"
import { HomePage } from "../page/HomePage"

export const Rotas =({children}:any)=>{
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}