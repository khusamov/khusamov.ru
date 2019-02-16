import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Menu from '../../components/Menu';
import Logotype from '../../components/Logotype';
import {version} from '../../package.json';
import css from './HomeLayout.scss';

interface IHomeLayoutProps {
	title: string;
}

export default class HomeLayout extends Component<IHomeLayoutProps> {
	public render() {
		const siteVersionText = `Версия сайта: ${version}`;
		return (
			<div className={css.HomeLayout}>
				<Helmet>
					<title>{this.props.title}</title>
				</Helmet>

				<Logotype/>
				<Menu/>

				<p>{siteVersionText}</p>
				{this.props.children}
			</div>
		);
	}
}