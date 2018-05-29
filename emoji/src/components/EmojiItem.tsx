import * as React from 'react';


export class EmojiItem extends React.Component<any, any> {
	render() {
		const { title, emoja, category } = this.props;
		return (
			<li className="list-group-item">
				<span className="emoj">{emoja}</span>
				<span className="title">{title}</span>
				<span className="category">{category}</span>
			</li>
		);
	}
}