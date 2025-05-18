
import styled from 'styled-components'
import Img_oferta_especialStaled from '../components/Img_oferta_especial'
import tenis from '../assets/tenis_oferta_epecial.svg'
import OfertaEspecial from './OfertaEspecial'


const Ofertas_Especial = () => {

    const OfertasEspecialStatyler = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        margin: 0 auto; 
        max-width: 100%; 
        align-items: center;
        justify-content: center;
        background-color: var(--white);

        & .oferta_especial{
            margin: 30px;
            width: 40%;
        }

        & .oferta_especial_conteudo{
            width: 60%;
        }
    `

    return (
        <OfertasEspecialStatyler>
            <Img_oferta_especialStaled className='oferta_especial' img={tenis} alt={"Tenis Oferta Especial"} />
            <OfertaEspecial className='oferta_especial_conteudo'>
                <h2>Air Jordan edição de Clecionador</h2>
                <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa voluptatibus, laboriosam tenetur perspiciatis debitis pariatur beatae architecto harum iusto. Doloribus molestias quas dolorem quod enim omnis, animi repudiandae aliquid amet?</h4>
            </OfertaEspecial>
        </OfertasEspecialStatyler>
    )
}

export default Ofertas_Especial