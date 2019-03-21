import React, {Component, Fragment} from 'react';
import RegularLayout from '../layouts/RegularLayout';
import Article1 from '../articles/article1.md';

export default class extends Component {
	public render() {
		return (
			<RegularLayout title={Article1.title}>
				<p>
					<span>Содержание:</span>
					<span>&nbsp;</span>
					{
						Article1.toc.map((item: {uri: string; title: string}, index: number) => (
							<Fragment key={index}>
								<a href={item.uri}>{item.title}</a>
								<span> | </span>
							</Fragment>
						))
					}
				</p>
				<Article1 />
			</RegularLayout>
		);
	}
}