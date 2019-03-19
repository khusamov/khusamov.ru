import React, {Component, Children, ReactNode} from 'react';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {withRouter, WithRouterProps} from 'next/router';

type TLinkProps = WithRouterProps & NextLinkProps;

/**
 * Перечень ключей интерфейса NextLinkProps.
 */
const TNextLinkPropKeys: Array<keyof NextLinkProps> = [
	'prefetch', 'shallow', 'scroll', 'replace',
	'href', 'as', 'passHref', 'children'
];

/**
 * В компонент NextLink пропускаем только пропсы из NextLinkProps.
 * Иными словами, пропсы WithRouterProps отфильтровываем.
 * Эти исключает предупреждение вида:
 * Warning: Failed prop type: Link: unknown props found: router.
 * @param linkProps
 */
function filterNextLinkProps(linkProps: TLinkProps): NextLinkProps {
	const nextLinkProps: NextLinkProps = {children: linkProps.children};
	let prop: keyof TLinkProps;
	for (prop in linkProps) {
		if (
			linkProps.hasOwnProperty(prop)
			&& TNextLinkPropKeys.indexOf(prop as keyof NextLinkProps) !== -1
		) {
			nextLinkProps[prop as keyof NextLinkProps] = linkProps[prop];
		}
	}
	return nextLinkProps;
}

/**
 * Замена штатного next/link на свой компонент Link,
 * который убирает ссылку, если href совпадает с текущим URL.
 */
const Link = withRouter(
	class LinkWithoutRouter extends Component<TLinkProps> {
		private get isActive(): boolean {
			return this.props.router ? this.props.router.pathname === this.props.href : false;
		}

		public render() {
			let result: ReactNode;
			const child = Children.only(this.props.children);

			if (this.isActive) {
				// Если ссылка активна, то в класс дочернего элемента добавляем active.
				result = React.cloneElement(child, {
					...child.props,
					className: [child.props.className, 'active'].filter(cn => cn).join(' ')
				});
			} else {
				result = (
					<NextLink {...filterNextLinkProps(this.props)}>
						{child}
					</NextLink>
				);
			}

			return result;
		}
	}
);

export default Link;