import * as React from 'react';

import Generator from './Generator/';
import Form from './Form';


export class App extends React.Component<any, any> {
	render() {
		return (
			<div>
				<Generator />
				<Form onSubmit={() => ({})} />
			</div>
		);
	}
}