import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-header.svg'
import carrinho from '../assets/mini-cart.svg'
import search from '../assets/Search.svg'
import { useNavigate } from 'react-router-dom';
import '../css/Header.css'
import MsgSucess from './msg_alert/MsgSucess';
import { useLocation } from 'react-router-dom';

const Header = () => {
const location = useLocation();
const mensagem = location.state?.msg;

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('login')
  }
  return (
    <>
    { mensagem && <MsgSucess msg={mensagem}/>}
      <div className='container'>
        <div className='search'>
          <img src={logo} alt="Logo" />
          <div className="input-wrapper">
            <input type="text" placeholder="Pesquisar produto..." />
            <img id='icon-search' src={search} alt="Logo" />
          </div>
          <NavLink to="cadastre">Cadastre-se</NavLink>
          <button onClick={handleLogin}>Entrar</button>
          <div className="carrinho">
            <img src={carrinho} alt="Carrinho" />
            <span>0</span>
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

    </>
  )
}

export default Header