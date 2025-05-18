import React from 'react'
import styled from 'styled-components';
import tenis from '../assets/tenis_template.svg'
import Tiket_oferta from '../components/Tiket_oferta'

const CardConteiner = styled.div`
  width: 292px;
  height: 469px;
  border-radius: 4px;
  overflow: hidden;
  margin: 50px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 10px;
  }
  
  & .conteudo {
    width: 292px;
    height: 321px;
    background-color: var(--white); // vermelho suave
    color: var(--dark);
    font-size: 20px;
    &.conteudo img{
      width: 250px;
      height: 240px;
    }
    
    
  } 
  & .informacao {
    /* padding: 16px; */
    &.informacao  #tipo{
      width: 35px;
      height: 24px;
      color: var(--light-gray);
    }
    
    &.informacao h3{
      font-size: 24px;
      color: var(--dark-gray-2-rgba);
    }
   
    & .valor{
      gap: 1rem;
      display: flex;
      align-items: flex-end;
      &.valor .descoto{
        text-decoration: line-through;
        font-size: 1.5rem;
        color: var(--light-gray);
      }
      
      &.valor .valordesconto{
        font-size: 2rem;
        font-weight: bold;
        color: var(--dark-gray);
      }
    }
  }
`

const Card = () => {
  return (
    <CardConteiner>
      <h4>Produto em alta</h4>
      <div className="conteudo">
        <Tiket_oferta valor_oferta="30" />
        <img src={tenis} alt='tenis'></img>
      </div>
      <div className="informacao">
        <p id='tipo'>Tênis</p>
        <h3>K-Swiss V8 - Masculino</h3>
        <div className='valor'>
          <p className='descoto'>$200</p>
          <p className='valordesconto'>$100</p>
        </div>
      </div>

    </CardConteiner>
  )
}

export default Card