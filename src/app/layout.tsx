import {ArticleContextWrapper} from '@/components/ArticleContextWrapper'
import {HomeListItem} from '@/components/HomeListItem'
import {Navigation} from '@/components/Navigation'
import React from 'react'
import type {Metadata} from 'next'
import {getArticleInfo} from '@/functions/getArticleInfo'
import {JoyRoot} from '@/components/JoyRoot'
// import 'prism-themes/themes/prism-one-light.css' // https://github.com/timlrx/rehype-prism-plus
// import '@/styles/rehype-prism-plus.css'
import '@/styles/rehype-pretty-code.css' // https://rehype-pretty-code.netlify.app/
import '@/styles/globals.css'

export const metadata: Metadata = {
	title: 'khusamov.ru',
	description: 'Личный сайт веб-разработчика'
}

interface ILayoutProps {
	children: React.ReactNode
}

export default async function Layout({children}: ILayoutProps) {
	const rootArticleInfo = await getArticleInfo()
	return (
		<html lang='ru'>
			<body>
				<ArticleContextWrapper articleInfoList={rootArticleInfo.children}>
					<JoyRoot>
						<Navigation rootArticleInfo={rootArticleInfo}/>
						{children}
					</JoyRoot>
				</ArticleContextWrapper>
			</body>
		</html>
	)
}
