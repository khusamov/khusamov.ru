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

module.exports = function(props) {

	const html = markdownRenderer.render(
		Mustache.render(
			`MARKDOWN_SOURCE`,
			props.context || {}
		)
	);


	return (
		React.createElement(
			'section',
			{
				dangerouslySetInnerHTML: {
					__html: html
				},
				...props
			},
			null
		)
	);
};