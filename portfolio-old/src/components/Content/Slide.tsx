import * as React from 'react';
import { connect } from 'react-redux';


export interface SlideProps {
	title: string;
	activeIndex: number;
	currentActiveIndex: number;
}

class Slide extends React.Component<SlideProps, any> {
	render() {
		const dataActive = this.props.activeIndex === this.props.currentActiveIndex ? '1' : '0';
		return (
			<div className={`slide ${this.props.title.toLowerCase()}`} data-active={dataActive}>
				<h2 className="title">{this.props.title}</h2>
			</div>
		);
	}
}


export default connect(
	(state: any) => ({
		currentActiveIndex: state.active,
	}),
	(dispatch) => ({}),
)(Slide);