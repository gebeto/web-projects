import * as React from 'react';
import JSONTree from 'react-json-tree';
import { trackLink } from '../../api';
import BookTrack from './BookTrack';


class Book extends React.Component<any, any> {
	onTrackSelect = (track: any) => {
		this.props.setTrack(this.props.book, track);
	}

	render() {
		const { book = {} } = this.props;
		const { TracksListTitle, MainTitle, TracksList = [] } = book;
		return (
			<div className="book">
				{null && <JSONTree data={this.props.book} />}
				<h3>{TracksListTitle || 'Tracks'}</h3>
				<ul>
					{TracksList.map(track =>
						<BookTrack key={track.RecordFileName} track={track} book={book} activeTrack={this.props.activeTrack} onSelect={this.onTrackSelect} />
					)}
				</ul>
			</div>
		);
	}
}


export default Book;