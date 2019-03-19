const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
module.exports = withTypescript(withCSS(withSass({
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]___[hash:base64:5]",
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.md$/,
			loader: './markdown-loader'

		});
		return config;
	}
})));