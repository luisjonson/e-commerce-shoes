import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card_oferta from '../components/Card_oferta';
import Card_slider from '../components/Card_slider';
import CardProduto from '../components/CardProduto';
import Carousel from '../components/Carousel';
import Colecao from '../components/Colecao';
import { API } from '../services';

 const HomeStaled = styled.div`
    margin: 50px;

    & .destaques {
      max-width: 100%; 
      padding-top: 100px;
        
        & .titulo {
          margin-left: 1rem; 
          font-size: 20px;
          font-weight: bold;
          text-align: left;
          margin-bottom: 10px;
        }

        & .cards-container {
          display: flex;
          flex-direction: row;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: space-between;
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
      <section className="destaques">
          <h4 className="titulo">Coleções em destaque</h4>
          <div className='cards-container'>
            <Card_oferta />
            <Card_oferta />
            <Card_oferta />
          </div>
      </section>
      <Colecao />


      {produtos.length > 0 && (
        <section className="destaques">
          <h4 className="titulo">Produtos em destaque</h4>
          <div className='cards-container'>
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