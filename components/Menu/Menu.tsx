import React, {Component, Fragment} from 'react';
import Link from '../Link';
import css from './Menu.scss';

interface IItem {
	title: string;
	uri: string;
}

export default class Menu extends Component {
	private items: IItem[] = [{
		title: 'Новое',
		uri: '/'
	}, {
		title: 'Слово о сайте',
		uri: '/about'
	}, {
		title: 'Инструмент',
		uri: '/tool'
	}];

	public render() {
		return (
			<div className={css.Menu}>
				{
					this.items.map(({title, uri}, index) => (
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