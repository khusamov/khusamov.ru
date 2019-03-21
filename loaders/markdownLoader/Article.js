const React = require('react');
const Mustache = require('mustache');
const MarkdownIt = require('markdown-it');
const HighlightJavaScript = require('highlight.js');

const markdownRenderer = createMarkdownRenderer();

let html = markdownRenderer.render(`MARKDOWN_SOURCE`);

// Регулярка для отлова тега h1.
const h1reg = /<h1>(.*)<\/h1>/;

// Найти значение тега h1 (это нужно делать до удаления тега h1).
const h1match = html.match(h1reg);
const h1 = h1match[1];

// Удалить тег h1.
html = html.replace(h1reg, '');

const Article = props => {
	const __html = Mustache.render(html, props.context || {});
	const sectionProps = {...props, dangerouslySetInnerHTML: {__html}};
	return React.createElement('section', sectionProps, null);
};

Article.title = h1;

module.exports = Article;

/**
 * Функция, которая создает конвертер Markdown-текстов в HTML-тексты.
 */
function createMarkdownRenderer() {
	const markdownRenderer = MarkdownIt();
	markdownRenderer.use(markdownItHighlightJavaScriptCustom);
	return markdownRenderer;
}

/**
 * Переделанный плагин tylingsoft/markdown-it-highlight (см. ссылку).
 * Добавлена замена символов табуляции на пробелы.
 * @link https://github.com/tylingsoft/markdown-it-highlight/blob/master/src/index.js
 * @param md
 */
function markdownItHighlightJavaScriptCustom(md) {
	const temp = md.renderer.rules.fence.bind(md.renderer.rules);
	md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
		const token = tokens[idx];
		const code = token.content.trim();
		if (token.info.length > 0) {
			return highlight('highlight.js', code, token.info);
		}
		return temp(tokens, idx, options, env, slf);
	}
}

function highlight(library, text, language) {
	return `<pre><code class='hljs'>${highlightAuto(text, [language])}</code></pre>`;
}

/**
 * Функция подсветки кода с заменой символов табуляции на пробелы.
 * Внимание, код может работать как на стороне сервера,
 * так и клиента (для этого проверяется process.browser).
 */
function highlightAuto(text, languageSubset) {
	const tabReplace = '   ';
	HighlightJavaScript.configure({tabReplace});

	if (process.browser) {
		// Функция initHighlighting() не работает на стороне браузера (т.к. зависит от document).
		HighlightJavaScript.initHighlighting();
	}

	let highlightedCode = HighlightJavaScript.highlightAuto(text, languageSubset).value;

	if (!process.browser) {
		// На стороне сервера придется менять символы табуляции на пробелы при помощи String.replace().
		highlightedCode = highlightedCode.replace(/\t/g, tabReplace);
	}

	return highlightedCode;
}