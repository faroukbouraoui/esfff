import {
	GET_NEWSLETTERS,
	CREATE_NEWSLETTER,
} from '../constants/newsletterContants';

const INITIAL_STATE = {
	newsletters: [],
};

const newsletterReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_NEWSLETTERS:
			return {
				...state,
				newsletters: action.payload,
			};
		case CREATE_NEWSLETTER:
			return {
				...state,
				newsletters: [...state.newsletters, action.payload],
			};
		default:
			return state;
	}
};

export default newsletterReducers;