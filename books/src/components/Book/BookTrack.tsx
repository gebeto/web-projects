import * as React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames/bind';

import JSONTree from 'react-json-tree';
import { trackLink } from '../../api';


const cx = cn.bind({
	base: 'book-track',
	isActive: 'book-track-active',
});


class BookTrack extends React.Component<any, any> {
	onClick = () => {
		this.props.onSelect(this.props.track);
	}

	render() {
		const { track, book, isActive } = this.props;

		return (
			<li className={cx('base', {isActive})} key={track.RecordFileName} onClick={this.onClick}>
				<div className="book-track-image">
					<img src="https://via.placeholder.com/150" alt=""/>
				</div>
				<span className="book-track-title">
					{track.RecordTitle}
				</span>
				<span className="book-track-buttons">
					<button>{isActive ? '■' : '►'}</button>
					<button>
						<a href={trackLink(book.book_id, track.RecordFileName)} target="_blank">⇩</a>
					</button>
				</span>
			</li>
		);
	}
}

export default connect(
	(state: any, ownProps: any) => ({
		isActive: state.track && state.track.file === ownProps.track.RecordFileName,
	})
)(BookTrack);