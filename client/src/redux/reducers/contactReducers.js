import { CREATE_CONTACT} from '../constants/contactConstants';

const INITIAL_STATE = {
	contacts: [],
};

const contactReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		
			case CREATE_CONTACT :
				return {
                    ...state,
					contacts: [...state.contacts,action.payload],
				};
		default:
			return state;
	}
};

export default contactReducers;
