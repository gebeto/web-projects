import { Action, Store } from 'redux';


export interface GeneratorAction extends Action {
	payload: string;
}


export interface GeneratorState {
	leftText: string;
	rightText: string;
	image: HTMLImageElement;
	templateImage: HTMLImageElement;
}


export const initialState: GeneratorState = {
	leftText: "LEFT",
	rightText: "RIGHT",
	image: document.createElement("img"),
	templateImage: document.createElement("img"),
};

export const GeneratorReducer = function(state: GeneratorState = initialState, action: GeneratorAction) {
	if (action.type === "SET_TEMPLATE_IMAGE") {
		return {
			...state,
			templateImage: action.payload,
		};
	} else if (action.type === "SET_LEFT_TEXT") {
		return {
			...state,
			leftText: action.payload,
		}
	} else if (action.type === "SET_RIGHT_TEXT") {
		return {
			...state,
			rightText: action.payload,
		}
	} else if (action.type === "SET_IMAGE") {
		return {
			...state,
			image: action.payload,
		}
	}
	return state;
}