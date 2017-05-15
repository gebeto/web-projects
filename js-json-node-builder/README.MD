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
		textContent: 'Info Card',
		name: 'h3-pointer'
	}, {
		tag: 'p',
		className: 'description',
		textContent: 'Information test card for GitHub.',
		name: 'card-description'
	}]
});
console.log(element); //> Object {h3-pointer: h3.title, card-description: p.description, rendered: div.card, render: function}
document.body.appendChild(element.rendered);
```

Rendered element (element.rendered);
```hmtl
<div class="card">
	<h3 class="title">Info Card</h3>
	<p class="description">Information test card for GitHub.</p>
</div>
```