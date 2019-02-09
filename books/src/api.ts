// import plist from 'plist';

export const base = typeof (window as any).HOST !== 'string' ? 'http://localhost:3000' : (window as any).HOST;
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