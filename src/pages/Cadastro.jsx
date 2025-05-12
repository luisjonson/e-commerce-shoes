import styled from 'styled-components';
import InputWithLabel from "../components/InputWithLabel"
import FormCard from "../components/FormCard"

const Cadastro = () => {

  const handerSubimit = () => {
    alert("Deu certo")
  }

  return (
    <>
      <form onSubmit={handerSubimit}>
        <FormCard title="Cadastro">
          <InputWithLabel label='Nome' type="text" required/>
          <InputWithLabel label='E-mail' type="email" required/>
          <InputWithLabel label='Senha' type="password" required/>
          <InputWithLabel label='Confirmar senha' type="password" required/>
          <InputWithLabel label='Eu aceito os termos de uso e políticas de privacidade ' type="checkbox" required/>
          <button type='submit' style={{width: '100%'}} className='primary'>Cadastrar</button>
        </FormCard>
      </form>
    </>
  )
}

export default Cadastro
