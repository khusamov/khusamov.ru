'use client'
import React, {MouseEvent} from 'react'
import {Home} from '@mui/icons-material'
import {ListItem, ListItemButton, ListItemContent, ListItemDecorator, ListItemProps} from '@mui/joy'

// https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment
import {useRouter, useSelectedLayoutSegments} from 'next/navigation'

const url = '/'

interface IRootLinkProps extends ListItemProps {
	label?: string
	logo?: string
}

export const HomeListItem = ({logo = 'Khusamov.ru', ...rest}: IRootLinkProps) => {
	const router = useRouter()
	const segments = useSelectedLayoutSegments()

	const isActive = segments.length === 0

	const onClick = (event: MouseEvent) => {
		event.preventDefault()
		if (!isActive) {
			router.push(url)
		}
	}

	return (
		<ListItem {...rest}>
			<ListItemButton selected={isActive} onClick={onClick} component='a' href={url}>
				<ListItemDecorator>
					<Home/>
				</ListItemDecorator>
				<ListItemContent>
					{logo}
				</ListItemContent>
			</ListItemButton>
		</ListItem>
	)
}