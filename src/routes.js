import { Routes , Route} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";

export const RouterPath = () => {
    return(
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            {/* <Route path="/signup" element={<} */}
        </Routes>
    )
}