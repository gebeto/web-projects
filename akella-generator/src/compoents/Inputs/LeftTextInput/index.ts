import { connect } from 'react-redux';

import { TextInput } from './TextInput';


export default connect(
	(state) => ({}),
	(dispatch) => ({
		setText(text) {
			dispatch({type: "SET_LEFT_TEXT", payload: text});
		}
	}),
)(TextInput);