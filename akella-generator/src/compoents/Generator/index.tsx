import Generator from './Generator';

import { connect } from 'react-redux';

export default connect(
	(state) => ({
		inputs: state.form.Inputs,
		image: state.Generator.image,
		templateImage: state.Generator.templateImage,
	}),
	(dispatch) => ({}),
)(Generator);