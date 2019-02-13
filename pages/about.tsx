import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Link from "next/link";

export default class Index extends Component {
	title = 'Слово о сайте khusamov.ru';
	render() {
		return (
			<>
				<Helmet>
					<title>{this.title}</title>
				</Helmet>
				<h1>{this.title}</h1>
				<p>Немного обо мне.</p>
				<Link href="/"><a>На главную</a></Link>
			</>
		);
	}
}