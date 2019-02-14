import React, {Component} from 'react';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {withRouter, WithRouterProps} from 'next/router';

type TLinkProps = WithRouterProps & NextLinkProps;

/**
 * Замена штатного next/link на свой компонент Link,
 * который убирает ссылку, если href совпадает с текущим URL.
 */
const Link = withRouter(
	class Link extends Component<TLinkProps> {
		render() {
			return (
				this.props.router && this.props.router.pathname === this.props.href
					? this.props.children
					: <NextLink {...this.props}>{this.props.children}</NextLink>
			);
		}
	}
);

export default Link;