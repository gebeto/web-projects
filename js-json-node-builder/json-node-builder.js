function JsonNodeBuilder(el, elements, mainElement) {
	if (!elements) elements = {};
	var _resultElement = document.createElement(el.tag);
	var keys = Object.keys(el);
	keys.map(function(item, index) {
		_resultElement[item] = el[item];
	});
	if (el.children) {
		if (Array.isArray(el.children)) {
			el.children.map(function(item, index) {
				var element = JsonNodeBuilder(item, elements);
				if (item.name) {
					elements[item.name] = element.render();
				}
				_resultElement.appendChild(element.render());
			});
		} else if (typeof el.children === Object) {
			var element = JsonNodeBuilder(el, elements);
			if (el.name) {
				elements[el.name] = element.render();
			}
			_resultElement.appendChild(element.render());
		} else {

		}
	}

	elements['render'] = function() { return _resultElement; }
	if (mainElement) {
		elements["MAIN"] = _resultElement;
	}
	return elements;
}