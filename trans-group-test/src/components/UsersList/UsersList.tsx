import * as React from 'react';

import { ConnectedUser } from './User';


import './styles.css';


export class UsersList extends React.Component<any, any> {
	render() {
		return (
			<ul className="users-list">
				{this.props.users.map((user: any, index: number) => 
					<ConnectedUser key={user.id} user={user} index={index} active={index === this.props.activeIndex} />
				)}
			</ul>
		);
	}
}