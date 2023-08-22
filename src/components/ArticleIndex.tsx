'use client'
import {useArticleContext} from '@/context/ArticleContext'
import {List, ListItem, ListItemButton} from '@mui/joy'
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
					({meta, articlePath}, index) => {
						const onClick = getOnClick(articlePath)
						const selected = activeArticlePath === articlePath
						return (
							<ListItem key={index}>
								<ListItemButton onClick={onClick} selected={selected}>
									{meta.title as string}
								</ListItemButton>
							</ListItem>
						)
					}
				)
			}
		</List>
	)
}