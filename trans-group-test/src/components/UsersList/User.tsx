import * as React from 'react';
import { connect } from 'react-redux';

import { AnimatedTextIn } from '../AnimatedTitle';


export class User extends React.Component<any, any> {
	onClick = () => {
		this.props.selectUser(this.props.index);
	}

	render() {
		return (
			<li
				className={`user ${this.props.active ? 'active' : ''}`}
				title={`${this.props.user.first_name} ${this.props.user.last_name}`}
				onClick={this.onClick}
			>
				<AnimatedTextIn text={this.props.user.first_name} duration={1000} delay={200 * this.props.index} from="top" />
			</li>
		);
	}
}


export const ConnectedUser = connect(
	(state: any) => ({}),
	(dispatch) => ({
		selectUser(index: number) {
			dispatch({type: "SELECT_USER", payload: index})
		}
	}),
)(User);