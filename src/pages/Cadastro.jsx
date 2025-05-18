import FormCard from "../components/FormCard";
import InputWithLabel from "../components/InputWithLabel";
import Primary_button from '../components/button/Primary_button';

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
          <Primary_button type='submit' style={{width: '100%'}} >Cadastrar</Primary_button>
        </FormCard>
      </form>
    </>
  )
}

export default Cadastro
