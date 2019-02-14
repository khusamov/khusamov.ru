import React, {Component, Fragment} from 'react';
import Link from './Link';

export default class Menu extends Component {
	render() {
		return (
			<Fragment>
				<Link href='/'><a>Главная</a></Link>
				<span> | </span>
				<Link href='/about'><a>О сайте</a></Link>
			</Fragment>
		);
	}
}