import * as React from 'react';

import Generator from './Generator/';
import Inputs from './Inputs/';

export class App extends React.Component<any, any> {
	render() {
		return (
			<div>
				<Generator />
				<Inputs />
			</div>
		);
	}
}