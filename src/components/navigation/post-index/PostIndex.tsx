'use client'
import {INavigationItem} from '@/components/navigation/INavigationItem'
import {NavigationListItems} from '@/components/navigation/NavigationListItems'
import {List} from '@mui/joy'
import {useSelectedLayoutSegments} from 'next/navigation'

interface IPostIndexProps {
	items: INavigationItem[]
}

export function PostIndex({items}: IPostIndexProps) {
	const selectedLayoutSegment = useSelectedLayoutSegments()
	console.log('selectedLayoutSegment',selectedLayoutSegment)
	return (
		<List>
			<NavigationListItems items={items}/>
		</List>
	)
}