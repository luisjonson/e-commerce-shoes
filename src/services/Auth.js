import { APIBACKEND } from ".";

const login = async (user) => {
    try {
        return await APIBACKEND.post('/login', user);
    } catch (error) {
        throw error;
    }
}

export default {
    login
}
