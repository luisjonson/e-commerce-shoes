import Carousel from '../components/Carousel';
import styled from 'styled-components';
import Card from '../components/Card';
import Colecao from '../components/Colecao';
import Card_slider from '../components/Card_slider'
import Card_oferta from '../components/Card_oferta';


function Home() {
  const HomeStaled = styled.div`
    margin: 50px;

    & .destaques {
      max-width: 100%; /* ou o mesmo que seus cards usam */
      margin: 0 auto; /* centraliza */
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
      <Card />
    </HomeStaled>
  )
}

export default Home