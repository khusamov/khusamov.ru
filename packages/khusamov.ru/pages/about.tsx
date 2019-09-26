import React, {Component, Fragment} from 'react';
import RegularLayout from '../layouts/RegularLayout';
import Article1 from '../articles/article1.md';

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