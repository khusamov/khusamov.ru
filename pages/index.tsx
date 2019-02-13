import React, {Component} from 'react';
import HomeLayout from '../layouts/HomeLayout';

export default class extends Component {
	render() {
		return (
			<HomeLayout title='khusamov.ru'>
				<p>Привет!</p>
			</HomeLayout>
		);
	}
}