import { APIBACKEND } from ".";

const login = async (user) => {
  return await APIBACKEND.post("/login", user);
};

const usuarioLogado = async () => {
  return await APIBACKEND.get("/auth/usuario-logado");
};

export default {
  login,
  usuarioLogado,
};
