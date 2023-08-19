import {ArticleContextWrapper} from '@/components/ArticleContextWrapper'
import {HomeLink} from '@/components/HomeLink'
import React from 'react'
import type {Metadata} from 'next'
import {getArticleInfoList} from '@/functions/getArticleInfoList'
import {JoyRoot} from '@/components/JoyRoot'
// import 'prism-themes/themes/prism-one-light.css' // https://github.com/timlrx/rehype-prism-plus
// import '@/styles/rehype-prism-plus.css'
import '@/styles/rehype-pretty-code.css' // https://rehype-pretty-code.netlify.app/

export const metadata: Metadata = {
	title: 'khusamov.ru',
	description: 'Личный сайт веб-разработчика'
}

interface ILayoutProps {
	children: React.ReactNode
}

export default async function Layout({children}: ILayoutProps) {
	const articleInfoList = await getArticleInfoList()
	return (
		<html lang='ru'>
			<body>
				<HomeLink/>
				<hr/>
				<ArticleContextWrapper articleInfoList={articleInfoList}>
					<JoyRoot>
						{children}
					</JoyRoot>
				</ArticleContextWrapper>
			</body>
		</html>
	)
}
