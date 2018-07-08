import * as ReactDOM from 'react-dom';
import * as React from 'react';


class App extends React.Component<any, any> {
	render() {
		return (<span>Hello world!!</span>);
	}
}


ReactDOM.render(
	<App />,
	document.getElementById("root") as HTMLElement
);