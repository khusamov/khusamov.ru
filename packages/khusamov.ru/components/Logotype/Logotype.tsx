import React, {Component, ReactNode} from 'react';
import Link from '../Link';
import css from './Logotype.scss';

/**
 * Logotype.
 */
export default class Logotype extends Component {
	public render(): ReactNode {
		return (
			<div className={css.Logotype}>
				<Link href='/'>
					<a>khusamov.ru</a>
				</Link>
			</div>
		);
	}
}