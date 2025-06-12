import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import FormCard from "../components/FormCard";
import InputWithLabel from "../components/InputWithLabel";
import Primary_button from "../components/button/Primary_button";
import MsgError from '../components/msg_alert/MsgWarn';
import auth from "../services/AuthServer";
import { useUser } from '../contexts/UserContext';
import Cookies from 'js-cookie';


const LoginStyled = styled.div`
  & .acesso{
    display: flex;
  }
  
  & button{
    width: 100%;
  }
`
const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [termo, setTermo] = useState(false)
  const [msgError, setMsgError] = useState('')
  const { login: setUserContext } = useUser();

  const handerSubimit = async (e) => {
    e.preventDefault();
    const user = {
      login,
      senha,
      termo
    }
    
    try {
      await auth.login(user)
      const dados = await auth.usuarioLogado()
      Cookies.set('user', JSON.stringify({ userLogado }));
      setUserContext(dados)

      navigate('/',{
        state:{msg: 'Login realizado com sucesso!'}
      })

    } catch (error) {
      console.log(error)
      setMsgError(error.response.data.erro)
    }
  }

  return (
    <LoginStyled>
      {msgError && <MsgError msg={msgError} />}
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