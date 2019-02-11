import Books from './Books';
import { connect } from 'react-redux';

import { getBooks, getBook } from '../../api';

import './index.scss';


export default connect(
	(state: any) => ({
		books: state.books,
	}),
	dispatch => ({

		fetchBooks() {
			getBooks().then((books: any) => {
				dispatch({
					type: 'SET_BOOKS',
					payload: books,
				})
			});
		},

		selectBook(bookId) {
			getBook(bookId).then(book => {
				dispatch({
					type: 'SET_BOOK',
					payload: {
						...book,
						book_id: bookId
					},
				});
			});
		},

	}),
)(Books);