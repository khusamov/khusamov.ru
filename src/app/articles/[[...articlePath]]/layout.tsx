import {ArticleIndex} from '@/components/ArticleIndex'
import {ModeToggleListItem} from '@/components/ModeToggleListItem'
import {Box} from '@mui/joy'
import React from 'react'
import {IPageProps} from './page'

interface ILayoutProps {
	children: React.ReactNode
	params: IPageProps['params']
}

export default function Layout({children, params: {articlePath = []}}: ILayoutProps) {
	const activeArticlePath = articlePath.join('/')
	return (
		<Box sx={{display: 'flex', minHeight: '100dvh'}}>
			<Box sx={{width: 300, backgroundColor: 'cyan'}}>
				<ArticleIndex activeArticlePath={activeArticlePath}/>
			</Box>
			<Box sx={{flex: 1, overflow: 'auto'}}>
				<article>{children}</article>
			</Box>
		</Box>
	)
}