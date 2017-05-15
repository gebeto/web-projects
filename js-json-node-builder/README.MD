# js-json-node-builder
Модуль для генерации html дерева в js с помощю json


# Пример
```javascript
var element = JsonNodeBuilder({
	tag: 'div',
	className: 'card',
	children: [{
		tag: 'h3',
		className: 'title',
		textContent: 'Info Card'
	}, {
		tag: 'p',
		className: 'description',
		textContent: 'Information test card for GitHub.'
	}]
});
```
```hmtl
<div class="card">
	<h3 class="title">Info Card</h3>
	<p class="description">Information test card for GitHub.</p>
</div>
```