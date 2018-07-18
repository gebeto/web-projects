import { createStore } from 'redux';

const initialState = {
	currentUserIndex: 0,
	users: [
		{
			first_name: "Slavik",
			last_name: "Nychkalo",
		},
		{
			first_name: "Vitya",
			last_name: "Nychkalo",
		},
	],
};

const reducer = function(state: any = initialState, action: any) {
	console.log(action);
	if (action.type === "NEXT_USER") {
		return {
			...state,
			currentUserIndex: state.currentUserIndex === state.users.length - 1 ? 0 : state.currentUserIndex + 1,
		}
	}
	return state;
}


export default createStore(reducer)