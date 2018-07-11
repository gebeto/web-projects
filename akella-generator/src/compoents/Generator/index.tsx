import Generator from './Generator';

import { connect } from 'react-redux';

export default connect(
	(state) => ({
		left: state.Generator.leftText,
		right: state.Generator.rightText,
		image: state.Generator.image,
		templateImage: state.Generator.templateImage,
	}),
	(dispatch) => ({}),
)(Generator);