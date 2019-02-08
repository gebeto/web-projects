import * as React from 'react';
import { connect } from 'react-redux';

import JSONTree from 'react-json-tree'


class Book extends React.Component<any, any> {
	render() {
		const { book = {} } = this.props;
		const { TracksListTitle, MainTitle, TracksList = [] } = book;
		return (
			<div className="book">
				<JSONTree data={this.props.book} />
				<h3>Tracks</h3>
				<ul>
					{TracksList.map(track =>
						<li key={track.RecordFileName}>{track.RecordFileName} / {track.RecordTitle}</li>
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
	(dispatch: any) => ({}),
)(Book);