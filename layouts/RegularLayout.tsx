import React, {Component, Fragment} from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Logotype from '../components/Logotype';

interface IRegularLayoutProps {
	title: string;
}

export default class RegularLayout extends Component<IRegularLayoutProps> {
	public render() {
		return (
			<Fragment>
				<Head>
					<title>{this.props.title}</title>
				</Head>

				<Logotype/>
				<Menu/>

				<h1>{this.props.title}</h1>
				{this.props.children}
			</Fragment>
		);
	}
}