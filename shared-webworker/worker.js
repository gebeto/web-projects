var isRan = false;

var cache = [];

var count = 0;
var id, port;

addEventListener('connect', function(e) {
	let port = e.ports[0];
	// port.start();
	// port.postMessage({title: 'init', isRan: isRan});
	cache.push(port);
	
	if (!isRan) {
		isRan = true;
		setInterval(function () {
			cache.map(function (prt) {
				prt.postMessage({title: count, isRan: isRan, name: name});
			})
			count++;
		}, 2000);
	}
});