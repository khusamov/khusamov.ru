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

Для этого можно попробовать другие отрисовщики подсветки кода:  
https://github.com/ccampbell/rainbow  
https://prismjs.com/  
Найти такой, который одинаково будет работать как на сервере, 
так и на клиенте.

Сайт как модуль
---------------

Директорию, где хранится сборка, можно менять опцией `distDir` в файле `next.config.js`. 
В свою очередь конфигурацию Next из файла `next.config.js` можно хранить 
в файле `server.js` (в одной из опций при создании nextApplication).
https://github.com/zeit/next.js#setting-a-custom-build-directory
Таким образом при запуске prepare можно указать директорию, откуда брать Next-проект, 
и директорию, где располагать сборку.  