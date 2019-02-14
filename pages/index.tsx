import React, {Component} from 'react';
import HomeLayout from '../layouts/HomeLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

interface IIndexPageProps {
	batmanShows: any[];
}

export default class IndexPage extends Component<IIndexPageProps> {
	static async getInitialProps(): Promise<IIndexPageProps> {
		const batmanShowsResponse = await fetch('https://api.tvmaze.com/search/shows?q=batman');
		const batmanShows = await batmanShowsResponse.json();
		return {batmanShows};
	}
	render() {
		return (
			<HomeLayout title='khusamov.ru'>
				<p>Batman Shows:</p>
				{this.props.batmanShows.map((item: any, index: number) => (
					<div key={index}>
						<Link href={`/post?id=${item.show.id}`} as={`/post/${item.show.id}`}>
							<a>{item.show.name}</a>
						</Link>
					</div>
				))}
			</HomeLayout>
		);
	}
}