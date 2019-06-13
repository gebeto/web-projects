import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducer as globals } from './Globals';


export const reducers = combineReducers({
	globals: globals,
});


export default createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(
			thunk
		)
	)
);