const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const Base64 = require('base-64');

module.exports = withTypescript(withCSS(withSass({
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		/**
		 * Функция getLocalIdent генерирует локальные имена для всех файлов css|scss
		 * кроме тех, кто находится в node_modules.
		 * Это сделано для того, чтобы добавить глобальные стили из файла:
		 * node_modules/highlight.js/styles/github.css
		 */
		getLocalIdent(loaderContext, localIdentName, localName, options) {
			const hash = Base64.encode(loaderContext.resourcePath.replace(__dirname, ''));
			return (
				loaderContext.resourcePath.indexOf('node_modules') === -1
					? localName + '___' + hash.substr(-10)
					: localName
			);
		}
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.md$/,
			loader: './loaders/markdown-loader'

		});
		return config;
	}
})));