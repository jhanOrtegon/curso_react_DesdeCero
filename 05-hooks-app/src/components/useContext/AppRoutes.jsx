import { Routes, BrowserRouter, Route } from "react-router-dom"
import { AboutScreen } from "./AboutScreen"
import HomeScreen from "./HomeScreen"
import LoginScreen from "./LoginScreen"
import Navbar from "./Navbar"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container my-4">
                <Routes>
                    <Route path="/login" element={<LoginScreen />} exact />
                    <Route path="/about" element={<AboutScreen />} exact />
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </div>

        </BrowserRouter>
    )

}
