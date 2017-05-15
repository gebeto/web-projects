# js-json-node-builder
Модуль для генерации html дерева в js с помощю json


# Пример
```javascript
var element = JsonNodeBuilder({
	tag: 'div',
	className: 'card',
	children: [{
		tag: 'h3',
		className: 'title'
	}, {
		tag: 'p',
		className: 'description'
	}]
});
```
