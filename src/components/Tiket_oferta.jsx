import styled from 'styled-components';

function Tiket_oferta({ valor_oferta}) {
  return (
    <>
      <div className='desconto'>
        <p>{valor_oferta}% OFF</p>
      </div>
    </>
  )
}

export default Tiket_oferta