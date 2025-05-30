import styled from 'styled-components'
import CheckboxLabel from '../components/checkboxLabel'
import SelectMenu from '../components/SelectMenu'
import CardProduto from '../components/CardProduto'
import { Generos } from '../ultis/Generos'
import { Estados } from '../ultis/Estados'
import { useEffect, useState } from 'react'
import { API } from '../services';

const ProdutoStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .content {
    width: 85%;
    .content-filtro{
      height: 15vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap
    }

    .filtro{
      display: flex;
      gap:10px;
      padding: 5px;
      #categoria-filtro{
        width: 308px;
        border: 15px solid var(--white);
        margin-bottom: 2vh;
        background-color: var(--white);
        h3{
          margin-top:  10px;
          margin-bottom:  10px;
        }
      }

      .produto{
        width: 100%;
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
      }
    }
  }
`
const Produtos = () => {

  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    const request = await API.get('/products')
    setProdutos(request.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

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
            <h3>Gênero</h3>
            <CheckboxLabel>
              <label>{Generos.MASCULINO}</label>
            </CheckboxLabel>
            <CheckboxLabel>
              <label>{Generos.FEMININO}</label>
            </CheckboxLabel>
            <CheckboxLabel>
              <label>{Generos.UNISEX}</label>
            </CheckboxLabel>

            <h3>Estado</h3>
            <CheckboxLabel>
              <label>{Estados.NOVO}</label>
            </CheckboxLabel>
            <CheckboxLabel>
              <label>{Estados.USADO}</label>
            </CheckboxLabel>
          </div>

          <div className='produto'>
            <ul>
              {produtos.length > 0 && produtos.map((prod) => (
                <div key={prod.id}>
                  <CardProduto
                    desconto={prod.price}
                    image={prod.image}
                    title={prod.title}
                    price={prod.price}>
                  </CardProduto>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ProdutoStyled>
  )
}

export default Produtos