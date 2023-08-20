'use client'
import {useArticleContext} from '@/context/ArticleContext'
import {List, ListItem, ListItemButton} from '@mui/joy'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import React from 'react'

interface IArticleIndexProps {
	activeArticlePath: string
}

export function ArticleIndex({activeArticlePath}: IArticleIndexProps) {
	const router = useRouter()
	const articleInfoList = useArticleContext().filter(({articlePath}) => articlePath !== '_index')
	const getOnClick = (articlePath: string) => () => {
		if (activeArticlePath !== articlePath) {
			router.push(`/articles/${articlePath}`)
		}
	}
	return (
		<List>
			{
				articleInfoList.map(
					({meta, articlePath}, index) => (
						<ListItem key={index}>
							<ListItemButton onClick={getOnClick(articlePath)} selected={activeArticlePath === articlePath}>
								{meta.title as string}
							</ListItemButton>
						</ListItem>
					)
				)
			}
		</List>
	)
}