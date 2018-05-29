import * as React from 'react';

import Slider from './Slider';
import Slide from './Slide/';


export default class App extends React.Component<any, any> {
	render() {
		return (
			<div className="app">
				<Slider>
					<Slide src="1" price="1000" />
					<Slide src="2" price="2000" />
					<Slide src="3" price="3000" />
					<Slide src="4" price="4000" />
				</Slider>
			</div>
		);
	}
}