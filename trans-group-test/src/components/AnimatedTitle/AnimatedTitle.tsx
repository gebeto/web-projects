import * as React from 'react';
import { CSSTransition } from 'react-transition-group';


export class AnimatedTitle extends React.Component<any, any> {

	static defaultProps = {
		duration: 300,
	};

	styles = {
		transitionDuration: '300ms',
	};

	constructor(props: any) {
		super(props);
		
		this.state = {
			shown: false,
			text: props.text,
		}

		this.styles.transitionDuration = `${this.props.duration}ms`;
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
			<CSSTransition timeout={this.props.duration} classNames="animated-text" in={this.state.shown} onExited={this.onExited}>
				<div style={this.styles} className="animated-text name">{this.state.text}</div>
			</CSSTransition>
		);
	}
}