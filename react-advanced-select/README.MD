# react-advanced-select


## Installation
Using NPM for use with TypeScript/JavaScript
```sh
$ npm install react-advanced-select
```


## Using
```javascript
const someCode = null;
import React, { Component } from 'react';
import AdvancedSelect from 'react-advanced-select';

const elements = [{
	post_code: 10001,
	short: "ny",
	title: "New York",
}, {
	post_code: 22434,
	short: "sd",
	title: "San Diego",
}];

export class MySelectBlock extends Component {
	render() {
		<AdvancedSelect
			data={elements}
			onChange={(item) => {
				console.log(item); // output: { post_code: ..., title: ..., short: ... };
			}}
			label="Cities"
		/>
	}
}

```


## Preview
[**Live Preview**](https://gebeto.github.io/web-projects/react-advanced-select/example.html)
