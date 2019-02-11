const plist = require('plist');
const request = require('request');
const express = require('express');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});


app.get('/', function (req, res) {
	res.send(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Books</title>

    <meta name="author" content="slavik.nychkalo@gmail.com">
    <meta name="viewport" content="width=device-width, user-scalable=no">
  </head>
  <body>
	<div class="root" id="root"></div>
	<script>
		window.HOST = '';
	</script>
    <script src="https://gebeto.github.io/web-projects/books/dist/bundle.js"></script>
  </body>
</html>
	`);
});


app.get('/books', function (req, res) {
	const { bookId } = req.params;
	const url = 'https://api.dm-development.net/audiobooks/lb00/categories.json';
	request.get(url).pipe(res);
});

app.get('/books-:category', function (req, res) {
	const { category } = req.params;
	const url = `https://api.dm-development.net/audiobooks/lb00/${category}`;
	request.get(url).pipe(res);
});

app.get('/books/:bookId', function (req, res) {
	const { bookId } = req.params;
	const url = `https://storage.loudbook.ru/storagenew/${bookId}/recordsList.plist`;
	const reqStream = request.get(url, function (error, response, body) {
		// console.log('error:', error); // Print the error if one occurred
		// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		if (error) {
			res.send({
				error: true,
				errorObj: error,
				statusCode: response && response.statusCode,
			});
		} else if(response && response.statusCode === 200) {
			res.send({
				book: plist.parse(body),
			});
		} else {
			res.send({
				error: true,
				message: 'Something go wrong!',
				statusCode: response && response.statusCode,
				book: {},
			});
		}
	});
});

app.get('/books/:bookId/:track', function (req, res) {
	const { bookId, track } = req.params;
	const url = `https://storage.loudbook.ru/storagenew/${bookId}/records/${track}`;
	request.get(url).on('data', function(data) {
		// decompressed data as it is received
		// console.log('decoded chunk: ' + data.length);
	}).pipe(res);
});


app.listen(PORT, function () {
	console.log(`App listening on port ${PORT}!`);
});