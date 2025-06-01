import { APIBACKEND } from ".";

const login = async (user) => {
    try {
        const dados = await APIBACKEND.post('/login', user);
        return JSON.stringify(dados.data)
    } catch (error) {
        throw error;
    }
}

export default {
    login
}
