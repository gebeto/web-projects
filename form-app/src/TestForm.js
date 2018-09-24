import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class TestForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label>Test 1</label>
					<Field name="test1" component="input" type="text" />
				</div>
				<div className="field">
					<label>Test 2</label>
					<Field name="test2" component="input" type="number" />
				</div>
				<div className="field">
					<label>Test 3</label>
					<Field name="test3" component="input" type="checkbox" />
				</div>
				<button type="submit">! Upload !</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'test',
	initialValues: {
		test1: '',
		test2: '',
		test3: '',
	}
})(TestForm);