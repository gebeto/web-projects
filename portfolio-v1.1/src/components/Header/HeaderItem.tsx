import * as React from 'react';
import { connect } from 'react-redux';

export interface HeaderItemProps {
	title: string;
	activeIndex: number;
	currentActiveIndex: number;
	onClick: (index: number) => void;
}

class HeaderItem extends React.Component<HeaderItemProps, any> {
	onClick = () => {
		this.props.onClick(this.props.activeIndex);
	}

	render() {
		const dataActive = this.props.activeIndex === this.props.currentActiveIndex ? '1' : '0'
		return (
			<li className={this.props.title.toLowerCase()} data-active={dataActive} onClick={this.onClick}>
				<span>{this.props.title}</span>
			</li>
		);
	}
}


export default connect(
	(state: any) => ({
		currentActiveIndex: state.active,
	}),
	(dispatch) => ({
		onClick(index: number) {
			dispatch({
				type: 'UPDATE_ACTIVE',
				payload: index,
			})
		}
	}),
)(HeaderItem);