const BabelCore = require('@babel/core');

/**
 * Загрузчик Markdown-файла как React-компонента.
 * Основан на коде 'markdown-react-loader' с заменой обработчика на markdown-it.
 *
 * Основные возможности:
 * - корневой элемент section (с возможностью менять пропсы),
 * - шаблонизатор mustache (пропс context),
 * - обработчик markdown-it с возможностью подключения плагинов.
 *
 * @link https://github.com/The-Politico/markdown-react-loader
 * @link https://github.com/markdown-it/markdown-it
 * @link http://mustache.github.io/mustache.5.html
 * @param source
 */
module.exports = function(source) {
	// Экранирование обратных кавычек.
	const safeString = source.replace(/`/g, '\\`');

	// Создание Markdown-компонента.
	const component = `
		React.createElement(
			'section',
			{
				dangerouslySetInnerHTML: {
					__html: markdownRenderer.render(
						Mustache.render(
							\`${safeString}\`,
							props.context || {}
						)
					)
				},
				...props
			},
			null
		)
	`;

	const module = `
		const React = require('react');
		const Mustache = require('mustache');
		
		const hljs = require('highlight.js');
		
		const markdownRenderer = require('markdown-it')({
			highlight(str, lang) {
				if (lang && hljs.getLanguage(lang)) {
					try {
						return hljs.highlight(lang, str).value;
					} catch (__) {}
				}
				return ''; // use external default escaping
			}
		});
		
		//markdownRenderer.use(require('markdown-it-highlightjs'));
		
		module.exports = function(props) { return (${component}); };
	`;

	return BabelCore.transformSync(module, {presets: ['@babel/preset-env']}).code;
};