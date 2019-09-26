import React, {Component} from 'react';
import Head from 'next/head';
import {version} from '../../package.json';
import Menu from '../../components/Menu';
import Logotype from '../../components/Logotype';
import css from './HomeLayout.scss';

interface IHomeLayoutProps {
	title: string;
}

export default class HomeLayout extends Component<IHomeLayoutProps> {
	public render() {
		const siteVersionText = `Версия сайта: ${version}`;
		return (
			<div className={css.HomeLayout}>
				<Head>
					<title>{this.props.title}</title>
				</Head>

				<Logotype/>
				<Menu/>

				<p>{siteVersionText}</p>
				{this.props.children}
			</div>
		);
	}
}