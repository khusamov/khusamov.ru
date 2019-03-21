import React, {Component, Fragment} from 'react';
import HomeLayout from '../layouts/HomeLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

interface IIndexPageProps {
	batmanShows: any[];
}

export default class IndexPage extends Component<IIndexPageProps> {
	public static async getInitialProps(): Promise<IIndexPageProps> {
		const batmanShowsResponse = await fetch('https://api.tvmaze.com/search/shows?q=batman');
		const batmanShows = await batmanShowsResponse.json();
		return {batmanShows};
	}
	public render() {

		// Внимание, внутри <p> нельзя вставлять <div>, иначе в консоли будет выдано предупреждение:
		// Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>.

		return (
			<HomeLayout title='khusamov.ru'>
				<p>Batman Shows:</p>
				<p>
					{
						this.props.batmanShows.map((item: any, index: number) => (
							<Fragment key={index}>
								<Link href={`/post?id=${item.show.id}`} as={`/post/${item.show.id}`}>
									<a>{item.show.name}</a>
								</Link>
								<br/>
							</Fragment>
						))
					}
				</p>
			</HomeLayout>
		);
	}
}