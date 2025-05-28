import styled from 'styled-components';
import Tiket_oferta from '../components/Tiket_oferta';
import Secondary_button from './button/Secondary_button';
import collection from '../assets/collection-3.png'

const Card_ofertaStyled = styled.div`
   margin: 0 auto;
   & .conteudo{
     width: 250px;
     height: 150px;
     background-color: var(--color-surface-light);
     border-radius: 8px;
     position: relative;
     overflow: hidden;  

      .tiket{
        position: absolute;
        bottom: 114px;
        left: 5px;
      }

      .primary{
        width: 76.5px;
        height: 24px;
        position: absolute;
        bottom: 10px;
        left: 10px;
        background-color: var(  --light-gray-3);
        color: var(--primary);
        font-weight: bold;
      }
  }
  
  & img{
    width: 100%;
    height: 100%;
  }
`
const Card_oferta = (
  {
    oferta,
    alt,
    img 
  }
) => {
  return (
    <Card_ofertaStyled >
      <div className="conteudo">
        <Tiket_oferta className='tiket' valor_oferta={oferta} />
        <img src={img} alt={alt}></img>
        <Secondary_button className='primary'>Comprar</Secondary_button>
      </div>
    </Card_ofertaStyled>
  )
}

export default Card_oferta