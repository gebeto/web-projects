var express = require('express');
var app = express();

var bodyParser = require('body-parser')
require('body-parser-xml')(bodyParser);

app.use(bodyParser.xml());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// app.get(/[\w\W]+/, function (req, res) {
// 	console.log("Get", req.query);
// 	res.send('Get!');
// });
// app.post(/[\w\W]+/, function (req, res) {
// 	console.log("Post", req.query);
// 	res.send('Post!');
// });

app.all(/[\w\W]+/, function (req, res, next) {
	console.log("Req: ", {
		url: req.url,
		query: req.query,
		method: req.method,
		originalUrl: req.originalUrl,
		_parsedUrl: req._parsedUrl,
		body: req.body,
		body_text: JSON.stringify(req.body),
		body_plist: req.body.plist,
		body_dict: req.body.plist.dict,
	});
	res.send('All!');
	next();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});