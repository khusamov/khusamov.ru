import App from 'next/app';
import '../global.scss';
export default App; // https://nextjs.org/docs#custom-app

// https://github.com/zeit/next.js/issues/5425
// import React from 'react';
// import App, {Container, NextAppContext, DefaultAppIProps} from 'next/app';
// export default class MyApp extends App {
// 	static async getInitialProps(context: NextAppContext): Promise<DefaultAppIProps> {
// 		const {Component, ctx} = context;
// 		let pageProps = {};
//
// 		if (Component.getInitialProps) {
// 			pageProps = await Component.getInitialProps(ctx);
// 		}
//
// 		return { pageProps };
// 	}
//
// 	render() {
// 		const { Component, pageProps } = this.props;
// 		return (
// 			<Container>
// 				<Component {...pageProps} />
// 			</Container>
// 		);
// 	}
// }