import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Cadastro = () => {

  const LoginStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* background: linear-gradient(to bottom, Var(--primary-rgba), var(--secondary-rgba));  */
    
    & .content-login{
      display: flex;
      flex-direction: column;
      padding: 1rem;
      width: 90vw;
      min-height: 60vh; 
      max-width: 400px;
      box-shadow: 0 4px 12px #351313; 
      background: linear-gradient(to bottom, Var(--primary-rgba), var(--secondary-rgba)); 
      border-radius: 0.4rem;
      
      & span {
        font-size: 2rem;
        font-family: var(--font-family-padrao);
        font-weight: bold;
        text-align: center;
        display: block;
      }

      & form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
      }

      & form > div {
        display: flex;
        flex-direction: column;
        gap: 1.5rem; 
      }

      & label {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
      }

      & input[type="checkbox"] {
        width: 16px;
        height: 16px;
        position: relative; 
        cursor: pointer;
      }

      & .checkbox-label {
        display: flex;
        flex-direction: row;
        align-items: center; 
        gap: 0.1rem;
        font-size: 0.9rem;
        color: var(--dark-gray);
        cursor: pointer; 
      }
    }
  `
  const handerSubimit = () => {
    alert("Deu certo")
  }

  return (
    <LoginStyled>
      <div className='content-login'>
        <form onSubmit={handerSubimit}>
          <span>Cadastro</span>
          <div>
            <label>Nome
              <input type="text" />
            </label>
            <label>E-mail
              <input type="email" />
            </label>
            <label>Senha
              <input type="password" />
            </label>
            <label>Confirmar senha
              <input type="password" />
            </label>
             <label className="checkbox-label">
              <input type="checkbox" required /> Eu aceito os termos de uso e políticas de privacidade 
            </label>
          </div>
          <button type='submit' className='primary'>Cadastrar</button>
        </form>
      </div>
    </LoginStyled>
  )
}

export default Cadastro
