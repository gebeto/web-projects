import { createStore, AnyAction, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
	books: [],
	book: {},
	track: {},
}

function globalReducer(state: any = initialState, action: AnyAction) {
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
	} else if (action.type === 'SET_TRACK') {
		return {
			...state,
			track: action.payload,
		};
	} else if (false) {

	}

	return state;
}


export default createStore(globalReducer, composeWithDevTools());