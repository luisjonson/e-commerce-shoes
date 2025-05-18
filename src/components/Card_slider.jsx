import React from 'react';
import styled from 'styled-components';
import sapato_slide from '../assets/sapato_slider.svg'
import five from '../assets/five.jpeg'
import Primary_button from './button/Primary_button';

const Card_sliderConteiner = styled.div`
  width: 100%;
  height: 450px;
  background-color: var(--light-gray-3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 130px;
  
  & .descricao span{
    color: var(--warning-rgba);
  }

  & .queima {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
    font-size: 20px;
    & .descricao img{
      position: absolute;
      flex-direction: column-reverse;
    }

  }

  & .item img{
    width: 60vw; 
    height: 130vh;
  }
`

const Card = () => {
  const queimaOfertas = [
    {
      id: 1,
      text: 'Melhores ofertas personalizadas',
      titulo: 'Queima de estoque Nike',
      descricao:
        'Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.',
      imag1: five,
      imag2: sapato_slide,
    },
  ];

  return (
    <Card_sliderConteiner>
      {queimaOfertas.map((produto) => (
        <React.Fragment key={produto.id}>
          <div className='descricao'>
            <span>{produto.text}</span>
            <div className='queima'>
              <h1>{produto.titulo}</h1>
              <img src={produto.imag1} alt="Queima de estoque" />
            </div>
            <h5 className='text-medium'>{produto.descricao}</h5>
            <Primary_button className='primary'>Ver Oferta</Primary_button>
          </div>
          <div className='item'>
            <img src={produto.imag2}></img>
          </div>
        </React.Fragment>
      ))}
    </Card_sliderConteiner>
  )
}

export default Card