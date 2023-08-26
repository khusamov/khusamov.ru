'use client'
import {INavigationItem} from '@/components/navigation/INavigationItem'
import {ListItem, ListItemButton} from '@mui/joy'
import {SxProps} from '@mui/joy/styles/types'
import {useRouter} from 'next/navigation'
import React, {MouseEvent} from 'react'
import {usePathname} from 'next/navigation'

interface INavigationListItemsProps {
	items: INavigationItem[]

	/**
	 * Включить или выключить выравнивание меню разделов по центру.
	 * @default false
	 * @type {boolean}
	 */
	centered?: boolean
}

const sxForCentered: SxProps = {
	// Для того, чтобы центрировать блок с пунктами меню
	// для первого элемента выставляем marginInlineStart.
	marginInlineStart: 'auto'
}

export function NavigationListItems({items, centered = false}: INavigationListItemsProps) {
	const router = useRouter()
	const activeUrl = usePathname()
	const createOnClickHandler = (
		(url: string) => (event: MouseEvent) => {
			event.preventDefault()
			if (activeUrl !== url) {
				router.push(url)
			}
		}
	)
	return items.map(
		({title, url}, index) => {
			const sx: SxProps = (
				centered
					? (index ? {} : sxForCentered)
					: {}
			)
			const onClick = createOnClickHandler(url)
			const selected = activeUrl.startsWith(url)
			return (
				<ListItem key={url} sx={sx}>
					<ListItemButton selected={selected} onClick={onClick} component='a' href={url}>
						{title}
					</ListItemButton>
				</ListItem>
			)
		}
	)
}