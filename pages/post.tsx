import React, {Component} from 'react';
import {withRouter, NextRouter} from 'next/router';
import {NextPageContext} from 'next'; // https://goo.gl/2DTi9G // https://nextjs.org/docs#exported-types
import fetch from 'isomorphic-unfetch';
import Html from '../components/Html';
import RegularLayout from '../layouts/RegularLayout';

// Не понятно как задействовать IPostPageQuery.
interface IPostPageQuery {
	id: string;
}

interface IPostPageProps {
	batmanShow: any;
	router: NextRouter;
}

export default withRouter(
	class PostPage extends Component<IPostPageProps> {
		public static async getInitialProps(context: NextPageContext): Promise<IPostPageProps> {
			const {id} = context.query;
			const batmanShowsResponse = await fetch(`https://api.tvmaze.com/shows/${id}`);
			const batmanShow = await batmanShowsResponse.json();
			return {batmanShow, router: null};
		}

		public render() {
			const {name, summary, image} = this.props.batmanShow;
			return (
				<RegularLayout title={name}>
					<Html>{summary}</Html>
					<img src={image.medium} alt=''/>
				</RegularLayout>
			);
		}
	}
);