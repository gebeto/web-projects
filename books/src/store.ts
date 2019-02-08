import { createStore, AnyAction } from 'redux';

const initialState = {
	active: 0,
	books: [],
}

function global(state: any = initialState, action: AnyAction) {
	console.log(state, action);

	if (action.type === 'SET_BOOKS') {
		return {
			...state,
			books: action.payload,
		};
	} else if (action.type === 'SET_BOOK') {
		return {
			...state,
			book: action.payload,
		};
	} else if (false) {

	}

	return state;
}


export default createStore(global);