import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Provider } from 'react-redux';

import { App, ConnectedApp } from './components/';
import store from './store/';

ReactDom.render(
	<Provider store={store}>
		<ConnectedApp />
	</Provider>,
	document.getElementById("root")
);