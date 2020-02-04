import React, {Component, CSSProperties} from 'react';
import './App.scss';
import Particles, {IParticlesParams} from 'react-particles-js';
import config from './particlesjs-config.json';
import Helmet from 'react-helmet';
import packageJson from '../package.json';
import GithubRepos from './components/GithubRepos';

const blogs = [{
	name: 'Поселок Радужный',
	url: 'https://vk.com/the_village_rainbow'
}, {
	name: 'Бытовка своими руками',
	url: 'https://vk.com/shed_hand_made'
}, {
	name: 'NodeJS',
	url: 'https://vk.com/node_javascript'
}, {
	name: 'ReactJS',
	url: 'https://vk.com/react_javascript'
}, {
	name: 'JavaScript для браузеров',
	url: 'https://vk.com/javascript_for_web'
}, {
	name: 'TypeScript',
	url: 'https://vk.com/mytypescript'
}, {
	name: 'Sencha ExtJS',
	url: 'https://vk.com/sencha_extjs'
}];

const footerStyle: CSSProperties = {
	position: 'absolute',
	bottom: 0,
	left: 0,
	padding: '8px 15px',
	backgroundColor: '#fff0f0',
	fontSize: '80%'
};

const particlesStyle: CSSProperties = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	zIndex: -1
};

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Helmet>
					<title>khusamov.ru</title>
				</Helmet>

				<Particles style={particlesStyle} params={config as IParticlesParams}/>

				<h1>khusamov.ru</h1>
				<div>ВКонтакте: <a href='https://vk.com/crystalset' target='_blank'>crystalset</a></div>
				<div>GitHub: <a href='https://github.com/khusamov' target='_blank'>khusamov</a></div>
				<div>Скайп: <a href='skype:khusamov'>khusamov</a></div>
				<div>Почта: <a href='mailto:khusamov@yandex.ru'>khusamov@yandex.ru</a></div>
				<div>Телефон: <a href='tel:+79653911487'>+7 (965) 391-14-87</a></div>
				<div>Адрес: Россия, Москва, район Гольяново</div>

				<br/>
				<div>Мои микроблоги:</div>
				{blogs.map((blog, index) => <div key={index}><a href={blog.url} target='_blank'>{blog.name}</a></div>)}

				<br/>
				<div>Мои репозитории:</div>
				<GithubRepos/>

				<div style={footerStyle}>Версия сайта {packageJson.version}</div>
			</div>
		);
	}
};
