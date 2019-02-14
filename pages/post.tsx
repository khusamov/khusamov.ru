import React, {Component} from 'react';
import RegularLayout from '../layouts/RegularLayout';
import {withRouter, WithRouterProps} from 'next/router';
import fetch from 'isomorphic-unfetch';
import {NextContext} from 'next'; // https://goo.gl/2DTi9G
import Html from '../components/Html';

interface IPostPageQuery {
	id: string;
}

interface IPostPageProps {
	batmanShow: any;
}

type TPostPageProps = IPostPageProps & WithRouterProps<IPostPageQuery>;

const PostPage = withRouter(
	class extends Component<TPostPageProps> {
		static async getInitialProps(context: NextContext): Promise<IPostPageProps> {
			const {id} = context.query;
			const batmanShowsResponse = await fetch(`https://api.tvmaze.com/shows/${id}`);
			const batmanShow = await batmanShowsResponse.json();
			return {batmanShow};
		}

		get title(): string {
			return (
				this.props.router && this.props.router.query
					? `${this.props.batmanShow.name}`
					: '<Не выбрана запись>'
			);
		}

		render() {
			return (
				<RegularLayout title={this.title}>
					<Html>{this.props.batmanShow.summary}</Html>
					<img src={this.props.batmanShow.image.medium} alt=''/>
				</RegularLayout>
			);
		}
	}
);

export default PostPage;