'use client'
import {useArticleContext} from '@/context/ArticleContext'
import {List, ListItem, ListItemButton} from '@mui/joy'
import Link from 'next/link'
import React from 'react'

interface IArticleIndexProps {
	activeArticlePath: string
}

export function ArticleIndex({activeArticlePath}: IArticleIndexProps) {
	const articleInfoList = useArticleContext().filter(({id}) => id !== '_index')
	return (
		<List>
			{
				articleInfoList.map(
					({meta, id}, index) => (
						<ListItem key={index}>
							<ListItemButton>
								{activeArticlePath === id && (
									meta.title as string
								)}
								{activeArticlePath !== id && (
									<Link href={`/articles/${id}`}>
										{meta.title as string}
									</Link>
								)}
							</ListItemButton>
						</ListItem>
					)
				)
			}
		</List>
	)
}