import Generator from './Generator';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';


export default connect(
	(state) => ({
		inputs: getFormValues('Inputs')(state),
		image: state.Generator.image,
		templateImage: state.Generator.templateImage,
	}),
	(dispatch) => ({}),
)(Generator);