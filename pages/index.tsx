import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Link from "next/link";

export default class Index extends Component {
	title = 'khusamov.ru';
	render() {
		return (
			<>
				<Helmet>
					<title>{this.title}</title>
				</Helmet>
				<h1>{this.title}</h1>
				<p>Привет!</p>
				<Link href="/about"><a>О сайте</a></Link>
			</>
		);
	}
}