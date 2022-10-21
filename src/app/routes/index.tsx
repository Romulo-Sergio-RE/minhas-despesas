import { BrowserRouter, Route , Routes} from "react-router-dom"
import { ApiDataProvider } from "../context/apiContext"
import { HomePage } from "../page/homePage"

export const RoutesPath = ()=>{
    return (
        <BrowserRouter>
            <ApiDataProvider>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </ApiDataProvider>
        </BrowserRouter>
    )
}