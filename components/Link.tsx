import React, {Component} from 'react';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {withRouter, WithRouterProps} from 'next/router';

type TLinkProps = WithRouterProps & NextLinkProps;

/**
 * Перечень ключей интерфейса NextLinkProps.
 */
const TNextLinkPropKeys = [
	'prefetch', 'shallow', 'scroll', 'replace',
	'href', 'as', 'passHref', 'children'
];

/**
 * Замена штатного next/link на свой компонент Link,
 * который убирает ссылку, если href совпадает с текущим URL.
 */
const Link = withRouter(
	class LinkWithoutRouter extends Component<TLinkProps> {
		/**
		 * В компонент NextLink пропускаем только пропсы из NextLinkProps.
		 * Иными словами, пропсы WithRouterProps отфильтровываем.
		 * Эти исключает предупреждение вида:
		 * Warning: Failed prop type: Link: unknown props found: router.
		 * @param linkProps
		 */
		private static filterNextLinkProps(linkProps: TLinkProps): NextLinkProps {
			const nextLinkProps: NextLinkProps = {children: linkProps.children};
			let prop: keyof TLinkProps;
			for (prop in linkProps) {
				if (
					linkProps.hasOwnProperty(prop)
					&& TNextLinkPropKeys.indexOf(prop) !== -1
				) {
					nextLinkProps[prop as keyof NextLinkProps] = linkProps[prop];
				}
			}
			return nextLinkProps;
		}

		public render() {
			return (
				this.props.router && this.props.router.pathname === this.props.href
					? this.props.children
					: <NextLink {...LinkWithoutRouter.filterNextLinkProps(this.props)}>{this.props.children}</NextLink>
			);
		}
	}
);

export default Link;