import {INavigationItem} from '@/components/navigation/INavigationItem'
import {ListItem, ListItemButton} from '@mui/joy'
import {SxProps} from '@mui/joy/styles/types'
import {useRouter, useSelectedLayoutSegments} from 'next/navigation'
import React, {MouseEvent} from 'react'

interface INavigationListItemsProps {
	items: INavigationItem[]

	/**
	 * Включить или выключить выравнивание меню разделов по центру.
	 * @type {boolean}
	 */
	centered?: boolean
}

const sxForCentered: SxProps = {
	// Для того, чтобы центрировать блок с пунктами меню
	// для первого элемента выставляем marginInlineStart.
	marginInlineStart: 'auto'
}

function useActiveUrl(): string {
	const selectedSegments = useSelectedLayoutSegments()
	return '/' + selectedSegments.join('/')
}

export function NavigationListItems({items, centered}: INavigationListItemsProps) {
	const router = useRouter()
	const activeUrl = useActiveUrl()
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
			const selected = activeUrl === url
			return (
				<ListItem key={index} sx={sx}>
					<ListItemButton selected={selected} onClick={onClick} component='a' href={url}>
						{title}
					</ListItemButton>
				</ListItem>
			)
		}
	)
}