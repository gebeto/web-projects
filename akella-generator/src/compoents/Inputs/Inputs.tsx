import * as React from 'react';

import LeftTextInput from './LeftTextInput/';
import RightTextInput from './RightTextInput/';


export class Inputs extends React.Component<any, any> {
	render() {
		return (
			<div>
				Hello world!!!
				<LeftTextInput />
				<RightTextInput />
			</div>
		);
	}
}