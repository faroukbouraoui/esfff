import axios from 'axios';
import {baseUrl} from './config'

export const createBlog = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(baseUrl  + '/api/blog/', formData, config);

    return response;
};

export const getBlogs = async () => {
    const response = await axios.get(baseUrl  + '/api/blog/');

    return response;
};