console.log('ENV:', NODE_ENV);

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import cn from 'classnames';
import store from './store/';

import './index.scss';


class App extends React.Component<any, any> {	
	render() {
		return (
			<div>Hello world!</div>
		);
	}
}





(window as any)._TEMPLATE = (query) => {
	const element = document.body.querySelector(query);

	render(
		(
			<Provider store={store}>
				<App />
			</Provider>
		),
		element
	);
}


