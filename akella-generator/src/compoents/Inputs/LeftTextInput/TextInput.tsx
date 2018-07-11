import * as React from 'react';


export class TextInput extends React.Component<any, any> {
	onChange = (e) => {
		this.props.setText(e.target.value);
	}

	render() {
		return (
			<div>
				<input
					type="text"
					defaultValue=""
					placeholder="Left text"
					onChange={this.onChange}
				/>
			</div>
		);
	}
}
