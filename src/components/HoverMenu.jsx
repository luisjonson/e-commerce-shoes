import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HoverMenuStyled = styled.div`
  background-color: red;
  position: relative;
  top: 0px;
  left: 0;
  background: white;
  border: 1px solid gray;
  padding: 0px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 10;
`

const HoverMenu = () => {
  return (
    <HoverMenuStyled>
      <ul>
        <li><NavLink to='/cadastroProdutos'>Cadastro Produto</NavLink></li>
        <li><NavLink to='/cadastroCatergorias'>Cadastro Categoria</NavLink></li>
        <li><NavLink to='/cadastroMarcas'>Cadastro Marca</NavLink></li>
        <li><NavLink to='/cadastroUsuarios'>Cadastro Usuário</NavLink></li>
      </ul>
    </HoverMenuStyled>
  )
}

export default HoverMenu