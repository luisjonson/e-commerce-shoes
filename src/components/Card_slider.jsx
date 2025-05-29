import React from 'react';
import styled from 'styled-components';
import Primary_button from './button/Primary_button';

const Card_sliderConteiner = styled.div`
  width: 100%;
  height: 450px;
  background-color: var(--light-gray-3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 130px;
  
  .descricao span{
    color: var(--warning-rgba);
  }

  .queima {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    .descricao img{
      position: absolute;
      flex-direction: column-reverse;
    }
  }

  .item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 15px;
    img{
      width: 50%; 
      height: 90%;
      object-fit: contain;
    }
  }
`

const Card = ({text, titulo,descricao,imag1,imag2}) => {
  return (
    <Card_sliderConteiner>
        <React.Fragment >
          <div className='descricao'>
            <span>{text}</span>
            <div className='queima'>
              <h1>{titulo}</h1>
              <img src={imag1} alt="Queima de estoque" />
            </div>
            <h5 className='text-medium'>{descricao}</h5>
            <Primary_button className='primary'>Ver Oferta</Primary_button>
          </div>
          <div className='item'>
            <img src={imag2}></img>
          </div>
        </React.Fragment>
    </Card_sliderConteiner>
  )
}

export default Card