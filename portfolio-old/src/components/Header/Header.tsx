import * as React from 'react';
import HeaderItem from './HeaderItem';

import './styles.scss';


export default class Header extends React.Component<any, any> {
	state = {
		activeIndex: 0,
	}

	constructor(props: any) {
		super(props);
	}

	updateActive = (index: number) => {
		this.setState({
			activeIndex: index,
		});
	}

	render() {
		return (
			<ul className="header">
				<HeaderItem
					title="Frontend"
					activeIndex={0}
				/>
				<HeaderItem
					title="Backend"
					activeIndex={1}
				/>
			</ul>
		);
	}
}