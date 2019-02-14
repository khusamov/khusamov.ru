import React, {Component, Fragment} from 'react';
import {Helmet} from "react-helmet";
import Menu from '../components/Menu';

interface IHomeLayoutProps {
	title: string;
}

export default class HomeLayout extends Component<IHomeLayoutProps> {
	render() {
		return (
			<Fragment>
				<Helmet>
					<title>{this.props.title}</title>
				</Helmet>

				<Menu/>

				<h1>{this.props.title}</h1>
				{this.props.children}
			</Fragment>
		);
	}
}