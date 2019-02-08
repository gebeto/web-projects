import * as React from 'react';
import { connect } from 'react-redux';

import JSONTree from 'react-json-tree'


class Book extends React.Component<any, any> {
	render() {
		return (
			<div className="book">
				<JSONTree data={this.props.book} />
			</div>
		);
	}
}


export default connect(
	(state: any) => ({
		book: state.book,
	}),
	(dispatch: any) => ({}),
)(Book);