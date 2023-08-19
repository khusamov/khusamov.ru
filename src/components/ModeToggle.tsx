'use client'
import {useMounted} from '@/hooks/useMounted'
import React from 'react'
import {IconButton} from '@mui/joy'
import {useColorScheme} from '@mui/joy/styles'
import {LightMode, DarkMode, Monitor} from '@mui/icons-material'

/**
 * Внимание, без функции getInitColorSchemeScript() кнопка ModeToggle не работает.
 * @link https://mui.com/joy-ui/main-features/dark-mode-optimization/
 * @link https://mui.com/joy-ui/getting-started/tutorial/
 * @link https://mui.com/material-ui/material-icons/
 */
export function ModeToggle() {
	const {mode, setMode} = useColorScheme()
	const [isMounted] = useMounted()

	if (!isMounted) {
		return (
			<IconButton variant='soft'>
				<Monitor/>
			</IconButton>
		)
	}

	const onClick = () => setMode(mode === 'light' ? 'dark' : 'light')

	return (
		<IconButton variant='soft' onClick={onClick}>
			{mode === 'light' ? <DarkMode/> : <LightMode/>}
		</IconButton>
	)
}