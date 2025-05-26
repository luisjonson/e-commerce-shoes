import { useEffect, useState } from 'react';
import FormCard from "../components/FormCard";
import InputWithLabel from "../components/InputWithLabel";
import Primary_button from '../components/button/Primary_button';
import MsgError from '../components/msg_alert/MsgWarn';
import MsgSucess from '../components/msg_alert/MsgSucess';
import CadastroUserService  from '../services/CadastroUser';

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [termos, setTermos] = useState(false)
  const [msgError, setMsgError] = useState('')
  const [msgSucess, setMsgSucess] = useState('')

  const handerSubimit = async (e) => {
    e.preventDefault();
    const user = {
      nome: nome,
      email: email,
      senha: senha,
      confirmarSenha: confirmarSenha,
      termo: true,
      ativo: true
    }


    if (senha !== confirmarSenha) {
      setError('As senhas não conferem')
      return;
    }
    try {
      const dados = await CadastroUserService.salvar(user);
      setMsgSucess(dados.message);
      setMsgError('');
    } catch (error) {
      const msg = error.response.data.error;
      setMsgError(msg);
      setMsgSucess('');
    }
  }

  return (
    <>
      {msgError && <MsgError msg={msgError} />}
      {msgSucess && <MsgSucess msg={msgSucess} />}
      <form onSubmit={handerSubimit}>
        <FormCard title="Cadastro">
          <InputWithLabel label='Nome' type="text" value={nome} onChange={e => setNome(e.target.value)} required />
          <InputWithLabel label='E-mail' type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <InputWithLabel label='Senha' type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
          <InputWithLabel label='Confirmar senha' type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} required />
          <InputWithLabel label='Eu aceito os termos de uso e políticas de privacidade ' value={termos} onChange={e => setTermos(e.target.value)} type="checkbox" required />
          <Primary_button type='submit' style={{ width: '100%' }} >Cadastrar</Primary_button>
        </FormCard>
      </form>
    </>
  )
}

export default Cadastro
