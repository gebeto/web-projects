import * as React from 'react';
import { connect } from 'react-redux';


import { AnimatedTitle } from './AnimatedTitle/';


export class App extends React.Component<any, any> {
	render() {
		return (
			<div>
				<button onClick={this.props.nextUser}>Toggle</button>
				<AnimatedTitle text={this.props.user.first_name} />
				<AnimatedTitle text={this.props.user.last_name} />
			</div>
		);
	}
}


export const ConnectedApp = connect(
	(state: any) => ({
		user: state.users[state.currentUserIndex],
	}),
	(dispatch) => ({
		nextUser() {
			dispatch({type: "NEXT_USER"});
		}
	}),
)(App);