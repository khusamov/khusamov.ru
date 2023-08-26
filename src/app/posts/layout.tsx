import {PostIndexLayout} from '@/app/posts/PostIndexLayout'
import {INavigationItem} from '@/components/navigation/INavigationItem'
import {Theme} from '@mui/joy/styles/types/theme'
import {SxProps} from '@mui/system/styleFunctionSx'
import {allPosts} from 'contentlayer/generated'
import React, {PropsWithChildren} from 'react'

const navigationItems: INavigationItem[] = (
	allPosts
		.filter(post => post.level === 3)
		.map(
			post => ({
				title: post.title,
				url: post.url
			})
		)
)

interface ILayoutProps extends PropsWithChildren {}

export default function({children}: ILayoutProps) {
	const sx: SxProps<Theme> = theme => {
		return {
			width: 300,
			backgroundColor: theme.palette.mode === 'light' ? 'magenta' : 'cyan'
		}
	}
	return (
		<PostIndexLayout navigationItems={navigationItems}>
			{children}
		</PostIndexLayout>
	)
}