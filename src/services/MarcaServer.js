import { APIBACKEND } from ".";

const findAll = async () => {
    try {
        return await APIBACKEND.get('/marcas');
        
    } catch (error) {
        throw error;
    }
};

export default {findAll}
