import axios from 'axios';
import {baseUrl} from '../../api/config'
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
	SHOW_ERROR_MESSAGE,
	SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import { CREATE_OFFRE,GET_OFFRES } from '../constants/offreConstant';

export const createOffre = formData => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.post(baseUrl  + '/api/offre/', formData);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_SUCCESS_MESSAGE,
			payload: response.data.successMessage,
		});
		dispatch({
			type: CREATE_OFFRE,
			payload: response.data.offre,
		});
	} catch (err) {
		console.log('createOffre api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};

export const getOffres = () => async dispatch => {
	try {
		dispatch({ type: START_LOADING });
		const response = await axios.get(baseUrl  + '/api/offre/');
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: GET_OFFRES,
			payload: response.data.offres,
		});
	} catch (err) {
		console.log('getOffres api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			
		});
	}
};
