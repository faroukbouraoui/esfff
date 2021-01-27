import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
	CREATE_CONTACT,
	
} from '../constants/contactConstants';
import axios from 'axios';
import {baseUrl} from '../../api/config'



export const createContact = formData => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		dispatch({ type: START_LOADING });
		const response = await axios.post(baseUrl  + '/api/contact', formData, config);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_SUCCESS_MESSAGE,
			payload: response.data.successMessage,
		});
		dispatch({ type: CREATE_CONTACT, payload: response.data.contact });
	} catch (err) {
		console.log('createContact api error: ', err);
		dispatch({ type: STOP_LOADING });
        dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};


