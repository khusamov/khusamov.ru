import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Menu from '../components/Menu';

export default class Index extends Component {
	title = 'khusamov.ru';
	render() {
		return (
			<>
				<Helmet>
					<title>{this.title}</title>
				</Helmet>

				<Menu/>

				<h1>{this.title}</h1>
				<p>Привет!</p>
			</>
		);
	}
}