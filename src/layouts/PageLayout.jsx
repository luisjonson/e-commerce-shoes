import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Ofertas_Especial from '../components/Ofertas_Especial'

function PageLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Ofertas_Especial />
            <Footer />
        </>
    )
}

export default PageLayout