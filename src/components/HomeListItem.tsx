'use client'
import React from 'react'
import {Home} from '@mui/icons-material'
import {ListItem, ListItemButton} from '@mui/joy'

// https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment
import {useRouter, useSelectedLayoutSegments} from 'next/navigation'

interface IRootLinkProps {
	label?: string
}

export const HomeListItem = ({}: IRootLinkProps) => {
	const router = useRouter()
	const segments = useSelectedLayoutSegments()

	const onClick = () => {
		if (segments.length !== 0) {
			router.push('/')
		}
	}

	return (
		<ListItem>
			<ListItemButton onClick={onClick}>
				<Home/>
			</ListItemButton>
		</ListItem>
	)
}