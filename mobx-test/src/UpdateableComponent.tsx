import * as React from 'react';
import { observer } from 'mobx-react';
import { state } from './index';


class UpdateableComponent extends React.Component<any, any> {
	state = {
		updateCount: 0,
		withTransaction: false,
	};

	componentDidUpdate(oldProps, oldState) {
		// console.log('Udated', this.state, oldState);
		// if (this.state.updateCount === oldState.updateCount)
		// 	// console.log("ASDAS");
		// 	this.setState((state) => ({
		// 		updateCount: state.updateCount + 1,
		// 	}));
	}

	toggleTransaction = () => {
		this.setState(state => ({ withTransaction: !state.withTransaction }));
	}

	onClick = (e: any) => {
		(state as any)[`increment${this.state.withTransaction ? 'WithTransaction' : ''}`]();
	}

	render() {
		return (
			<div>
				<span onClick={this.toggleTransaction}>{this.state.withTransaction ? 'With' : 'Without'}</span>
				<button onClick={this.onClick}>Action</button>
				Hello, updated count is: {this.state.updateCount}, {state.name}, {state.age}
			</div>
		);
	}
}


export default observer(UpdateableComponent);