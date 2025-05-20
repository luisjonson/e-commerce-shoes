import styled from 'styled-components';

const Tiket_ofertaStyled = styled.div`
      margin: 0.5rem;
      width: 48px;
      height: 16px;
      display: flex;
      border-radius: 14.5px;
      align-items: center;
      justify-content: center;
      background-color: var(--green-limon);

    & p {
      margin: 0;
      font-size: 6px;
      font-weight: bold;
    }
  `


function Tiket_oferta({ valor_oferta }) {
  return (
    <Tiket_ofertaStyled>
      <p>{valor_oferta}% OFF</p>
    </Tiket_ofertaStyled>
  )
}

export default Tiket_oferta