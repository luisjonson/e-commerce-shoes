
import { APIBACKEND } from ".";

const salvar = async (UserModel) => {
    try {
        const request = await APIBACKEND.post('/users', UserModel);
        return request.data;
    } catch (error) {
        throw error;
    }
};

export default { salvar };