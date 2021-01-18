import axios from 'axios';
import {baseUrl} from './config'

export const signup = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(baseUrl + '/api/auth/signup', data, config);

    return response;
};

export const signin = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(baseUrl + '/api/auth/signin', data, config);

    return response;
};
