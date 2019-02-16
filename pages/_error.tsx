import React, {Component} from 'react';
import {NextContext} from 'next';
import HttpStatus from 'http-status';
import ErrorLayout from '../layouts/ErrorLayout';

type TStatusCode = keyof HttpStatus;

interface IErrorProps {
	statusCode: TStatusCode;
}

export default class ErrorPage extends Component<IErrorProps> {
	static getInitialProps({res, err}: NextContext): IErrorProps {
		const statusCode: TStatusCode = (
			res && res.statusCode
				? res.statusCode
				// Не ясно откуда в err берется statusCode. И почему его нет в NextContext.
				: err ? (err as any).statusCode : 404
		);
		return {statusCode};
	}
	render() {
		const {statusCode} = this.props;
		const title: string = (
			statusCode === 404
				? 'Эта страница не найдена'
				: (
					statusCode in HttpStatus
						? String(HttpStatus[statusCode])
						: 'Произошла непредвиденная ошибка'
				)
		);
		return (
			<ErrorLayout title={title}>
				<p>{statusCode}: {title}.</p>
			</ErrorLayout>
		);
	}
}