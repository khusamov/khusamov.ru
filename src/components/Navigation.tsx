'use client'
import {HomeListItem} from '@/components/HomeListItem'
import {ModeToggleListItem} from '@/components/ModeToggleListItem'
import {IArticleInfo} from '@/interfaces/IArticleInfo'
import {Box, List, ListItem, ListItemButton} from '@mui/joy'
import {SxProps} from '@mui/joy/styles/types'
import {useRouter, useSelectedLayoutSegments} from 'next/navigation'
import React from 'react'

interface INavigationProps {
	rootArticleInfo: IArticleInfo
}

/**
 * Включить или выключить выравнивание меню разделов по центру.
 * @type {boolean}
 */
const centered: boolean = true

export function Navigation({rootArticleInfo}: INavigationProps) {
	const router = useRouter()
	const rootArticleInfoList = rootArticleInfo.children.filter(articleInfo => articleInfo.children.length > 0)
	const selectedSegments = useSelectedLayoutSegments()
	const activeArticlePath = selectedSegments[1]
	const getOnClick = (articlePath: string) => () => {
		if (activeArticlePath !== articlePath) {
			router.push(`/articles/${articlePath}`)
		}
	}
	return (
		<Box sx={{p: 1}}>
			<List orientation='horizontal'>
				<HomeListItem/>
				{
					rootArticleInfoList.map(
						({meta, articlePath}, index) => {
							const sx: SxProps = centered ? (
								index ? {} : {marginInlineStart: 'auto'}
							) : {}
							const onClick = getOnClick(articlePath)
							const selected = activeArticlePath === articlePath
							return (
								<ListItem key={index} sx={sx}>
									<ListItemButton onClick={onClick} selected={selected}>
										{meta.title as string}
									</ListItemButton>
								</ListItem>
							)
						}
					)
				}
				<ModeToggleListItem sx={{marginInlineStart: 'auto'}}/>
			</List>
		</Box>
	)
}