'use client'
import {INavigationItem} from '@/components/navigation/INavigationItem'
import {NavigationListItems} from '@/components/navigation/NavigationListItems'
import {List} from '@mui/joy'
import {useSelectedLayoutSegment} from 'next/navigation'

interface IPostIndexProps {
	items: INavigationItem[]
}

export function PostIndex({items}: IPostIndexProps) {
	const selectedLayoutSegment = useSelectedLayoutSegment()
	const section = selectedLayoutSegment ? selectedLayoutSegment.split('/')[0] : null
	items = (
		section
			? items.filter(post => post.url.includes(section))
			: []
	)
	return (
		<List>
			<NavigationListItems items={items}/>
		</List>
	)
}