import { connect } from 'react-redux';

import { UsersList } from './UsersList';

export default connect(
	(state: any) => ({
		users: state.users,
	}),
)(UsersList);