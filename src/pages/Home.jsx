import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components';
import Colecao from '../components/Colecao';

function Home() {
  const HomeStaled = styled.div`
     max-width: 1300px;
  `
  
  return (
    <div>
      <Colecao/>
      <Card/>
    </div>
  )
}

export default Home