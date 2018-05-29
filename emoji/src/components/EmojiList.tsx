import * as React from 'react';
import { EmojiItem } from './EmojiItem';


export class EmojiList extends React.Component<any, any> {
	state = {
		showCount: 20,
	}

	onScrollHandler = (e) => {
		if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
			this.setState({
				showCount: this.state.showCount + 10,
			})
		}
	}

	componentDidMount() {
		document.addEventListener("scroll", this.onScrollHandler);
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this.onScrollHandler);
	}

	componentDidUpdate(oldProps, oldState) {
		console.log("Update", this.state, this.props);
		if (this.props.query !== oldProps.query && oldState.showCount !== 20) {
			this.setState({
				showCount: 20,
			});
		}
	}

	renderEmojiList = () => {
		return this.props.emoji
			.filter(item => item.title.toLowerCase().includes(this.props.query.toLowerCase()))
			.map(item => <EmojiItem key={item.id} {...item} />)
			.slice(0, this.state.showCount);
	}

	render() {
		return (
			<ul className="list-group">
				{this.renderEmojiList()}
			</ul>
		)
	}
}