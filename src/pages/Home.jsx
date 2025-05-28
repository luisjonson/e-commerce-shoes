import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card_oferta from '../components/Card_oferta';
import Card_slider from '../components/Card_slider';
import CardProduto from '../components/CardProduto';
import Carousel from '../components/Carousel';
import Colecao from '../components/Colecao';
import { API } from '../services';

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

  & .swiper-pagination-bullet-active{
    background-color: var(--primary);
  }

  & .swiper-button-prev{
    color: var(--primary);
  }
  
  & .swiper-button-next{
    color: var(--primary);
  }


  .section-destaque {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-bottom: 30px;
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
    ul div{
      width:calc(25% -15px);
      border-radius: 8px;
    }
  }

`

function Home() {
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    const request = await API.get('/products')
    setProdutos(request.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <HomeStaled >
      <Carousel settings={{
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: true,
        pagination: { clickable: false },
        loop: true
      }}>
        <Card_slider />
        <Card_slider />
        <Card_slider />
        <Card_slider />
        <Card_slider />
        <Card_slider />
      </Carousel>
      {produtos.length > 0 && (
      <section className="destaques">
        <div className="destaques-container">
          <h4 className="titulo">Coleções em destaque</h4>
          <div className='cards-container'>
            <Card_oferta />
            <Card_oferta />
            <Card_oferta />
          </div>
        </div>
      </section>
      )}

      <Colecao />

      {produtos.length > 0 && (
        <section className='section-destaque'>
          <h4 className='titulo'>Produtos em destaque</h4>
          <ul>
            {produtos.map((produto) => (
              <div key={produto.id}>
                <CardProduto desconto='100' image={produto.image} category={produto.category} title={produto.title}
                  price={produto.price} alt={produto.title} />
              </div>
            ))}
          </ul>
        </section>
      )}

    </HomeStaled>
  )
}

export default Home