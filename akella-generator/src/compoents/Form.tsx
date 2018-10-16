import * as React from 'react';

import {
	Form,
	Field,
	reduxForm
} from 'redux-form';


const InputForm = (props) => {
	return (
		<Form onSubmit={props.handleSubmit}>
			<div>
				<Field component="input" name="left" placeholder="Left" />
			</div>
			<div>
				<Field component="input" name="right" placeholder="Right" />
			</div>
		</Form>
	);
}


export default reduxForm({
	form: 'Inputs',
	initialValues: {
		left: 'Left',
		right: 'Right',
	}
})(InputForm);