import * as React from 'react';
import { connect } from 'react-redux';


export class User extends React.Component<any, any> {
	onClick = () => {
		this.props.selectUser(this.props.index);
	}

	render() {
		return (
			<li
				className="user"
				title={`${this.props.user.first_name} ${this.props.user.last_name}`}
				onClick={this.onClick}
			>
				{this.props.user.first_name}
			</li>
		);
	}
}


export const ConnectedUser = connect(
	(state) => ({}),
	(dispatch) => ({
		selectUser(index: number) {
			dispatch({type: "SELECT_USER", payload: index})
		}
	}),
)(User);