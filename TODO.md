TODO
====

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