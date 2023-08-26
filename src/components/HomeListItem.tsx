'use client'
import React, {MouseEvent} from 'react'
import {Home} from '@mui/icons-material'
import {ListItem, ListItemButton} from '@mui/joy'

// https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment
import {useRouter, useSelectedLayoutSegments} from 'next/navigation'

const url = '/'

interface IRootLinkProps {
	label?: string
}

export const HomeListItem = ({}: IRootLinkProps) => {
	const router = useRouter()
	const segments = useSelectedLayoutSegments()

	const onClick = (event: MouseEvent) => {
		event.preventDefault()
		if (segments.length !== 0) {
			router.push(url)
		}
	}

	return (
		<ListItem>
			<ListItemButton onClick={onClick} component='a' href={url}>
				<Home/>
			</ListItemButton>
		</ListItem>
	)
}