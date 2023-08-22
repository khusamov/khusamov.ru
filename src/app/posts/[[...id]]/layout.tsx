import {INavigationItem} from '@/components/navigation/INavigationItem'
import {PostIndex} from '@/components/navigation/post-index/PostIndex'
import {Box} from '@mui/joy'
import {allPosts} from 'contentlayer/generated'
import React from 'react'
import {IPageProps} from './page'

const navigationItems: INavigationItem[] = (
	allPosts
		.filter(post => post.level === 2)
		.map(
			post => ({
				title: post.title,
				url: post.url
			})
		)
)

interface ILayoutProps {
	children: React.ReactNode
	params: IPageProps['params']
}

export default function Layout({children, params: {id = []}}: ILayoutProps) {
	const activeArticlePath = id.join('/')

	return (
		<Box sx={{display: 'flex', minHeight: '100dvh'}}>
			<Box sx={{width: 300, backgroundColor: 'cyan'}}>
				<PostIndex items={navigationItems}/>
			</Box>
			<Box sx={{flex: 1, overflow: 'auto'}}>
				<article>{children}</article>
			</Box>
		</Box>
	)
}