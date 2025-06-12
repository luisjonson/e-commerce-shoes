import { APIBACKEND } from ".";

const login = async (user) => {
    try {
        return await APIBACKEND.post('/login', user);
    } catch (error) {
        throw error;
    }
}

const usuarioLogado = async () => {
    try {
        return await APIBACKEND.get('/auth/usuario-logado')
    } catch (error) {
        throw error;
    }
}

export default {
    login,
    usuarioLogado
}
