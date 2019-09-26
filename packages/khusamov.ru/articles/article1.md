Слово о сайте
=========================

Текст статьи.

Небольшой пример кода
---------------------

```javascript
const foo = function (bar) {
	return bar++;
};

console.log(foo(5));
```

```typescript jsx
import React, {Component, Fragment} from 'react';
import RegularLayout from './RegularLayout';
import Article1 from './article1.md';

interface ITocItem {
	uri: string;
	title: string;
}

export default class extends Component {
	public render() {
		return (
			<RegularLayout title={Article1.title}>
				{this.renderArticle1Toc()}
				<Article1 />
			</RegularLayout>
		);
	}

	private renderArticle1Toc() {
		return (
			<p>
				<span>Содержание:</span>
				<span>&nbsp;</span>
				{this.renderArticle1TocItems()}
			</p>
		);
	}

	private renderArticle1TocItems() {
		return (
			Article1.toc.map(
				(item: ITocItem, index: number) => (
					<Fragment key={index}>
						<a href={item.uri}>{item.title}</a>
						<span> | </span>
					</Fragment>
				)
			)
		);
	}
}
```



Второй раздел
---------------------

Jira Core is a customizable workflow solution that 
helps you manage your projects and keep your team organized.