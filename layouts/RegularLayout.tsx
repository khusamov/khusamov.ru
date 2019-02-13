import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Menu from '../components/Menu';

interface IRegularLayoutProps {
	title: string;
}

export default class RegularLayout extends Component<IRegularLayoutProps> {
	render() {
		return (
			<>
				<Helmet>
					<title>{this.props.title}</title>
				</Helmet>

				<Menu/>

				<h1>{this.props.title}</h1>
				{this.props.children}
			</>
		);
	}
}