import React, {Component} from 'react';
import RegularLayout from '../layouts/RegularLayout';

export default class extends Component {
	render() {
		return (
			<RegularLayout title='Слово о сайте khusamov.ru'>
				<p>Немного обо мне.</p>
			</RegularLayout>
		);
	}
}