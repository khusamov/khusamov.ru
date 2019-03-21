TODO
====

Возможность вести блог
---------------------

https://www.artlebedev.ru/technogrette/xslt/entity-3/

Для примера сделать
https://nextjs.org/docs/#populating-head

Убрать Warning: Prop dangerouslySetInne...
------------------------------------------

Устранить вывод предупреждения:
> Warning: Prop `dangerouslySetInnerHTML` did not match. Server:...

в файле `loaders/markdown-loader/Article.js`.

Предупреждение похоже выходит из-за того, что 
функция HighlightJavaScript.highlightAuto()
выдает разные значения на клиенте и сервере.

Для этого можно попробовать другие отрисовщики Markdown:  
https://github.com/ccampbell/rainbow  
https://prismjs.com/  
Найти такой, который одинаково будет работать как на сервере, 
так и на клиенте.