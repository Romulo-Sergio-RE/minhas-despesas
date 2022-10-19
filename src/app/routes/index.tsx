import { BrowserRouter, Route , Routes} from "react-router-dom"
import { HomePage } from "../page/homePage"

export const RoutesPath = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}