import { NavLink } from "react-router-dom";
import { useState } from 'react';
import FormCard from "../components/FormCard"
import InputWithLabel from "../components/InputWithLabel"
import Primary_button from "../components/button/Primary_button";
import styled from 'styled-components';
import auth from "../services/auth";
import MsgError from '../components/msg_alert/MsgWarn';
import MsgSucess from '../components/msg_alert/MsgSucess';


const LoginStyled = styled.div`
  & .acesso{
    display: flex;
  }
  
  & button{
    width: 100%;
  }
`
const Login = () => {

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [termo, setTermo] = useState(false)
  const [msgError, setMsgError] = useState('')
  const [msgSucess, setSucess] = useState('')

  const handerSubimit = async (e) => {
    e.preventDefault();
    const user = {
      login,
      senha,
      termo
    }
    
    try {
      const dados = await auth.login(user)
      setSucess(dados)
      setMsgError('')

    } catch (error) {
      setMsgError(error.response.data.erro)
      setSucess('')
    }
  }

  return (
    <LoginStyled>
      {msgError && <MsgError msg={msgError} />}
      {msgSucess && <MsgSucess msg={msgSucess} />}
      <form onSubmit={handerSubimit}>
        <FormCard title='Login'>
          <InputWithLabel 
            label="Login"
            type="email" 
            value={login} 
            placeholder="email"
            onChange={e => setLogin(e.target.value)} 
            required 
          />

          <InputWithLabel 
            label="Senha" 
            type="password" 
            value={senha} 
            placeholder="******"
            onChange={e => setSenha(e.target.value)} 
            required 
          />

          <div className="acesso">
            <InputWithLabel 
              label="Lembra meu acesso" 
              type="checkbox" 
              value={termo} 
              onChange={e => setTermo(e.target.checked)}
            />

            <NavLink>esqueceu sanha</NavLink>
          </div>
          <Primary_button type='submit' className='primary'>Entrar</Primary_button>
        </FormCard>
      </form>
    </LoginStyled>
  )
}

export default Login