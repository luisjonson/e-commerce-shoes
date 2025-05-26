export default class UserModel {
  constructor({ id, nome, email, senha }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataCadastro = new Date();
    this.ativo = true;
  }

  get primeiroNome() {
    return this.nome.split(' ')[0];
  }

  isEmailValido() {
    return /\S+@\S+\.\S+/.test(this.email);
  }
  
}