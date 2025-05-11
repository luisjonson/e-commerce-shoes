import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import PageLayout from '../layouts/PageLayout'
import Notfound from '../pages/Notfound'
import Produto from '../pages/Produto'
import Login from '../pages/Login'

const Paths = () => {
    return (
        <>
            <BrowserRouter basename="/e-commerce-shoes">
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/produto/:id" element={<Produto />} />
                    </Route>
                    <Route path='cadastre' element={<Login/>}/>
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Paths