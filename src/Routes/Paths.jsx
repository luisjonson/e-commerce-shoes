import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from '../layouts/PageLayout'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Notfound from '../pages/Notfound'
import Produto from '../pages/Produto'
import Produtos from '../pages/Produtos'
import CadastroProduto from '../pages/CadastroProduto'

const Paths = () => {
    return (
        <>
            <BrowserRouter basename="/e-commerce-shoes">
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/cadastroProduto" element={<CadastroProduto />} />
                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/produto/:id" element={<Produto />} />
                    </Route>
                    <Route path='cadastre' element={<Cadastro/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Paths