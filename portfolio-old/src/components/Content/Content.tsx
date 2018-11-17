import * as React from 'react';
import Slide from './Slide';

import './styles.scss';


export default class Content extends React.Component<any, any> {
	render() {
		return (
			<div className="content">
				<Slide title="Frontend" activeIndex={0} />
				<Slide title="Backend" activeIndex={1} />
			</div>
		);
	}
}