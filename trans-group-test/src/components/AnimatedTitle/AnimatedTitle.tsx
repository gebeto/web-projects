import * as React from 'react';

import { CSSTransition } from 'react-transition-group';

import './styles.css';


export class AnimatedTitle extends React.Component<any, any> {

	constructor(props: any) {
		super(props);
		
		this.state = {
			shown: false,
			text: props.text,
		}
	}

	componentDidMount() {
		this.toggle();
	}

	componentWillReceiveProps(props: any) {
		this.toggle();
	}

	toggle = () => {
		this.setState({
			shown: !this.state.shown,
		});
	}

	onExited = () => {
		this.setState({
			text: this.props.text,
		});
		this.toggle();
	}

	render() {
		return (
			<CSSTransition timeout={300} classNames="test" in={this.state.shown} onExited={this.onExited}>
				<div className="test name">{this.state.text}</div>
			</CSSTransition>
		);
	}
}