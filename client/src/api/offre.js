import axios from 'axios';
import {baseUrl} from './config'

export const createOffre = async (data) => {
    const response = await axios.post(baseUrl  + '/api/offre/', data);

    return response;
};
export const getServices = async () => {
    const response = await axios.get(baseUrl  + '/api/offre/');

    return response;
};