import * as React from 'react';
import { connect } from 'react-redux';


import { AnimatedTitle } from './AnimatedTitle/';
import UsersList from './UsersList/';


export class App extends React.Component<any, any> {
	render() {
		return (
			<div>
				<UsersList />
				{this.props.user ?
					<h1 style={{textAlign: 'center'}}>
						<AnimatedTitle text={this.props.user.first_name} duration={1000} />
						<AnimatedTitle text={this.props.user.last_name} duration={1300} />
					</h1> : null
				}
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