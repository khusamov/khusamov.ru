import React, {Component} from 'react';
import RegularLayout from '../layouts/RegularLayout';
import {withRouter, WithRouterProps} from 'next/router';

interface IPostPageQuery {
	id: string;
}

type TPostPageProps = WithRouterProps<IPostPageQuery>;

const PostPage = withRouter(
	class extends Component<TPostPageProps> {
		get title(): string {
			return (
				this.props.router && this.props.router.query
					? `Запись # ${this.props.router.query.id}`
					: 'Не выбрана запись'
			);
		}

		render() {
			return (
				<RegularLayout title={this.title}>
					<p>{this.title}</p>
				</RegularLayout>
			);
		}
	}
);

export default PostPage;