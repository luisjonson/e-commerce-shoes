export default class UserModel {
  constructor({ 
    id = null,
    nome = ''
  }={}) {
    this._id = id;
    this._nome = nome;
  }

  get id(){
    return this_.id
  }

  get nome() {
    return this._nome.split(' ')[0];
  }

}