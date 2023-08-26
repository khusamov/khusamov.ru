'use client'
import {HomeListItem} from '@/components/HomeListItem'
import {ModeToggleListItem} from '@/components/ModeToggleListItem'
import {INavigationItem} from '@/components/navigation/INavigationItem'
import {NavigationListItems} from '@/components/navigation/NavigationListItems'
import {Box, List, ListDivider} from '@mui/joy'
import React from 'react'

interface INavigationProps {
	items: INavigationItem[]

	/**
	 * Включить или выключить выравнивание меню разделов по центру.
	 * @type {boolean}
	 */
	centered?: boolean
}

export function Navigation({items, centered = true}: INavigationProps) {
	return (
		<Box sx={{p: 1, borderBottom: '1px solid silver'}}>
			<List orientation='horizontal'>
				<HomeListItem/>
				{!centered && <ListDivider inset='gutter'/>}
				<NavigationListItems items={items} centered={centered}/>
				<ModeToggleListItem sx={{marginInlineStart: 'auto'}}/>
			</List>
		</Box>
	)
}