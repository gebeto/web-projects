import { connect } from 'react-redux';
import Book from './Book';

import './index.scss';


export default connect(
	(state: any) => ({
		book: state.book,
	}),
	(dispatch: any) => ({
		setTrack(book, track) {
			dispatch({
				type: 'SET_TRACK',
				payload: {
					bookId: book.book_id,
					title: track.RecordTitle,
					file: track.RecordFileName,
				}
			})
		},
	}),
)(Book);