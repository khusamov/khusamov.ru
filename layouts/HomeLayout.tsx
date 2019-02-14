import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Menu from '../components/Menu';
import './HomeLayout.scss';

interface IHomeLayoutProps {
	title: string;
}

export default class HomeLayout extends Component<IHomeLayoutProps> {
	render() {
		return (
			<div className='HomeLayout'>
				<Helmet>
					<title>{this.props.title}</title>
				</Helmet>

				<Menu/>

				<h1>{this.props.title}</h1>
				{this.props.children}
			</div>
		);
	}
}