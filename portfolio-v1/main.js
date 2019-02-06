var currentActive = -1;
var categories = document.querySelector('.header').children;
var slides = document.querySelector('.content').children;
var toggleAllowed = true;

function activate(category, slide) {
	category.setAttribute('data-active', '1');
	slide.setAttribute('data-active', '1');
}

function deactivate(category, slide) {
	category.setAttribute('data-active', '2');
	slide.setAttribute('data-active', '2');
	setTimeout(function() {
		category.setAttribute('data-active', '0');
		slide.setAttribute('data-active', '0');
		setTimeout(function() {
			toggleAllowed = true;
		}, 600);
	}, 600);
}

function setActive(activeIndex) {
	if (activeIndex === currentActive || !toggleAllowed) return;
	for (var i = 0; i < categories.length; i++) {
		var category = categories[i];
		var slide = slides[i];
		if (activeIndex === i) {
			activate(category, slide);
		} else {
			deactivate(category, slide);
		}
	}
	toggleAllowed = false;
}


document.getElementById('frontend').addEventListener('click', function() {
	setActive(0);
});

document.getElementById('backend').addEventListener('click', function() {
	setActive(1);
});

setActive(0);