import styled from 'styled-components';
import InputWithLabel from "../components/InputWithLabel"

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
      max-width: 25vw;
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
    }
    .primary{
      width: 100% !important;
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
             <InputWithLabel label='Nome' type="text" />
             <InputWithLabel label='E-mail' type="email" />
             <InputWithLabel label='Senha' type="password" />
             <InputWithLabel label='Confirmar senha' type="password" />
             <InputWithLabel label='Eu aceito os termos de uso e políticas de privacidade ' type="checkbox" />
          </div>
          <button type='submit' className='primary'>Cadastrar</button>
        </form>
      </div>
    </LoginStyled>
  )
}

export default Cadastro
