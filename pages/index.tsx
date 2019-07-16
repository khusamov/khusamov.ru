import React, {Component, FC, ClassAttributes, Fragment} from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import HomeLayout from '../layouts/HomeLayout';

interface IBatmanShow {
	show: {
		id: number;
		name: string;
	}
}

interface IIndexPageProps {
	batmanShows: IBatmanShow[];
}

interface IBatmanShowLinkProps extends ClassAttributes<any> {
	item: IBatmanShow;
}

const BatmanShowLink: FC<IBatmanShowLinkProps> = props => (
	<Link href={`/post?id=${props.item.show.id}`} as={`/post/${props.item.show.id}`}>
		<a>{props.item.show.name}</a>
	</Link>
);

export default class IndexPage extends Component<IIndexPageProps> {
	public static async getInitialProps(): Promise<IIndexPageProps> {
		const batmanShowsResponse = await fetch('https://api.tvmaze.com/search/shows?q=batman');
		const batmanShows = await batmanShowsResponse.json();
		return {batmanShows};
	}

	public render() {
		return (
			<HomeLayout title='khusamov.ru'>
				<p>Batman Shows:</p>
				<p>
					{
						this.props.batmanShows.map((item: any, index: number) => (
							<Fragment key={index}>
								<BatmanShowLink item={item}/>
								<br/>
							</Fragment>
						))
					}
				</p>
			</HomeLayout>
		);
	}
}