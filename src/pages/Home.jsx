import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card_oferta from '../components/Card_oferta';
import Card_slider from '../components/Card_slider';
import CardProduto from '../components/CardProduto';
import Carousel from '../components/Carousel';
import Colecao from '../components/Colecao';
import { API } from '../services';


function Home() {
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    const request = await API.get('/products')
    setProdutos(request.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);


  const HomeStaled = styled.div`
    margin: 50px;

    & .destaques {
      max-width: 100%; 
      margin: 0 auto; 
      padding-top: 100px;
    }

    & .titulo {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }

    & .cards-container {
      display: flex;
      justify-content: space-between;
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

  `
  return (
    <HomeStaled>
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
      <section class="destaques">
        <h4 class="titulo">Coleções em destaque</h4>
        <div className='cards-container'>
          <Card_oferta />
          <Card_oferta />
          <Card_oferta />
        </div>
      </section>
      <Colecao />


      {produtos.length > 0 && (
        <section class="destaques">
          <h4 class="titulo">Produtos em destaque</h4>
          <div c>
            {produtos.map((produto) => (
              <CardProduto key={produto.id} image={produto.image} category={produto.category} title={produto.title}
                price={produto.price} alt={produto.title}/>
            ))}
          </div>
        </section>
      )}

    </HomeStaled>
  )
}

export default Home