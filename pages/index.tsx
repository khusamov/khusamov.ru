import React, {Component} from 'react';
import HomeLayout from '../layouts/HomeLayout';
import fetch from 'isomorphic-unfetch';

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
				<p>Привет!</p>
				{this.props.batmanShows.map((item: any, index: number) => <div key={index}>{item.show.name}</div>)}
			</HomeLayout>
		);
	}
}