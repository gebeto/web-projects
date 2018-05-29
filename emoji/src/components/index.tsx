import * as React from 'react';
import './style.css';
import emoji from '../emoji.json';

import { EmojiList } from './EmojiList';

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.state = {
			search: "",
		}
	}

	onInput = (e) => {
		this.setState({
			search: (e.target as HTMLInputElement).value
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="input-group">
							<span className="input-group-addon">
								<i className="glyphicon glyphicon-search"></i>
							</span>
							<input onInput={this.onInput} type="text" className="form-control" placeholder="Search..." />
						</div>
					</div>

					<div className="col-md-12">
						<EmojiList emoji={emoji} query={this.state.search} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
