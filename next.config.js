const Base64 = require('base-64');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

/**
 * Конфигурация Next.
 * @link https://github.com/zeit/next.js#custom-configuration
 */
module.exports = withTypescript(withCSS(withSass({
	cssLoaderOptions: {getLocalIdent, importLoaders: 1},
	cssModules: true,
	webpack: webpackHandler
})));

/**
 * Изменение конфигурации Webpack.
 * @link https://github.com/zeit/next.js#customizing-webpack-config
 */
function webpackHandler(config, options) {
	config.module.rules.push({
		loader: './loaders/markdownLoader',
		test: /\.md$/
	});
	return config;
}

/**
 * Функция getLocalIdent генерирует локальные имена для всех файлов css|scss
 * кроме тех, кто находится в node_modules.
 * Это сделано для того, чтобы добавить глобальные стили из файла:
 * node_modules/highlight.js/styles/github.css
 * @link https://github.com/webpack-contrib/css-loader#getlocalident
 */
function getLocalIdent(loaderContext, localIdentName, localName, options) {
	const hash = Base64.encode(loaderContext.resourcePath.replace(__dirname, ''));
	return (
		loaderContext.resourcePath.indexOf('node_modules') === -1
			? localName + '___' + hash.substr(-10)
			: localName
	);
}