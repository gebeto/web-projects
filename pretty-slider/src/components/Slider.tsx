import * as React from 'react';


export default class Slider extends React.Component<any, any> {
	render() {
		return (
			<div className="slider">
				{this.props.children}
			</div>
		);
	}
}