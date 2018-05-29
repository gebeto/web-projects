import * as React from 'react';
import './styles.css';


export default class SlideWrapper extends React.Component<any, any> {

	constructor(props) {
		super(props);

		this.state = {
			active: false,
		};
	}

	render() {
		return (
			<div className={`slide ${this.state.active ? 'active' : ''}`}>
				<div className="slide__title unskew">
					Slide {this.props.src}
				</div>
				<button onClick={e => this.setState({active: !this.state.active})}>Activate</button>
				<div className="slide__image-wrapper">
					<img className="slide__image unskew" src={`assets/images/slides/${this.props.src}.png`} alt=""/>
				</div>
				<div className="slide__price unskew">
					${this.props.price}
				</div>

			</div>
		);
	}
}