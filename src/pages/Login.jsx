import { NavLink } from "react-router-dom";
import FormCard from "../components/FormCard"
import InputWithLabel from "../components/InputWithLabel"
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
        <button type='submit' className='primary'>Entrar</button>
      </FormCard>
    </LoginStyled>
  )
}

export default Login