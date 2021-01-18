import axios from 'axios';
import {baseUrl} from './config'

export const createService = async (data) => {
    const response = await axios.post(baseUrl  + '/api/service/', data);

    return response;
};
export const getServices = async () => {
    const response = await axios.get(baseUrl  + '/api/service/');

    return response;
};
