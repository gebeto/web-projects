// import plist from 'plist';

export const base = 'http://localhost:3000';
// export const corsUrl = (url: string): any => `https://cors.io/?${url}`;
// export const corsFetch = (url: string): any => fetch(corsUrl(url));

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