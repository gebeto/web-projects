import React, { Component } from 'react';

import List from './List';
import Item from './Item';

import './styles.css';

export default class SideBar extends Component {
	render() {
		return (
			<div className="side-bar__wrapper">
				<List>
					<Item>1</Item>
					<Item>2</Item>
					<Item>3</Item>
					<Item>4</Item>
					<Item>5</Item>
				</List>
			</div>
		);
	}
}