import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Menu from '../components/Menu';
import css from './HomeLayout.scss';
import {version} from '../package.json';

interface IHomeLayoutProps {
	title: string;
}

export default class HomeLayout extends Component<IHomeLayoutProps> {
	render() {
		const siteVersionText = `Версия сайта: ${version}`;
		return (
			<div className={css.HomeLayout}>
				<Helmet>
					<title>{this.props.title}</title>
				</Helmet>

				<Menu/>

				<h1>{this.props.title}</h1>
				<p>{siteVersionText}</p>
				{this.props.children}
			</div>
		);
	}
}