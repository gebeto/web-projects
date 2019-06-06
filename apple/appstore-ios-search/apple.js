const fetch = require("node-fetch");


const countries = {
	"ru": "143469-16,29",
	"us": "",
};

const headers = {
	"User-Agent": "AppStore/2.0 iOS/10.2 model/iPhone6,1 hwp/s5l8960x build/14C92 (6; dt:89)",
	"X-Apple-Store-Front": countries["ru"],
	"Accept-Language": "ru",
}


function search(term) {
	const URL_SEARCH = `https://search.itunes.apple.com/WebObjects/MZStore.woa/wa/search?clientApplication=Software&term=${term}&caller=com.apple.AppStore&version=1`;
	return fetch(URL_SEARCH, {
		headers: headers,
	}).then(res => res.json());
}

exports.search = search;