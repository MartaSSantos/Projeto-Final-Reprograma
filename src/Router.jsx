import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Footer } from "./components/Footer"
import { Inicio } from "./pages/Inicio"
import { Informacao } from "./pages/Informacao"
import { Beneficios } from "./pages/Beneficios"
export function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/informacao" element={<Informacao />} />
                <Route path="/beneficios" element={<Beneficios />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}