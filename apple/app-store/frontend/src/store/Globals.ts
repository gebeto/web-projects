export const initialState = {
	data: [],
};


export const reducer = (state: any = initialState, action: any) => {
	if (action.type) {
		return {
			...state,
		}
	}
	return state;
}


const setStage = (stage: Stage) => {
	return {
		type: 'SET_STAGE',
		payload: stage,
	};
};