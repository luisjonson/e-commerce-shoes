import { NavLink } from "react-router-dom";
import FormCard from "../components/FormCard"
import InputWithLabel from "../components/InputWithLabel"
import Primary_button from "../components/button/Primary_button";
import styled from 'styled-components';

const LoginStyled = styled.div`
  & .acesso{
    display: flex;
  }
  
  & button{
    width: 100%;
  }
`
const Login = () => {
  return (
    <LoginStyled>
      <FormCard title="Login">
        <InputWithLabel label="Login" type="email" required/>
        <InputWithLabel label="Senha" type="password" required/>
        <div className="acesso">
          <InputWithLabel label="Lembra meu acesso" type="checkbox"></InputWithLabel>
          <NavLink>esqueceu sanha</NavLink>
        </div>
        <Primary_button type='submit' className='primary'>Entrar</Primary_button>
      </FormCard>
    </LoginStyled>
  )
}

export default Login