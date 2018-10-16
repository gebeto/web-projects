import * as React from 'react';

import Generator from './Generator/';
import Inputs from './Inputs/';

import Form from './Form';

export class App extends React.Component<any, any> {
	render() {
		return (
			<div>
				<Generator />
				<Inputs />
				<Form onSubmit={() => ({})} />
			</div>
		);
	}
}