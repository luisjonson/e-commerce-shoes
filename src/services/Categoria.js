import { APIBACKEND } from ".";

const findAll = async () => {
    try {
        return await APIBACKEND.get('/categorias');
        
    } catch (error) {
        throw error;
    }
};

export default {findAll}
