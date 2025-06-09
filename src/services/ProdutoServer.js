import { APIBACKEND } from ".";

const findAll = async () => {
    try {
        return await APIBACKEND.get('/produtos');
        
    } catch (error) {
        throw error;
    }
};

export default {findAll}
