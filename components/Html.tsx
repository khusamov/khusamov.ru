import React, {FunctionComponent} from 'react';
/**
 * Специальный компонент для вывода HTML-кода без экранирования.
 */
const Html: FunctionComponent = ({children}) => (
	<div dangerouslySetInnerHTML={{__html: children as string}}/>
);

export default Html;