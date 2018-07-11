import * as ReactDOM from 'react-dom';
import * as React from 'react';

import { Provider } from 'react-redux';

import { store } from './store';
import { App } from './compoents/App';

import './assets/styles.css';

import * as templateImageSrc from './assets/template.png';


const templateImage: HTMLImageElement = document.createElement("img");
templateImage.addEventListener('load', function(e) {
	store.dispatch({type: "SET_TEMPLATE_IMAGE", payload: templateImage});
});
templateImage.src = templateImageSrc as any;

(window as any).store = store;



ReactDOM.render(
	(
		<Provider store={store}>
			<App />
		</Provider>
	),
	document.body.appendChild(document.createElement("div"))
);