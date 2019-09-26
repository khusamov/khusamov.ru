import React, {Component, Children, ReactNode, ReactElement} from 'react';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {withRouter, NextRouter} from 'next/router';

interface IWithRouterProps {
	router: NextRouter;
}

type TLinkProps = IWithRouterProps & NextLinkProps;

/**
 * Перечень ключей интерфейса NextLinkProps.
 */
const nextLinkPropKeys: Array<keyof NextLinkProps> = [
	'prefetch', 'shallow', 'scroll', 'replace',
	'href', 'as', 'passHref'
];

/**
 * В компонент NextLink пропускаем только пропсы из NextLinkProps.
 * Иными словами, пропсы WithRouterProps отфильтровываем.
 * Эти исключает предупреждение вида:
 * Warning: Failed prop type: Link: unknown props found: router.
 * @param linkProps
 */
function filterNextLinkProps(linkProps: TLinkProps): NextLinkProps {
	const nextLinkProps: NextLinkProps = {href: linkProps.href};
	let prop: keyof TLinkProps;
	for (prop in linkProps) {
		if (
			linkProps.hasOwnProperty(prop)
			&& nextLinkPropKeys.indexOf(prop as keyof NextLinkProps) !== -1
		) {
			nextLinkProps[prop] = linkProps[prop];
		}
	}
	return nextLinkProps;
}

/**
 * Замена штатного next/link на свой компонент Link,
 * который убирает ссылку, если href совпадает с текущим URL.
 */
export default withRouter(
	class Link extends Component<TLinkProps> {
		private get isActive(): boolean {
			return this.props.router ? this.props.router.pathname === this.props.href : false;
		}

		public render() {
			const child: ReactElement = Children.only(this.props.children) as ReactElement;
			// По идее здесь надо сделать проверку, а действительно ли child является ReactElement-ом. Так как children
			// содержит ReactNode, который имеет несколько вариантов кроме ReactElement. Но как сделать эту проверку?
			return (
				this.isActive
					? (
						// Если ссылка активна, то в класс дочернего элемента добавляем active.
						React.cloneElement(child, {
							...child.props,
							className: [child.props.className, 'active'].filter(cn => cn).join(' ')
						})
					)
					: (
						<NextLink {...filterNextLinkProps(this.props)}>
							{child}
						</NextLink>
					)
			);
		}
	}
);