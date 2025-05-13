import Carousel from '../components/Carousel';
import styled from 'styled-components';
import Card from '../components/Card';
import Colecao from '../components/Colecao';
import Card_slider from '../components/Card_slider'
import Card_oferta from '../components/Card_oferta';


function Home() {
  const HomeStaled = styled.div`
    margin: 50px;
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
      <h4>Coleções em destaque</h4>
      <Card_oferta/>
      <Card_oferta/>
      <Colecao />
      <Card />
    </HomeStaled>
  )
}

export default Home