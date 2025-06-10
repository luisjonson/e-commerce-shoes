import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card_oferta from '../components/Card_oferta';
import Card_slider from '../components/Card_slider';
import CardProduto from '../components/CardProduto';
import Carousel from '../components/Carousel';
import Colecao from '../components/Colecao';
import produtosServer from '../services/ProdutoServer';
import { porcentagemDesconto } from '../utils/Utils';

const HomeStaled = styled.div`
  width: 100%;
  & .destaques {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    .destaques-container{
      display: flex;
      flex-direction: column;
      
      .cards-container {
        display: flex;
        flex-direction: row;
        gap: 30px;
        flex-wrap: wrap;
      }

      /* .cards-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        } */
    }
  }

  .swiper-pagination-bullet-active{
    background-color: var(--primary);
  }

  .swiper-button-prev{
    color: var(--primary);
  }
  
  .swiper-button-next{
    color: var(--primary);
  }

  .section-destaque {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 80%;
    margin: 0 auto; 
    padding-bottom: 50px;
    
    ul{
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 9px;
    }
  }

`

function Home() {
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    const request = await produtosServer.findAll()
    setProdutos(request.data.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <HomeStaled >

      {produtos.length > 0 && (
        <Carousel settings={{
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: true,
          pagination: { clickable: false },
          loop: true
        }}>

        {produtos.filter(produto => produto.queimaEstoque).map((produto) => (
          <div key={produto.numsequencial}>
              <Card_slider
                text={produto.titulo}
                titulo={produto.titulo}
                descricao={produto.descricao}
                imag1={produto.linkImagem}
                imag2={produto.linkImagem}
              />
          </div>
        ))}
        </Carousel>
      )}

      {produtos.length > 0 && (
        <section className="section-destaque">
          <h4 className="titulo">Coleções em destaque</h4>
          <ul >
            {produtos.filter(prod => prod.queimaEstoque === true)
            .slice(0,3)
            .map((produto) => (
              <div key={produto.numsequencial}>
                <Card_oferta oferta={produto.preco} img={produto.linkImagem} alt={produto.titulo} />
              </div>
            ))}
          </ul>
        </section>
      )}

      <Colecao />

      {produtos.length > 0 && (
        <section className='section-destaque'>
          <h4 className='titulo'>Produtos em alta</h4>
          <ul>
            {produtos.map((produto) => (
              <div key={produto.numsequencial}>
                <CardProduto  
                  desconto={ produto.precoPromocional && porcentagemDesconto(produto.preco , produto.precoPromocional)}
                  image={produto.linkImagem} 
                  category={produto.category}
                  title={produto.titulo}
                  price={produto.preco}
                  valorComDesconto={produto.precoPromocional}
                />
              </div>
            ))}
          </ul>
        </section>
      )}

    </HomeStaled>
  )
}

export default Home