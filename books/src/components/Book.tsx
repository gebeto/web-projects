import * as React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames/bind';

import JSONTree from 'react-json-tree';

import List from './List';


const cx = cn.bind({
	base: 'book-track',
	isActive: 'book-track-active',
});


class BookTrack extends React.Component<any, any> {
	onClick = () => {
		this.props.onSelect(this.props.track);
	}

	render() {
		const { track, isActive } = this.props;
		console.log(track);

		return (
			<li className={cx('base', {isActive})} key={track.RecordFileName} onClick={this.onClick}>
				{track.RecordFileName} / {track.RecordTitle}
			</li>
		);
	}
}

const BookTrackConnected = connect(
	(state: any, ownProps: any) => ({
		isActive: state.track && state.track.file === ownProps.track.RecordFileName,
	})
)(BookTrack);


class Book extends React.Component<any, any> {
	onTrackSelect = (track: any) => {
		this.props.setTrack(this.props.book.book_id, track.RecordFileName);
	}

	render() {
		const { book = {} } = this.props;
		const { TracksListTitle, MainTitle, TracksList = [] } = book;
		return (
			<div className="book">
				<JSONTree data={this.props.book} />
				<h3>Tracks: {TracksListTitle}</h3>
				<ul>
					{TracksList.map(track =>
						<BookTrackConnected key={track.RecordFileName} track={track} activeTrack={this.props.activeTrack} onSelect={this.onTrackSelect} />
					)}
				</ul>
			</div>
		);
	}
}



export default connect(
	(state: any) => ({
		book: state.book,
	}),
	(dispatch: any) => ({
		setTrack(bookId, file) {
			dispatch({
				type: 'SET_TRACK',
				payload: {
					bookId,
					file,
				}
			})
		},
	}),
)(Book);

// export default connect(
// 	(state: any) => ({
// 		datasource: state.book,
// 		itemKey: 'RecordFileName',
// 		itemsKey: 'TracksList',
// 	}),
// 	(dispatch: any) => ({
// 		onItemSelect(data) {
// 			dispatch({
// 				type: 'SET_TRACK',
// 				payload: {
// 					bookId: data.book_id,
// 					file: data.RecordFileName,
// 				}
// 			})
// 		},
// 		itemTitle: (data: any) => `${data.RecordFileName} / ${data.RecordTitle}`,
// 		isActiveCheck: (state: any, ownProps: any) => state.track && state.track.file === ownProps.data.RecordFileName,
// 	}),
// )(List);