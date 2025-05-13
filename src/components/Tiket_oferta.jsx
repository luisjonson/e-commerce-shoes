import styled from 'styled-components';

function Tiket_oferta({ valor_oferta, className }) {
  return (
    <>
      <div className={className}>
        <p>{valor_oferta}% OFF</p>
      </div>
    </>
  )
}

export default Tiket_oferta