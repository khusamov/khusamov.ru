TODO
====

В загрузчик `markdown-loader.js` добавить функционал по удалению
тега `h1` из статей `*.md` и размещению содержимого `h1` в статическое
свойство `h1` получаемого компонента, чтобы в файле `pages/about.tsx`
можно было бы написать следующее:

```
import React, {Component} from 'react';
import RegularLayout from '../layouts/RegularLayout';
import Article1 from '../articles/article1.md';

export default class extends Component {
	public render() {
		return (
			<RegularLayout title={Article1.h1}>
				<Article1 />
			</RegularLayout>
		);
	}
}
```