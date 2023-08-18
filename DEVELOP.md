Инструкции для разработчика
===========================

Запуск терминала Windows
------------------------

```bash
wt --maximized ^
	--title "Develop" -d C:\@repo\github.com\khusamov\khusamov.ru ; ^
	--title "Build" -d C:\@repo\github.com\khusamov\khusamov.ru ; ^
	--title "Serve" -d C:\@repo\github.com\khusamov\khusamov.ru
```

Getting Started
---------------

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. 
The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) 
to automatically optimize and load Inter, a custom Google Font.