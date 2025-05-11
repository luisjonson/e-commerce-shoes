import Carousel from '../components/Carousel';
import styled from 'styled-components';
import Card from '../components/Card';
import Colecao from '../components/Colecao';
import Card_slider from '../components/Card_slider'


function Home() {
  const HomeStaled = styled.div`
  `
  return (
    <HomeStaled>
      <Carousel settings={{
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { clickable: true },
        loop: true
      }}>
        <Card_slider />
        <Card_slider />
        <Card_slider />
        <Card_slider />
        <Card_slider />
        <Card_slider />
      </Carousel>
      <Colecao />
      <Card />
    </HomeStaled>
  )
}

export default Home