const fetch = require("node-fetch");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const apple = require("./apple");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'static')))


app.get('/', (req, res) => {
	res.sendFile('index.html', {
		root: path.join(__dirname, './templates')
	})
});

app.get('/search', (req, res) => {
	apple.search(req.query.term).then(response => {
		const results = response["storePlatformData"]["native-search-lockup"]["results"];
		const formattedResults = Object.values(results);
		res.send(formattedResults);
	});
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
