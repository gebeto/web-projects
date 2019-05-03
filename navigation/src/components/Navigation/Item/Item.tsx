import * as React from 'react';
import './styles.css';


class NavigationItem extends React.Component<any, any> {
	static defaultProps = {
		active: false,
		color: "purple",
		title: "Home",
		icon: "home",
	};

	handleClick = () => {
		this.props.onClick && this.props.onClick(this.props.index);
	}

	render() {
		const isActive = this.props.index === this.props.activeIndex;
		return (
				<div onClick={this.handleClick} className={`nav-item ${isActive ? 'active ' : ' '}${this.props.color}`}>
					<i className={`fas fa-${this.props.icon}`}></i>
					<p>{this.props.title}</p>
				</div>
		);
	}
}


export default NavigationItem;