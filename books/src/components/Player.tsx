import * as React from 'react';
import { connect } from 'react-redux';

import { trackLink } from '../api';
import ReactHowler from 'react-howler';
import raf from 'raf';




const Button = ({ children, ...props }) =>
	<button {...props}>{children}</button>;

class Player extends React.Component<any, any> {
	render () {
		const { bookId, file } = this.props.track;
		if (!bookId || !file) {
			return <audio controls></audio>;
		}
		return (
			<audio src={trackLink(bookId, file)} autoPlay controls></audio>
		)
	}
}

export default connect(
	(state: any) => ({
		track: state.track,
	}),
	(dispatch: any) => ({}),
)(Player);