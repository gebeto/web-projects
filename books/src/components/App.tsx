import * as React from 'react';

import Books from './Books/';
import Book from './Book/';
import Player from './Player';
import TrackInfo from './TrackInfo';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<div className="wrapper">
				<div className="content">
					<Books />
					<Book />
				</div>
				<div className="footer">
					<div className="footer-info">
						<TrackInfo />
					</div>
					<Player />
				</div>
			</div>
		);
	}
}