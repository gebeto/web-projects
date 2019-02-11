// import plist from 'plist';

export const base = typeof (window as any).HOST !== 'string' ? 'http://localhost:3000' : (window as any).HOST;

export const trackLink = (bookId, trackFile) => `${base}/books/${bookId}/${trackFile}`;
export const courseCoverLink = (bookId) => `https://storage.loudbook.ru/storages8/${bookId}/cover.jpg`;

export const getCategories = (): any => {
	return fetch(`${base}/books`)
		.then((res: any) => res.json())
		.then(res => res.books)
}

export const getBooks = (): any => {
	return fetch(`${base}/books`)
		.then((res: any) => res.json())
		.then(res => res.books)
}

export const getBook = (bookId: any): any => {
	return fetch(`${base}/books/${bookId}`)
		.then((res: any) => res.json())
		.then(res => res.book)
}