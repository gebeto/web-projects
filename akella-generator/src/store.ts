import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { GeneratorReducer } from './compoents/Generator/reducer';


export const store = createStore(
	combineReducers({
		Generator: GeneratorReducer
	}),
	composeWithDevTools(
		applyMiddleware(
			thunk,
		)
	),
);