import plist from 'plist';


const corsFetch = (url: string): any => fetch(`https://cors.io/?${url}`);

export const getBooks = (): any => {
	return corsFetch('https://api.dm-development.net/audiobooks/lb00/learnenglish.json')
		.then((res: any) => res.json())
		.then(res => res.books)
}

export const getBook = (bookId: any): any => {
	return corsFetch(`https://storage.loudbook.ru/storagenew/${bookId}/recordsList.plist`)
		.then((res: any) => res.text())
		.then(res => {
			return plist.parse(res);
		});
}