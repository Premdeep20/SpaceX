import axios from 'axios';

export const getHistory = async () => {
    try {
        const response = await axios.get(`https://api.spacexdata.com/v3/history`);
        return response;
    } catch (error) {
        return error;
    }
};

