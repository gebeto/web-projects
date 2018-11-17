import * as React from 'react';
import Header from './Header/';
import Content from './Content/';

export default class App extends React.Component<any, any> {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<Content />
			</div>
		);
	}
}