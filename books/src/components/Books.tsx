import * as React from 'react';
import { connect } from 'react-redux';

import { getBooks, getBook } from '../api';

class BookItem extends React.Component<any, any> {
	onClick = () => {
		this.props.onBookSelect(this.props.book);
	}

	render() {
		const { book } = this.props;
		return (
			<li className="books-item" onClick={this.onClick} key={book.book_id}>{book.title}</li>
		);
	}
}

class Books extends React.Component<any, any> {
	componentDidMount() {
		this.props.fetchBooks();
	}

	onBookSelect = (book) => {
		console.log(book);
		this.props.selectBook(book.book_id);
	}

	render() {
		const { books } = this.props;
		return (
			<div className="books">
				<ul>
					{books.map((book: any) =>
						<BookItem onBookSelect={this.onBookSelect} book={book} key={book.book_id} />
					)}
				</ul>
			</div>
		);
	}
}

export default connect(
	(state: any) => ({
		books: state.books,
	}),
	dispatch => ({
		fetchBooks() {
			getBooks().then((books: any) => {
				console.log(books);
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
					payload: book,
				});
			});
		}
	}),
)(Books)