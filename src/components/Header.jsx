import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-header.svg'
import carrinho from '../assets/mini-cart.svg'
import search from '../assets/Search.svg'
import userDefaut from '../assets/userDefaut.svg'
import ingrenagem from '../assets/ingrenagem.svg'
import { useUser } from '../contexts/UserContext'
import '../css/Header.css'
import MsgSucess from './msg_alert/MsgSucess'
import HoverMenu from './HoverMenu'
import { useState } from 'react'


const Header = () => {
const location = useLocation();
const mensagem = location.state?.msg;
const { user } = useUser();
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  // const userLogado = user;
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('login')
  }
  return (
  <div className='container'>
    { mensagem && <MsgSucess msg={mensagem}/>}
      <div className='conteiner-header'>
        <div className='search'>
          <img src={logo} alt="Logo" />
          <div className="input-wrapper">
            <input type="text" placeholder="Pesquisar produto..." />
            <img id='icon-search' src={search} alt="Logo" />
          </div>
          <NavLink to="cadastre" >Cadastre-se</NavLink>
          <button onClick={handleLogin} className='btn-primary'>Entrar</button>
          <div className="carrinho">
            <img src={carrinho} alt="Carrinho" id='carrinho' />
            <span>0</span>
          </div>
          <div id='userLogin'>
            <img id='userFoto' src={userDefaut} alt="Imagem Usuário" />
            <div id='user-inf'>
              {user ? <p>{user.userLogado.nome}</p> : <p>Não está logado</p>}
              {user && <p>{user.userLogado.email}</p>}
              <div>
                <img className="hover-rotate" src={ingrenagem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
              </div>
            </div>
            {show && (
              <div id='showMenu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                 <HoverMenu />
              </div>
            )}
          </div>
        </div>

        <nav className='navegacao'>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/produtos">Produtos</NavLink></li>
            <li><NavLink to="/categorias">Categorias</NavLink></li>
            <li><NavLink to="/meusPedidos">Meus Pedidos</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header