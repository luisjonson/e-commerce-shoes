import styled from 'styled-components'
import CheckboxLabel from '../components/checkboxLabel'
import SelectMenu from '../components/SelectMenu'
import CardProduto from '../components/CardProduto'

CheckboxLabel
const Produtos = () => {
  const ProdutoStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* background-color: red; */

    & .content {
      width: 85%;

      & .content-filtro{
      height: 15vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap
    }

      & .filtro{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        
        & #categoria-filtro{
          width: 308px;
          border: 15px solid var(--white);
          margin-bottom: 2vh;
          background-color: var(--white);

          & h3{
            margin-bottom:10px;
          }
        }
      }
    }
`

  return (
    <ProdutoStyled>
      <div className="content">
        <div className='content-filtro'>
          <div className='resultado'>
            <h6>Resultados para "Tênis" - 389 produtos</h6>
          </div>
          <div className='orderBy'>
            <SelectMenu></SelectMenu>
          </div>
        </div>

        <div className='filtro'>
          <div id='categoria-filtro'>
            <h3>Marka</h3>
            <ul>
              <li>
                <CheckboxLabel>
                  <label>Calenciaga</label>
                </CheckboxLabel>
              </li>
              <li>
                <CheckboxLabel>
                  <label>Calenciaga</label>
                </CheckboxLabel>
              </li>
              <li>
                <CheckboxLabel>
                  <label>Calenciaga</label>
                </CheckboxLabel>
              </li>
              <li>
                <CheckboxLabel>
                  <label>Calenciaga</label>
                </CheckboxLabel>
              </li>
            </ul>
          </div>
          <CardProduto className='cardProduto'  desconto={10}></CardProduto>
          <CardProduto desconto={10}></CardProduto>
          <CardProduto desconto={10}></CardProduto>
          <CardProduto desconto={10}></CardProduto>
        </div>
      </div>
    </ProdutoStyled>
  )
}

export default Produtos