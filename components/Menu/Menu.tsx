import React, {Component, Fragment} from 'react';
import Link from '../Link';
import css from './Menu.scss';

interface IItem {
	title: string;
	uri: string;
}

const menuItems: IItem[] = [{
	title: 'Новое',
	uri: '/'
}, {
	title: 'Слово о сайте',
	uri: '/about'
}, {
	title: 'Инструмент',
	uri: '/tool'
}];

export default class Menu extends Component {
	public render() {
		return (
			<div className={css.Menu}>
				{
					menuItems.map(({title, uri}, index) => (
						<Fragment key={index}>
							<Link href={uri}>
								<a className={css.item}>{title}</a>
							</Link>
						</Fragment>
					))
				}
			</div>
		);
	}
}