import styled from 'styled-components';
import Tiket_oferta from '../components/Tiket_oferta';
import Secondary_button from './button/Secondary_button';
import collection from '../assets/collection-3.png'

const Card_ofertaStyled = styled.div`
   margin-bottom: 40px;
   display: flex;
   justify-content: space-between;
   flex-direction: row;
   & .conteudo{
     width: 405px;
     background-color: var(--color-surface-light);
     border-radius: 8px;
     position: relative;
     overflow: hidden;  
      & .primary{
        width: 153px;
        position: absolute;
        bottom: 20px;
        left: 20px;
        background-color: var(  --light-gray-3);
        color: var(--primary);
        font-weight: bold;
      }
  }
  
  & img{
    width: 405px;
    height: 251px;
  }
`
const Card_oferta = (
  {
    oferta = 30,
    alt = 'Hadfone'
  }
) => {
  return (
    <Card_ofertaStyled >
      <div className="conteudo">
        <Tiket_oferta valor_oferta={oferta} />
        <img src={collection} alt={alt}></img>
        <Secondary_button className='primary'>Comprar</Secondary_button>
      </div>
    </Card_ofertaStyled>
  )
}

export default Card_oferta