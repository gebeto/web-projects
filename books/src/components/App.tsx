import * as React from 'react';
import Books from './Books';
import Book from './Book';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<div className="wrapper">
				<Books />
				<Book />
			</div>
		);
	}
}