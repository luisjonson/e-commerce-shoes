import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Estados } from '../utils/Estados'
import CardProduto from '../components/CardProduto'
import { Generos } from '../utils/Generos'
import CheckboxLabel from '../components/checkboxLabel'
import SelectMenu from '../components/SelectMenu'
import categoriaServer from '../services/CategoriaServer'
import marcaServer from '../services/MarcaServer'
import produtosServer from '../services/ProdutoServer'
import { capitalizeWords, porcentagemDesconto} from '../utils/Utils'
import GrupoBtn from '../components/GrupoBtn'
import { useUser } from '../contexts/UserContext'

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
  const [categorais, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const { user } = useUser();
  const [filtroSelecionada, setFiltroSelecionada] = useState('');

  async function buscarProdutos() {
    const request = await produtosServer.findAll()
    setProdutos(request.data.data);
  }

  async function buscarCategoria() {
    const categorais = await categoriaServer.findAll();
    setCategorias(categorais.data);
  }

   async function buscarMarca() {
    const marcas = await marcaServer.findAll();
    setMarcas(marcas.data);
  }

  useEffect(() => {
    buscarProdutos();
    buscarCategoria();
    buscarMarca();
  }, []);
  
  const produtosOrdenados = [...produtos].sort((a, b) => {
    
    switch (Number(filtroSelecionada)) {
      case 2:
        return parseFloat(a.preco) - parseFloat(b.preco);
      case 3:
        return porcentagemDesconto(parseFloat(a.precoPromocional), parseFloat(a.precoPromocional)) - porcentagemDesconto(parseFloat(b.preco), parseFloat(b.precoPromocional));
      case 4:
          return  (b.queimaEstoque ? 1 : 0) - (a.queimaEstoque ? 1 : 0);
      default:
        return a.titulo.localeCompare(b.titulo);
      }
    });

   const filtroProduto = [
    { id: 1, nome: 'Ordernar por: mais relavante ' },
    { id: 2, nome: 'Preço',},
    { id: 3, nome: 'Desconto'},
    { id: 4, nome: 'Queima estoque'},
  ];

  return (
    <ProdutoStyled>
      <div className="content">
        <div className='content-filtro'>
          <div className='resultado'>
            <h6>Resultados para "Tênis" - 389 produtos</h6>
          </div>
          {user && <GrupoBtn criar={true} rota="/cadastroProduto" />}
          <div className="orderBy">
            <SelectMenu onChange={(e) => setFiltroSelecionada(e.target.value)} colecao={filtroProduto}></SelectMenu>
          </div>
        </div>
        <div className='filtro'>
          <div id='categoria-filtro'>
           <label>Filtrar por</label>
           <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
            <h3>Marca</h3>
            {marcas.length > 0 && marcas.map((marca)=> (
                <CheckboxLabel key={marca.numsequencial}>
                  <label >{capitalizeWords(marca.nome)}</label>
                </CheckboxLabel>
              )
            )}

            <h3>Categoria</h3>
            {categorais.length > 0 && categorais.map((categoria) =>(
                <CheckboxLabel key={categoria.numsequencial}>
                  <label >{capitalizeWords(categoria.nome)}</label>
                </CheckboxLabel>
              ) 
            )}

            <h3>Gênero</h3>
            <ul>
              {Object.entries(Generos).map(([key, value]) => (
                <CheckboxLabel key={key}>
                  <label >{value}</label>
                </CheckboxLabel>
              ))}
            </ul>

            <h3>Estado</h3>
            {Object.entries(Estados).map(([key, value]) => (
              <CheckboxLabel key={key}>
                <label >{value}</label>
              </CheckboxLabel>
            ))}

          </div>

          <div className='produto'>
            <ul>
              {produtosOrdenados.length > 0 && produtosOrdenados.map((prod) => (
                <div key={prod.numsequencial}>
                  <CardProduto
                    desconto={porcentagemDesconto(prod.preco , prod.precoPromocional)  }
                    image={prod.linkImagem}
                    title={prod.titulo}
                    price={prod.preco}
                    category={prod.category}
                    valorComDesconto={prod.precoPromocional}
                    queimaEstoque={prod.queimaEstoque}
                  >
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