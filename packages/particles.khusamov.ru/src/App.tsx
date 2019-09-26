import React, {CSSProperties} from 'react';
import './App.scss';
import Particles, {IParticlesParams} from 'react-particles-js';
import config from './particlesjs-config.json';
import Helmet from 'react-helmet';
import packageJson from '../package.json';

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

const App: React.FC = () => {
	return (
		<div className="App">
			<Helmet>
				<title>khusamov.ru</title>
			</Helmet>
			<Particles style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: -1}} params={config as IParticlesParams}/>
			<h1>khusamov.ru</h1>
			<div>ВКонтакте: <a href='https://vk.com/crystalset'>https://vk.com/crystalset</a></div>
			<div>GitHub: <a href='https://github.com/khusamov'>https://github.com/khusamov</a></div>
			<div>Скайп: <a href='skype:khusamov'>khusamov</a></div>

			<br/>
			<div>Мои микроблоги:</div>
			{blogs.map(blog => <div><a target='_blank' href='{blog.url}'>{blog.name}</a></div>)}

			<div style={footerStyle}>
				Версия сайта {packageJson.version}
			</div>
		</div>
	);
};

export default App;
