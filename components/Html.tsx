import React, {FunctionComponent} from 'react';

/**
 * Специальный компонент для вывода HTML-кода без экранирования.
 * @link https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
 */
const Html: FunctionComponent = ({children}) => (
	<div dangerouslySetInnerHTML={{__html: children as string}}/>
);

export default Html;