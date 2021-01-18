import axios from 'axios';
import {baseUrl} from './config'

export const createCategory = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(baseUrl  + '/api/category', formData, config);

    return response;
};

export const getCategories = async () => {
    const response = await axios.get(baseUrl  + '/api/category');

    return response;
};
