import styled from "styled-components"
import Primary_button from "./button/Primary_button"

const OfertaEspecialStaled = styled.div`
  margin: 100px;
  max-height: 100%;
  & span{
    color: var(--primary);
  }
`

const OfertaEspecial = ({
  className,
  children

}) => {
  
  return (
    <OfertaEspecialStaled className={className}>
      <span>Oferta Especial</span>
      {children}
      <Primary_button>Ver Oferta</Primary_button>
    </OfertaEspecialStaled>
  )
}

export default OfertaEspecial