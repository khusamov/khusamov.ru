import React, {Component} from 'react';
import Link from "next/link";

export default class Menu extends Component {
	render() {
		return (
			<>
				<Link href="/"><a>Главная</a></Link>
				<span> | </span>
				<Link href="/about"><a>О сайте</a></Link>
				<span> | </span>
				<Link href="/post?id=1"><a>Запись № 1</a></Link>
			</>
		);
	}
}