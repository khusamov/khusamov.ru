import React, {Component, Fragment} from 'react';
import Link from './Link';

interface IItem {
	title: string;
	uri: string;
}

export default class Menu extends Component {
	private items: IItem[] = [{
		title: 'Главная',
		uri: '/'
	}, {
		title: 'О сайте',
		uri: '/about'
	}, {
		title: 'Инструмент',
		uri: '/tool'
	}];
	render() {
		return this.items.map(({title, uri}, index) => (
			<Fragment key={index}>
				<Link href={uri}>
					<a>{title}</a>
				</Link>
				{
					index !== this.items.length - 1 && (
						<span> | </span>
					)
				}
			</Fragment>
		));
	}
}