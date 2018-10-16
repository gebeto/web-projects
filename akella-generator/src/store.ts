import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { GeneratorReducer } from './compoents/Generator/reducer';

import { reducer as formReducer } from 'redux-form';


export const store = createStore(
	combineReducers({
		Generator: GeneratorReducer,
		form: formReducer,
	}),
	composeWithDevTools(
		applyMiddleware(
			thunk,
		)
	),
);