'use client'

import {INavigationItem} from '@/components/navigation/INavigationItem'
import {PostIndex} from '@/components/navigation/post-index/PostIndex'
import {Box} from '@mui/joy'
import {Theme} from '@mui/joy/styles/types/theme'
import {SxProps} from '@mui/system/styleFunctionSx'
import React, {PropsWithChildren} from 'react'

interface IPostIndexLayoutProps extends PropsWithChildren {
	navigationItems: INavigationItem[]
}

export function PostIndexLayout({children, navigationItems}: IPostIndexLayoutProps) {
	const sx: SxProps<Theme> = theme => {
		return {
			width: 300,
			backgroundColor: '#f5f5f5',
			[theme.getColorSchemeSelector('dark')]: { // https://mui.com/joy-ui/customization/themed-components/
				backgroundColor: '#2f2f2f'
			}
		}
	}
	return (
		<Box sx={{display: 'flex', height: '100%'}}>
			<Box sx={sx}>
				<PostIndex items={navigationItems}/>
			</Box>
			<Box sx={{flex: 1, overflow: 'auto', p: 2}}>
				<article>{children}</article>
			</Box>
		</Box>
	)
}