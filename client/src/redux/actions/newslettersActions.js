import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
	GET_NEWSLETTERS,
	CREATE_NEWSLETTER,
} from '../constants/newsletterContants';
import axios from 'axios';
import {baseUrl} from '../../api/config'

export const getNewsletters = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(baseUrl  + '/api/newsletter/');
		dispatch({ type: STOP_LOADING });
		dispatch({ type: GET_NEWSLETTERS, payload: response.data.newsletters });
	} catch (err) {
		console.log('getNewsletters api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const createNewsletter = formData => async dispatch => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		dispatch({ type: START_LOADING });
		const response = await axios.post(baseUrl  + '/api/newsletter/', formData, config);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_SUCCESS_MESSAGE,
			payload: response.data.successMessage,
		});
		dispatch({ type: CREATE_NEWSLETTER, payload: response.data.category });
	} catch (err) {
		console.log('createNewsletter api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};
