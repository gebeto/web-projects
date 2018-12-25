import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, action, transaction } from 'mobx';
import { Provider, observer } from 'mobx-react';

import UpdateableComponent from './UpdateableComponent';


export const state = observable({
	name: "Slavik",
	age: 21,
	increment() {
		this.age += 1;
		this.name += 'n';
	},

	incrementWithTransaction() {
		transaction(() => {
			this.age += 1;
			// this.age += 1;
			// this.age += 1;
			// this.age += 1;
			this.name += 'n';
		})
	},
});


ReactDOM.render(
	<Provider state={state}>
		<div>
			<UpdateableComponent />
			<UpdateableComponent />
		</div>
	</Provider>,
	document.getElementById("app")
);