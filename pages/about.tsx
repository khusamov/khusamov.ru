import React, {Component} from 'react';
import RegularLayout from '../layouts/RegularLayout';
import Article1 from '../articles/article1.md';

export default class extends Component {
	public render() {
		return (
			<RegularLayout title={Article1.title}>
				<Article1 />
			</RegularLayout>
		);
	}
}