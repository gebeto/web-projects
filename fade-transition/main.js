document.body.addEventListener('click', function(e) {
	console.log('click');
	var target = e.target;
	var tag = target.tagName;
	var href = target.getAttribute('href');
	if (href) {
		document.body.className = 'fade-out';
		console.log('asdsa', href)
		e.preventDefault();
		setTimeout(function() {
			window.location.href = href;
		}, 500);
	}
});