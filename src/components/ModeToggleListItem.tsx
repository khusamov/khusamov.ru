'use client'
import {useMounted} from '@/hooks/useMounted'
import {DarkMode, LightMode, Monitor} from '@mui/icons-material'
import {ListItem, ListItemButton, ListItemProps} from '@mui/joy'
import {useColorScheme} from '@mui/joy/styles'
import React from 'react'

interface IModeToggleButtonProps extends ListItemProps {}

/**
 * Внимание, без функции getInitColorSchemeScript() кнопка ModeToggle не работает.
 * @link https://mui.com/joy-ui/main-features/dark-mode-optimization/
 * @link https://mui.com/joy-ui/getting-started/tutorial/
 * @link https://mui.com/material-ui/material-icons/
 */
export function ModeToggleListItem(props: IModeToggleButtonProps) {
	const {mode, setMode} = useColorScheme()
	const [isMounted] = useMounted()

	if (!isMounted) {
		return (
			<ListItem {...props}>
				<ListItemButton>
					<Monitor/>
				</ListItemButton>
			</ListItem>
		)
	}

	const onClick = () => setMode(mode === 'light' ? 'dark' : 'light')

	return (
		<ListItem {...props}>
			<ListItemButton onClick={onClick}>
				{mode === 'light' ? <DarkMode/> : <LightMode/>}
			</ListItemButton>
		</ListItem>
	)
}