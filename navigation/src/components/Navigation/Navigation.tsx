import * as React from 'react';
import './styles.css';

import Item from './Item/';


class Navigation extends React.Component<any, any> {
	state = {
		activeIndex: 0,
	}

	handleItemClick = (index: number) => {
		console.log('CLICK', index)
		this.setState((state: any) => ({
			activeIndex: index,
		}));
	}

	render() {
		return (
			<div className="nav">
			<div className="nav-container">
				<Item index={0} activeIndex={this.state.activeIndex} onClick={this.handleItemClick} title="Home" color="purple" icon="home" />
				<Item index={1} activeIndex={this.state.activeIndex} onClick={this.handleItemClick} title="Likes" color="pink" icon="heart" />
				<Item index={2} activeIndex={this.state.activeIndex} onClick={this.handleItemClick} title="Search" color="yellow" icon="search" />
				<Item index={3} activeIndex={this.state.activeIndex} onClick={this.handleItemClick} title="Profile" color="teal" icon="user" />
			</div>
			</div>
		);
	}
}


export default Navigation;