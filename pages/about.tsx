import React, {Component} from 'react';
import RegularLayout from '../layouts/RegularLayout';
import Article1 from '../articles/article1.md';
import 'highlight.js/styles/github.css';

export default class extends Component {
	public render() {
		return (
			<RegularLayout title='Слово о сайте khusamov.ru'>
				<Article1 />
			</RegularLayout>
		);
	}
}