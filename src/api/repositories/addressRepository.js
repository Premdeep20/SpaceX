import axios from 'axios';

export const getAddress = async () => {
    try {
        const response = await axios.get(`https://api.spacexdata.com/v3/payloads`);
        return response;
    } catch (error) {
        return error;
    }
};

