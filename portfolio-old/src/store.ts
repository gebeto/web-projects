import { createStore, AnyAction } from 'redux';

const initState = {
	active: 0,
}

function global(state: any = initState, action: AnyAction) {
	console.log(state, action);

	if (action.type === 'UPDATE_ACTIVE') {
		return {
			...state,
			active: action.payload,
		}
	} else if (false) {

	}

	return state;
}


export default createStore(global);